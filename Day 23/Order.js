const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: String,

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    product: String,
    quantity: Number,
    price: Number,
    orderDate: Date
});

module.exports = mongoose.model("Order", orderSchema, "orders");