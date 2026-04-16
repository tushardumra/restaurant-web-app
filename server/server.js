require('dotenv').config();           // Load environment variables from the .env file
const app = require('./src/app')      // Import the Express application from the app.js file
const connectDB = require('./src/db/db');  // Import the function to connect to the MongoDB database

// Connect to the MongoDB database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 5000;  // Use the PORT environment variable or default to 3000

app.listen(process.env.PORT || PORT, () => {             
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
})