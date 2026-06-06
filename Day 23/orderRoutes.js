const express = require("express");
const router = express.Router();

const Order = require("C:\Users\Yashu\Codefactory\MongoTask\models\Order.js");

// Task 21
router.get("/recent-orders", async (req, res) => {

    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

    const orders = await Order.find({
        orderDate: { $gte: fiveDaysAgo }
    }).populate("customerId");

    res.json(orders);
});

// Task 24
router.post("/api/orders", async (req, res) => {

    try {

        const order = await Order.create(req.body);

        res.status(201).json(order);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;