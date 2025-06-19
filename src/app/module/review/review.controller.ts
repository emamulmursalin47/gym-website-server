import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as reviewService from './review.services';
import sendResponse from '../../utils/sendResponse';

export const createReview = catchAsync(async (req: Request, res: Response) => {
  const review = await reviewService.createReview({ ...req.body, user: (req as any).user.id });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Review created successfully',
    data: review,
  });
});

export const getReviews = catchAsync(async (_: Request, res: Response) => {
  const reviews = await reviewService.getReviews();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Reviews fetched successfully',
    data: reviews,
  });
});
