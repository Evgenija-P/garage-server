require("dotenv").config()
const {SECRET} = process.env
const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../../helpers/errors");
const { User } = require("../../models/user");
const bcrypt = require("bcrypt")



const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "Email or password field not filled" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Invalid login or password" });
  }

  const editPassword = password.trim( );

  const isValidPassword = bcrypt.compareSync(editPassword, user.password);

  if (!isValidPassword) {
    return res.status(404).json({ message: "Invalid login or password" });
  }


  const payload = { _id: user._id };
  console.log(SECRET)
  const token = jwt.sign(payload, SECRET, { expiresIn: "24h"})

  if (!token) {
    return res.status(404).json({ message: "Unable to save token" });
  }
  await User.findByIdAndUpdate(user._id, { token });

  res
    .status(201)
    .json({ code: 201, message: "Success", token: token, user: { email }});
};

module.exports = login;