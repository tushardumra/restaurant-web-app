const jwt = require("jsonwebtoken");
//const User = require("../models/user.model");

/* ----- Middleware function to protect routes and ensure that the user is authenticated ---- */

const protect = (req, res, next) => {
  
  console.log("COOKIE:", req.cookies);
  const token = req.cookies.token; // get token from cookies

  console.log("TOKEN:", token);
  if (!token) {
    // if doesn't have token
    return res.status(401).json({ message: "Not authorized, no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // token verification

    console.log("DECODED:", decoded);
    // const user = User.findById(decoded.id).select("-password"); 

    // console.log("USER:", user);
    // if (!user) {
    //   return res.status(401).json({
    //     message: "User not found",
    //   });
    // }

    req.user = decoded;  // store decoded token value in req.user for later use

    console.log("DECODED USER:", decoded);
    next();
    
  } catch (error) {
    // console.log("MIDDLEWARE ERROR:",error);
    // return res.status(500).json({
    //   message: "Middleware crashed",
    // });
    res.status(401).json({ message: "Invalid token, token failed" });
  }
};

/* ----- Middleware function to authorize user based on their role ----- */

const authorizeRoles = (...roles) => {
  // function that takes multiple roles as arguments
  return (req, res, next) => {
    // this middleware function will run after protect middleware
    if (!roles.includes(req.user.role)) {
      // if user's role is not included in the allowed roles
      return res.status(403).json({
        message: `Access denied for role: ${req.user.role}`,
      });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };
