export interface IReview {
  _id?: string;
  trainer?: string;
  class?: string;
  gym?: string;
  user: string;
  rating: number;
  comment?: string;
}
