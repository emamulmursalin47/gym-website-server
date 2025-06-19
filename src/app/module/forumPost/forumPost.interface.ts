export interface IForumPost {
  _id?: string;
  title: string;
  content: string;
  user: string;
  tags?: string[];
  locked?: boolean;
  createdAt?: Date;
}
