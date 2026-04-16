const express = require("express"); // Import the Express library
const cors = require("cors"); // import CORS middleware
const cookieParser = require("cookie-parser"); // import cookie-parser to parse cookies
const authRoutes = require("./routes/auth.routes"); // import from auth.routes.js file
const protectedRoute = require("./middlewares/auth.middleware");
const foodRoutes = require("./routes/food.routes");
const orderRoutes = require("./routes/order.routes");

const swaggerUi = require("swagger-ui-express");
const specs = require("./config/swagger")

const app = express(); // Create an instance of an Express application

app.use(cors()); // CORS middleware to handle Cross-Origin Resource Sharing
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cookieParser()); // Middleware to parse cookies from incoming requests

app.use("/api/auth", authRoutes); // Use the authentication routes for any requests to /api/auth

app.get(                         // Define a protected route for admin access
  "/api/admin",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin"),
  (req, res) => {
    res.status(200).json({ message: "Welcome Admin" });
  },
);

app.use("/api/food", foodRoutes);    // Use the food routes for any requests to /api/food

app.use("/api/orders", orderRoutes);   // Use the order routes for any requests to /api/orders

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
