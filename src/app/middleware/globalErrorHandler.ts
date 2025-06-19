import { Request, Response, NextFunction } from 'express';
import AppError from '../error/AppError';
import handleCastError from '../error/handleCastError';
import handleDuplicateError from '../error/hangleDuplicateError';
import handleValidationError from '../error/handleValidationError';
import handleZodError from '../error/HandleZodError';

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // Zod validation error
  if (err?.name === 'ZodError') {
    const simplified = handleZodError(err);
     res.status(simplified.statusCode).json(simplified);
  }

  // Mongoose validation error
  if (err?.name === 'ValidationError') {
    const simplified = handleValidationError(err);
    res.status(simplified.statusCode).json(simplified);
  }

  // Duplicate key error
  if (err?.code === 11000) {
    const simplified = handleDuplicateError(err);
    res.status(simplified.statusCode).json(simplified);
  }

  // CastError (invalid ObjectId)
  if (err?.name === 'CastError') {
    const simplified = handleCastError(err);
    res.status(simplified.statusCode).json(simplified);
  }

  // Custom AppError
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
    });
  }

  // Default
 res.status(500).json({
    statusCode: 500,
    message: err.message || 'Internal Server Error',
    errors: [],
  });
};

export default globalErrorHandler;
