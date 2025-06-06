const {HttpError} = require("./HttpError")

const tryCatchWrapper = (enpointFn) => {
    return async (req, res, next) => {
      try {
        await enpointFn(req, res, next);
      } catch (error) {
        return next(error);
      }
    };
  };
  
  module.exports = {
    tryCatchWrapper,
    HttpError
  };