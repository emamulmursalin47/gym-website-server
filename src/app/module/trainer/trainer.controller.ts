import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as trainerService from './trainer.services';
import sendResponse from '../../utils/sendResponse';

export const createTrainer = catchAsync(async (req: Request, res: Response) => {
  const created = await trainerService.createTrainer(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Trainer created successfully',
    data: created,
  });
});

export const getAllTrainers = catchAsync(async (_: Request, res: Response) => {
  const trainers = await trainerService.getAllTrainers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Trainers fetched successfully',
    data: trainers,
  });
});

export const getTrainer = catchAsync(async (req: Request, res: Response) => {
  const trainer = await trainerService.getTrainerById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Trainer fetched successfully',
    data: trainer,
  });
});

export const updateTrainer = catchAsync(async (req: Request, res: Response) => {
  const updated = await trainerService.updateTrainer(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Trainer updated successfully',
    data: updated,
  });
});

export const deleteTrainer = catchAsync(async (req: Request, res: Response) => {
  await trainerService.deleteTrainer(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Trainer deleted successfully',
    data: null,
  });
});
