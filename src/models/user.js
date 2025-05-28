const mongoose = require("mongoose");
const { handleMongooseError } = require("../helpers/apiHelpers");
const Joi = require("joi");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const user = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    token: String,
  },
  {
    versionKey: false,
  }
);

user.post("save", handleMongooseError)

const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const User = mongoose.model("user", user);

module.exports = { User, authSchema };