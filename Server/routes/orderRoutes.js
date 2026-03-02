const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const Order = require("../models/Order");


router.post("/", auth, async (req, res) => {

    const order = await Order.create({
        userId: req.user.id,
        products: req.body.products,
        total: req.body.total
    });

    res.json(order);

});


router.get("/", auth, async (req, res) => {

    const orders = await Order.find({
        userId: req.user.id
    });

    res.json(orders);

});

module.exports = router;