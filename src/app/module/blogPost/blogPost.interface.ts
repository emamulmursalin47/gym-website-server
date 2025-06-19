export interface IBlogPost {
  _id?: string;
  title: string;
  content: string;
  tags?: string[];
  published?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
