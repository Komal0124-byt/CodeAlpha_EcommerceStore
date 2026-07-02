const Order = require("../models/Order");

// Place Order
const placeOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
};