class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    //Maintain stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
