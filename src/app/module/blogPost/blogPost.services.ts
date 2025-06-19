import { BlogPost } from './blogPost.model';
import { IBlogPost } from './blogPost.interface';

export const createBlogPost = async (payload: IBlogPost) => {
  return await BlogPost.create(payload);
};

export const getAllBlogPosts = async () => {
  return await BlogPost.find();
};
