const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(400).send("Token is required");
  try {
    const decoded = jwt.verify(token, "secret123");
    req.user = decoded.userId;
    next()
  } catch (error) {
    return res.status(401).send("Access denied");
  }
};
module.exports = authMiddleware
