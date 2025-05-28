const bcrypt = require('bcrypt')
const { User } = require("../../models/user");

const registerUser = async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    console.log(user);

    if (user){
        return res.status(409).json({ status: 409, message: "Email already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 10)
  const newUser = await User.create({...req.body, password: hashPassword});

  res.json({
    email: newUser.email
  })
};

module.exports = registerUser;