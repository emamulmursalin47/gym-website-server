import { Error } from 'mongoose';

const handleValidationError = (err: Error.ValidationError) => {
  const errors = Object.values(err.errors).map((el: any) => ({
    path: el.path,
    message: el.message,
  }));
  return {
    statusCode: 400,
    message: 'Validation error',
    errors,
  };
};

export default handleValidationError;
