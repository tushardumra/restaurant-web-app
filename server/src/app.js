const express = require("express"); // Import the Express library
const morgan = require("morgan"); // Import Morgan for logging HTTP requests
const cors = require("cors"); // import CORS middleware
const cookieParser = require("cookie-parser"); // import cookie-parser to parse cookies
const authRoutes = require("./routes/auth.routes"); // import from auth.routes.js file
const protectedRoute = require("./middlewares/auth.middleware");
const foodRoutes = require("./routes/food.routes");
const orderRoutes = require("./routes/order.routes");
const uploadRoutes = require("./routes/upload.routes");

const swaggerUi = require("swagger-ui-express");
const specs = require("./config/swagger")

const jwt = require('jsonwebtoken');

const app = express(); // Create an instance of an Express application

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  })
); // CORS middleware to handle Cross-Origin Resource Sharing
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(morgan("dev")); // Middleware to log HTTP requests in the console
app.use(cookieParser()); // Middleware to parse cookies from incoming requests

app.use("/api/auth", authRoutes); // Use the authentication routes for any requests to /api/auth

app.get('/api/auth/me', async (req, res) => {
  try {
    // 1. Grab token from parsed cookies
    const token = req.cookies.token; 

    if (!token) {
      return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    // 2. Verify token safely
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Find your user (e.g., from MongoDB or your database)
    // const user = await User.findById(decoded.id).select('-password');
    const user = { id: decoded.id, name: "Gurpreet Singh", email: "gurpreet@mail.com" }; // example mock

    res.status(200).json({ user });

  } catch (error) {
    console.error("Backend Auth Error:", error.message);
    // Returning a 401 instead of crashing with a 500
    res.status(401).json({ message: "Token is not valid" }); 
  }
});

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

app.use("/api/upload", uploadRoutes);

module.exports = app;
