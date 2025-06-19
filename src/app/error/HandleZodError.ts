import { ZodError } from 'zod';

const handleZodError = (err: ZodError) => {
  const errors = err.errors.map((e) => ({
    path: e.path[e.path.length - 1],
    message: e.message,
  }));
  return {
    statusCode: 400,
    message: 'Validation error',
    errors,
  };
};

export default handleZodError;
