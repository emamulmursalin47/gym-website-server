import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as authService from './auth.services';
import sendResponse from '../../utils/sendResponse';

export const register = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.register(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Registration successful',
    data: user,
  });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { user, token } = await authService.login(email, password);

  // Set HTTP-only cookie (JWT)
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Login successful',
    data: user,
  });
});

export const logout = catchAsync(async (_: Request, res: Response) => {
  res.clearCookie('token');
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Logout successful',
    data: null,
  });
});
