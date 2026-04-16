const express = require('express');
const authValidation = require("../validators/auth.validator");

// Import the auth controller to handle registration and login logic   
const authController = require('../controllers/auth.controller');  

// Create a new router instance to define routes related to authentication
const router = express.Router();   

// Define the route for user registration and login, linking them to the respective controller functions

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account with name, email, and password
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: Tushar
 *               email:
 *                 type: string
 *                 example: tushar@gmail.com
 *               password:
 *                 type: string
 *                 example: Tushar@123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.post('/register', authValidation.registerValidation, authController.registerUser); 

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     description: Login using email or username and password
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *               - password
 *             properties:
 *               identifier:
 *                 type: string
 *                 example: tushar@gmail.com
 *               password:
 *                 type: string
 *                 example: Tushar@123
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Validation error
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', authValidation.loginValidation, authController.loginUser);

module.exports = router;