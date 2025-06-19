import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './app/route'; // <-- Make sure this path matches your folder structure!
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/notFoundRoute';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000'], // <-- Update with your frontend URL(s)
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Mount central API routes (all features)
app.use('/api/v1', routes);

// Health check route
app.get('/', (req: Request, res: Response) => {
  res.send('Gym API is up and running!');
});

// 404 Handler (for any unmatched route)
app.use(notFoundRoute);

// Global error handler (must be last)
app.use(globalErrorHandler);

export default app;
