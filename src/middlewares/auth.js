require("dotenv").config()
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { SECRET } = process.env;

const auth = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    if (!token || tokenType !== "Bearer") {
      return res.status(400).json({ message: "No auth token provided" });
    }
    const decoded = jwt.verify(token, SECRET);
    const user = await User.findById(decoded._id).select(
      "-password"
    );
    req.user = user;
    console.log(user);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorizates" });
  }
};
module.exports = {
  authMiddleware: auth,
};