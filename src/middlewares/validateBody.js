const { HttpError } = require("../helpers/errors");


const validateBody = (schema) => {
  return (req, res, next) => {
    
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    return next();
  };
};

module.exports = {
  validateBody,
};