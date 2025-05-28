class ApiFindCarError extends Error {
    constructor(message) {
      super(message), (this.status = 400);
    }
  }
  
  class Unauthorized extends ApiFindCarError {
    constructor(message) {
      super(message), (this.status = 401);
    }
  }
  
  class UpdatedFavoriteStatusError extends ApiFindCarError {
    constructor(message) {
      super(message), (this.status = 404);
    }
  }
  
  class Conflict extends ApiFindCarError {
    constructor(message) {
      super(message);
      this.status = 409;
    }
  }
  
  class NotFoundError extends ApiFindCarError {
    constructor(message) {
      super(message), (this.status = 400);
    }
  }
  
  class HttpError extends ApiFindCarError {
    constructor(status, message) {
      super(message), (this.status = status);
    }
  }
  
  module.exports = {
    ApiFindCarError,
    NotFoundError,
    Unauthorized,
    UpdatedFavoriteStatusError,
    HttpError,
    Conflict,
    NotFoundError,
  };