import { Error } from 'mongoose';

const handleCastError = (err: Error.CastError) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return {
    statusCode: 400,
    message,
    errors: [{ path: err.path, message }],
  };
};

export default handleCastError;
