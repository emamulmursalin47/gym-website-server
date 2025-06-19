import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as userService from './user.services';
import sendResponse from '../../utils/sendResponse';

export const getProfile = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.getUserById((req as any).user.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User profile fetched successfully',
    data: user,
  });
});

export const getAllUsers = catchAsync(async (_: Request, res: Response) => {
  const users = await userService.getAllUsers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All users fetched successfully',
    data: users,
  });
});
