import { Schema, model } from 'mongoose';
import { IComment } from './comment.interface';

const commentSchema = new Schema<IComment>(
  {
     //@ts-ignore
    post: { type: Schema.Types.ObjectId, ref: 'BlogPost', required: true },
     //@ts-ignore
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'Comment' },
  },
  { timestamps: true }
);

export const Comment = model<IComment>('Comment', commentSchema);
