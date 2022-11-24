const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // console.log(err);

  // Mongoose BAD ObjectID
  if (err.name === "CastError") {
    const message = `Resource not found with id of - ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const message = `Field already exists, duplicate value detected`;
    error = new ErrorResponse(message, 400);
  }

  // Validation Error - i.e. Missing field Values
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => {
      return val.properties.message;
    });

    console.log(messages);

    error = new ErrorResponse(messages, 400);
  }

  res.status(error.statusCode || 500).json({
    status: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
