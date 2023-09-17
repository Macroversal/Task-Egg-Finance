// Import the necessary modules
const { ValidationError, NotFoundError, GeneralError } = require('./custom-errors');

// Define custom error classes (you can create these in a separate file)
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class GeneralError extends Error {
  constructor(message) {
    super(message);
    this.name = 'GeneralError';
    this.statusCode = 500;
  }
}

// Error-handling middleware function
function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Log the error for debugging purposes
  console.error(err.stack);

  // Customize error responses based on error type
  if (err instanceof ValidationError) {
    statusCode = 400;
  } else if (err instanceof NotFoundError) {
    statusCode = 404;
  }

  // Send an error response to the client
  res.status(statusCode).json({ error: message });
}

module.exports = { ValidationError, NotFoundError, GeneralError, errorHandler };
