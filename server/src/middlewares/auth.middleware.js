const jwt = require("jsonwebtoken");

/* ----- Middleware function to protect routes and ensure that the user is authenticated ---- */

const protect = (req, res, next) => {
  const token = req.cookies.token; // get token from cookies

  if (!token) {
    // if doesn't have token
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // token verification

    req.user = decoded; // store decoded token value in req.user for later use

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not authorized, token failed" });
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
