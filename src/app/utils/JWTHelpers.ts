import jwt from 'jsonwebtoken';

export const generateToken = (payload: any, expiresIn = '7d') => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn:'1d' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
