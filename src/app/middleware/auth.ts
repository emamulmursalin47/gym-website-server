import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const auth =
  (...requiredRoles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const token =
      req.cookies?.token ||
      req.header('Authorization')?.replace('Bearer ', '');

    if (!token)  res.status(401).json({ message: 'No token, authorization denied' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
      req.user = decoded;

      if (
        requiredRoles.length &&
        !requiredRoles.includes(decoded.role)
      ) {
         res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
      }
      next();
    } catch {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };

export default auth;
