import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as commentService from './comment.services';
import sendResponse from '../../utils/sendResponse';

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await commentService.createComment({ ...req.body, user: (req as any).user.id });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Comment added successfully',
    data: comment,
  });
});

export const getCommentsForPost = catchAsync(async (req: Request, res: Response) => {
  const comments = await commentService.getCommentsForPost(req.params.postId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Comments fetched successfully',
    data: comments,
  });
});
