import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as classService from './class.services';
import sendResponse from '../../utils/sendResponse';

export const createClass = catchAsync(async (req: Request, res: Response) => {
  const created = await classService.createClass(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Class created successfully',
    data: created,
  });
});

export const getClasses = catchAsync(async (_: Request, res: Response) => {
  const classes = await classService.getAllClasses();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Classes fetched successfully',
    data: classes,
  });
});

export const getClass = catchAsync(async (req: Request, res: Response) => {
  const cls = await classService.getClassById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Class fetched successfully',
    data: cls,
  });
});

export const updateClass = catchAsync(async (req: Request, res: Response) => {
  const updated = await classService.updateClass(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Class updated successfully',
    data: updated,
  });
});

export const deleteClass = catchAsync(async (req: Request, res: Response) => {
  await classService.deleteClass(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Class deleted successfully',
    data: null,
  });
});
