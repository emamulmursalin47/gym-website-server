import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as forumReplyService from './forumReply.services';
import sendResponse from '../../utils/sendResponse';

export const createForumReply = catchAsync(async (req: Request, res: Response) => {
  const reply = await forumReplyService.createForumReply({ ...req.body, user: (req as any).user.id });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Reply added successfully',
    data: reply,
  });
});

export const getRepliesForPost = catchAsync(async (req: Request, res: Response) => {
  const replies = await forumReplyService.getRepliesForPost(req.params.postId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Replies fetched successfully',
    data: replies,
  });
});
