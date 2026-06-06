const express = require("express");
const router = express.Router();

const Order = require("C:\Users\Yashu\Codefactory\MongoTask\models\Order.js");

// Task 22
router.get("/ahmedabad-orders", async (req, res) => {

    const result = await Order.aggregate([
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "_id",
                as: "customer"
            }
        },
        {
            $unwind: "$customer"
        },
        {
            $match: {
                "customer.city": "Ahmedabad"
            }
        }
    ]);

    res.json(result);
});

// Task 23
router.get("/billing-report", async (req, res) => {

    const report = await Order.aggregate([
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "_id",
                as: "customer"
            }
        },
        {
            $unwind: "$customer"
        },
        {
            $project: {
                customerName: "$customer.name",
                productName: 1,
                quantity: 1,
                price: 1,
                totalBill: {
                    $multiply: ["$quantity", "$price"]
                }
            }
        }
    ]);

    res.json(report);
});

module.exports = router;