import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as bookingService from './booking.services';
import sendResponse from '../../utils/sendResponse';

export const createBooking = catchAsync(async (req: Request, res: Response) => {
  const booking = await bookingService.createBooking({ ...req.body, user: (req as any).user.id });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Booking created successfully',
    data: booking,
  });
});

export const getBookingsByUser = catchAsync(async (req: Request, res: Response) => {
  const bookings = await bookingService.getBookingsByUser((req as any).user.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User bookings fetched successfully',
    data: bookings,
  });
});

export const cancelBooking = catchAsync(async (req: Request, res: Response) => {
  await bookingService.cancelBooking(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Booking cancelled successfully',
    data: null,
  });
});
