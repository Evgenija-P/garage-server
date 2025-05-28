const { ApiFindCarError } = require("./errors");

const asyncWrapper = (controller) => {
  return (reg, res, next) => {
    controller(reg, res).catch(next);
  };
};

const handleMongooseError = (error, data, next) => {
  const {name, code} = error
  const status = (name === "MongoServerError" && code === 11000) ? 409 : 400
  error.status = status;
  next()
}

const errorHandler = (err, req, res, next) => {
  if (err.message.includes("Cast to ObjectId failed for value")) {
    return res.status(400).json({
      message: "id is invalid",
    });
  }
  if (err instanceof ApiFindCarError) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
};

module.exports = {
  asyncWrapper,
  handleMongooseError,
  errorHandler,
};