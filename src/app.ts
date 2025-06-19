import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './app/routes';
import { notFound, errorHandler } from './app/middlewares/error.middleware';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000'], // Update this for your frontend URL(s)
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Mount central API routes
app.use('/api/v1', routes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
