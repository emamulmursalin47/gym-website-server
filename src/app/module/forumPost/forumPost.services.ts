import { ForumPost } from './forumPost.model';
import { IForumPost } from './forumPost.interface';

export const createForumPost = async (payload: IForumPost) => {
  return await ForumPost.create(payload);
};

export const getAllForumPosts = async () => {
  return await ForumPost.find().populate('user', 'name');
};
