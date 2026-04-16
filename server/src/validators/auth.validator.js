const { body, validationResult } = require("express-validator");

// Helper function to handle validation errors
const validationErrors = async (req, res, next) => {
  const errors = validationResult(req);       // Check for validation errors in the request

  // If there are validation errors, return a 400 Bad Request response with the error details
  if (!errors.isEmpty()) {            
    return res.status(400).json({ errors: errors.array() });
  }

  next();   
};

// Validation rules for user registration
const registerValidation = [
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 to 20 characters"),

  body("email").isEmail().withMessage("Invalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[A-Z]/)
    .withMessage("Must contain uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Must contain lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Must contain number")
    .matches(/[@$!%*?&]/)
    .withMessage("Must contain special character")

    // Ensure password does not contain the word "password"
    .not().contains("password", { ignoreCase: true })  
    .withMessage('Password cannot contain the word "password"')

    .trim()  
    
    // Ensure password is not the same as the username
    .custom((value, { req }) => {  
      if (value === req.body.name) {
        throw new Error("Password cannot be same as username");
      }
      return true;
    }),

  validationErrors, // Middleware to handle validation errors
];

// Validation rules for user login
const loginValidation = [
  body("identifier").notEmpty().withMessage("Email or username is required"),

  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { registerValidation, loginValidation };
