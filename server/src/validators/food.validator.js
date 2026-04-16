const { body, validationResult } = require("express-validator");

// Helper function to handle validation errors
const validationErrors = async (req, res, next) => {
  const errors = validationResult(req);          // Check for validation errors in the request

  // If there are validation errors, return a 400 Bad Request response with the error details
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

// Validation rules for placing a food order
const addFoodValidation = [
  body("name").notEmpty().withMessage("Food name is required"),

  body("price")
    .isFloat({ min: 1 })    // Ensure price is a float and at least 1
    .withMessage("Price must be a positive number"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("stock")
    .optional()           // Stock is optional, but if provided, it must be an integer and at least 0
    .isInt({ min: 0 })    // Ensure stock is an integer and at least 0
    .withMessage("Stock must be 0 or more"),

  validationErrors,     // Middleware to handle validation errors
];  

module.exports = { addFoodValidation };
