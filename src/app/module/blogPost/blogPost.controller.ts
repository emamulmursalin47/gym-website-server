import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import * as blogPostService from './blogPost.services';
import sendResponse from '../../utils/sendResponse';

export const createBlogPost = catchAsync(async (req: Request, res: Response) => {
  const post = await blogPostService.createBlogPost(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog post created successfully',
    data: post,
  });
});

export const getAllBlogPosts = catchAsync(async (_: Request, res: Response) => {
  const posts = await blogPostService.getAllBlogPosts();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog posts fetched successfully',
    data: posts,
  });
});
