const express = require("express");
const protectedRoute = require("../middlewares/auth.middleware");
const orderController = require("../controllers/order.controller");
const orderValidation = require("../validators/order.validator");

const router = express.Router();

// User routes, protected by authentication middleware
/*--------------------------------------------------------- */
// Route to place an order

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Place a new order
 *     description: User places an order with food items and quantity
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - items
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - food
 *                     - quantity
 *                   properties:
 *                     food:
 *                       type: string
 *                       example: FOOD_ID
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post("/", protectedRoute.protect, orderValidation.foodOrderValidation, orderController.placeOrder);

// Route to get all orders of a user
router.get("/my-orders", protectedRoute.protect, orderController.getUserOrders);

// Route to cancel an order
router.put("/cancel/:id", protectedRoute.protect, orderController.cancelOrder);

// Admin and staff routes, protected by authentication and role-based authorization middleware
/*--------------------------------------------------------- */
// Route to get all orders
router.get(
  "/all-orders",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin", "staff"),
  orderController.getAllOrders
);

// Route to update order status
router.put(
  "/update-status/:id",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin", "staff"),
  orderController.updateOrderStatus,
);

// Analytics routes for admin, protected by authentication and role-based authorization middleware
/*--------------------------------------------------------- */
// Route to get total sales
router.get("/analytics/total",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin"),
  orderController.getTotalSales
)

// Route to get daily sales data
router.get("/analytics/daily",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin"),
  orderController.getOrdersPerDay
)

module.exports = router;
