import { Schema, model } from 'mongoose';
import { IForumReply } from './forumReply.interface';

const forumReplySchema = new Schema<IForumReply>(
  {
     //@ts-ignore
    post: { type: Schema.Types.ObjectId, ref: 'ForumPost', required: true },
     //@ts-ignore
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'ForumReply' },
  },
  { timestamps: true }
);

export const ForumReply = model<IForumReply>('ForumReply', forumReplySchema);
