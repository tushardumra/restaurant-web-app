const orderModel = require("../models/order.model");
const foodModel = require("../models/food.model");

// Controller function to handle placing an order

const placeOrder = async (req, res) => {
  try {
    const { items } = req.body;

    let totalAmount = 0;

    // Loop through each item in the order to calculate the total amount
    for (let item of items) {
      const food = await foodModel.findById(item.food); // Find the food item by its ID

      if (!food) {
        return res.status(404).json({ message: "Food item not found" });
      }

      totalAmount += food.price * item.quantity;
    }

    const order = await orderModel.create({
      user: req.user.id,
      items,
      totalAmount,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in placing order " });
  }
};

// Controller function to get all orders of a user

const getUserOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ user: req.user.id })
      .populate("items.food", "name price");

    res.status(200).json({
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in getting users orders" });
  }
};

// Controller function to cancel an order from user's side

const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderModel.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Check if the order belongs to the user making the request
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (order.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Order cannot be cancelled at this stage" });
    }

    // Update the order status to cancelled
    order.status = "cancelled";
    await order.save();

    res.status(200).json({
      message: "Order cancelled successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in Order cancelling" });
  }
};

// Controller function to get all orders for admin and staff

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("user", "name email")
      .populate("items.food", "name price");

    res.status(200).json({
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in getting all orders" });
  }
};

// Controller function to update order status from restaurant side (admin and staff)

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await orderModel.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Valid Status values that can be set for an order
    const validStatus = [
      "pending",
      "accepted",
      "preparing",
      "completed",
      "cancelled",
    ];

    // Check if the provided status value is valid
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    order.status = status;
    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "Server Error in Updating order status from restaurant side",
      });
  }
};

// Controller function to get total sales and total orders for admin dashboard analytics

const getTotalSales = async (req, res) => {
  try {
    const result = await orderModel.aggregate([
      {
        $match: {
          status: { $ne: "cancelled" }      // Exclude cancelled orders from sales data
        }
      },
      {
        // Group the orders to calculate total revenue and total number of orders
        $group: {                      
          _id: null,
          totalRevenue: { $sum: "$totalAmount" },
          totalOrders: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      // Return 0 if there are no totalRevenue and no orders to avoid undefined values
      totalRevenue: result[0]?.totalRevenue || 0,  
      totalOrders: result[0]?.totalOrders || 0,    
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in getting sales data"});
  }
}

// Controller function to get number of orders and total revenue generated per day for admin dashboard analytics
const getOrdersPerDay = async (req, res) => {
  try {
    const data = await orderModel.aggregate([
      {
        $match: {
          status: { $ne: "cancelled" }     // Exclude cancelled orders from per day sales data
        }
      },
      {
        $group: {                      // Group the orders by date to calculate daily sales
          _id: { 
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$createdAt"
            }
          },
          totalOrders: { $sum: 1 },
          totalRevenue: { $sum: "$totalAmount" }
        }
      },
      {
        $sort: { _id: 1 }    // Sort the results by date in ascending order
      }
    ]);

    res.status(200).json(data);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in getting per day sales data" });
  }
}

module.exports = {
  placeOrder,
  getUserOrders,
  cancelOrder,
  getAllOrders,
  updateOrderStatus,
  getTotalSales,
  getOrdersPerDay
};
