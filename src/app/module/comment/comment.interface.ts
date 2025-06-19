export interface IComment {
  _id?: string;
  post: string; // reference to BlogPost
  user: string; // reference to User
  content: string;
  parent?: string; // for threaded replies
  createdAt?: Date;
}
