const { body, validationResult } = require("express-validator");

// Helper function to handle validation errors
const validationErrors = async (req, res, next) => {
  const errors = validationResult(req);       // Check for validation errors in the request

  // If there are validation errors, return a 400 Bad Request response with the error details
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next();
};

// Validation rules for placing a food order
const foodOrderValidation = [
  body("items")
    .isArray({ min: 1 })
    .withMessage("Items must be a non-empty array"),

  body("items.*.food")
    .notEmpty()
    .withMessage("Food ID is required"),
    
  body("items.*.quantity")
    .isInt({ min: 1 })     // Ensure quantity is an integer and at least 1
    .withMessage("Quantity must be at  least 1"),  

  validationErrors  // Middleware to handle validation errors
];

module.exports = { foodOrderValidation }
