const express = require("express");
const mongoose = require("mongoose");

const Customer = require("C:\Users\Yashu\Codefactory\MongoTask\models\User.js");
const Order = require("C:\Users\Yashu\Codefactory\MongoTask\models\Order.js");
const orderRoutes = require("C:\Users\Yashu\Codefactory\MongoTask\routes\orderRoutes.js");
const reportRoutes = require("C:\Users\Yashu\Codefactory\MongoTask\routes\reportRoutes.js");

const app = express();

app.use(express.json());

app.use("/orders", orderRoutes);
app.use("/reports", reportRoutes);

mongoose.connect(
    "mongodb://127.0.0.1:27017/BillingSystemDB"
)
.then(()=>console.log("MongoDB Connected"));

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});

