export interface IForumReply {
  _id?: string;
  post: string; // reference to ForumPost
  user: string;
  content: string;
  parent?: string; // reply to another reply (threaded)
  createdAt?: Date;
}
