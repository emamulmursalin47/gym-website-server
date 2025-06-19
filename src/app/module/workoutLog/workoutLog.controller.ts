import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as workoutLogService from './workoutLog.services';
import sendResponse from '../../utils/sendResponse';

export const createWorkoutLog = catchAsync(async (req: Request, res: Response) => {
  const log = await workoutLogService.createWorkoutLog({ ...req.body, user: (req as any).user.id });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Workout log created successfully',
    data: log,
  });
});

export const getMyWorkoutLogs = catchAsync(async (req: Request, res: Response) => {
  const logs = await workoutLogService.getWorkoutLogsByUser((req as any).user.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Workout logs fetched successfully',
    data: logs,
  });
});
