import { Comment } from './comment.model';
import { IComment } from './comment.interface';

export const createComment = async (payload: IComment) => {
  return await Comment.create(payload);
};

export const getCommentsForPost = async (postId: string) => {
  return await Comment.find({ post: postId }).populate('user', 'name');
};
