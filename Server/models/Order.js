const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    products: Array,
    total: Number
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);