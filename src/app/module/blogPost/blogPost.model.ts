import { Schema, model } from 'mongoose';
import { IBlogPost } from './blogPost.interface';

const blogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
    seoTitle: String,
    seoDescription: String,
  },
  { timestamps: true }
);

export const BlogPost = model<IBlogPost>('BlogPost', blogPostSchema);
