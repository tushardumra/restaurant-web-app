const express = require("express");
const foodController = require("../controllers/food.controller");
const protectedRoute = require("../middlewares/auth.middleware");
const foodValidation = require("../validators/food.validator");

const router = express.Router();

// router.post("/add", (req, res, next) => {
//   console.log("Route hit");
//   next();
// }, foodController.addFood);

// Route to add new food item, only admin can add food item
router.post(
  "/add",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin"),
  foodValidation.addFoodValidation,
  foodController.addFood,
);

// Route to get all food items,  anyone can see food menu (admin, staff and user)
router.get("/", foodController.getAllFood);

// Route to update food item, only admin can update food item
router.put(
  "/update/:id",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin"),
  foodController.updateFood,
);

// Route to delete food item, only admin can delete food item
router.delete(
  "/delete/:id",
  protectedRoute.protect,
  protectedRoute.authorizeRoles("admin"),
  foodController.deleteFood,
);

module.exports = router;
