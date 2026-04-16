const mongoose = require('mongoose');  // Import the Mongoose library for MongoDB interactions

// Connect to the MongoDB database using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database Connected Successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = connectDB;   