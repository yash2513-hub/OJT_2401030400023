const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    customerId: String,
    name: String,
    city: String,
    phone: String,
    email: String
});

module.exports = mongoose.model("Customer", userSchema, "customers");