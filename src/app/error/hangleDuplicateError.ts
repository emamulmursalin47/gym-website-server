import { MongoError } from 'mongodb';

const handleDuplicateError = (err: MongoError) => {
  const match = err.message.match(/(["'])(\\?.)*?\1/);
  const value = match ? match[0] : '';
  const message = `Duplicate field value: ${value}`;
  return {
    statusCode: 409,
    message,
    errors: [{ path: '', message }],
  };
};

export default handleDuplicateError;
