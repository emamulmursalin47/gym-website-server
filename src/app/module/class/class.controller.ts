import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as classService from './class.services';
import sendResponse from '../../utils/sendResponse';
import { FilterQuery } from 'mongoose';
import { IClass } from './class.interface';

export const createClass = catchAsync(async (req: Request, res: Response) => {
  const created = await classService.createClass(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Class created successfully',
    data: created,
  });
});

export const getClasses = catchAsync(async (req: Request, res: Response) => {
  const filters: FilterQuery<IClass> = {};
  
  // Add filtering based on query params
  if (req.query.category) {
    filters.category = req.query.category as string;
  }
  if (req.query.difficulty) {
    filters.difficulty = req.query.difficulty as string;
  }
  if (req.query.searchTerm) {
    filters.$or = [
      { name: { $regex: req.query.searchTerm, $options: 'i' } },
      { description: { $regex: req.query.searchTerm, $options: 'i' } }
    ];
  }

  const classes = await classService.getAllClasses(filters);
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

export const getCategories = catchAsync(async (_: Request, res: Response) => {
  const categories = await classService.getClassCategories();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Class categories fetched successfully',
    data: categories,
  });
});

export const enrollClass = catchAsync(async (req: Request, res: Response) => {
  const updated = await classService.enrollInClass(
    req.params.id, 
    req.user._id // Assuming you have user auth middleware
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Enrolled in class successfully',
    data: updated,
  });
});