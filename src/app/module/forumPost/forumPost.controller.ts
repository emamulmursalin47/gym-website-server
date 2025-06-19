import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as forumPostService from './forumPost.services';
import sendResponse from '../../utils/sendResponse';

export const createForumPost = catchAsync(async (req: Request, res: Response) => {
  const post = await forumPostService.createForumPost({ ...req.body, user: (req as any).user.id });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Forum post created successfully',
    data: post,
  });
});

export const getAllForumPosts = catchAsync(async (_: Request, res: Response) => {
  const posts = await forumPostService.getAllForumPosts();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Forum posts fetched successfully',
    data: posts,
  });
});
