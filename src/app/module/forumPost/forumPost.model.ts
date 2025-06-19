import { Schema, model } from 'mongoose';
import { IForumPost } from './forumPost.interface';

const forumPostSchema = new Schema<IForumPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
     //@ts-ignore
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: [{ type: String }],
    locked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ForumPost = model<IForumPost>('ForumPost', forumPostSchema);
