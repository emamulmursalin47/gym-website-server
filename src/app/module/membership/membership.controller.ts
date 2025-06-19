import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as membershipService from './membership.services';
import sendResponse from '../../utils/sendResponse';

export const createMembership = catchAsync(async (req: Request, res: Response) => {
  const created = await membershipService.createMembership(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Membership created successfully',
    data: created,
  });
});

export const getAllMemberships = catchAsync(async (_: Request, res: Response) => {
  const memberships = await membershipService.getAllMemberships();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Memberships fetched successfully',
    data: memberships,
  });
});

export const getMembershipByUser = catchAsync(async (req: Request, res: Response) => {
  const membership = await membershipService.getMembershipByUser(req.params.userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Membership fetched successfully',
    data: membership,
  });
});

export const updateMembership = catchAsync(async (req: Request, res: Response) => {
  const updated = await membershipService.updateMembership(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Membership updated successfully',
    data: updated,
  });
});

export const deleteMembership = catchAsync(async (req: Request, res: Response) => {
  await membershipService.deleteMembership(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Membership deleted successfully',
    data: null,
  });
});
