const userModel = require("../models/user.model"); // Import user model from models folder
const jwt = require("jsonwebtoken"); // Import jsonwebtoken to create and verify JWT tokens
const bcrypt = require("bcryptjs"); // Import bcryptjs to hash and compare hashed passwords

// Controller function to handle user registration
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role = "user" } = req.body; // get values from user

    const isUserAlreadyExists = await userModel.findOne({
      // check user's existence
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExists) {
      // run this block, if user exists
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10); // if new user, make password hashed

    const user = await userModel.create({
      // create new document of new user with hashed pwd
      username,
      email,
      password: hash,
      role: "user",
    });

    const token = jwt.sign(
      {
        // asign token to new user
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
    );

    res.cookie("token", token); // save user's token in browser's cookie storage

    res.status(201).json({
      // at last give success msg and user info
      message: "User registered Successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error in Register" });
  }
};

// Controller function to handle user login
const loginUser = async (req, res) => {
  const { identifier, password } = req.body; // get values from user

  const user = await userModel.findOne({
    // Check if identifier is email or username
    $or: [{ username: identifier }, { email: identifier }],
  });

  if (!user) {
    // run this block, if user's email or username not matched
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  // if username or email is matched then compare saved pwd and current typing pwd
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    // run this block if password doesn't match
    return res.status(401).json({
      message: "Invalid credentials: Password not Matched",
    });
  }

  // if pwd matched asign a token to user
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.cookie("token", token); // now save this token in browser's cookie storage

  res.status(200).json({
    // at last give success msg and user info
    message: "User logged in Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

module.exports = { registerUser, loginUser };
