import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as equipmentService from './equipment.services';
import sendResponse from '../../utils/sendResponse';

export const createEquipment = catchAsync(async (req: Request, res: Response) => {
  const equipment = await equipmentService.createEquipment(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Equipment added successfully',
    data: equipment,
  });
});

export const getAllEquipment = catchAsync(async (_: Request, res: Response) => {
  const equipment = await equipmentService.getAllEquipment();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All equipment fetched successfully',
    data: equipment,
  });
});

export const updateEquipment = catchAsync(async (req: Request, res: Response) => {
  const updated = await equipmentService.updateEquipment(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Equipment updated successfully',
    data: updated,
  });
});

export const deleteEquipment = catchAsync(async (req: Request, res: Response) => {
  await equipmentService.deleteEquipment(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Equipment deleted successfully',
    data: null,
  });
});
