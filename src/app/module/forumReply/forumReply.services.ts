import { ForumReply } from './forumReply.model';
import { IForumReply } from './forumReply.interface';

export const createForumReply = async (payload: IForumReply) => {
  return await ForumReply.create(payload);
};

export const getRepliesForPost = async (postId: string) => {
  return await ForumReply.find({ post: postId }).populate('user', 'name');
};
