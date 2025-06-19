import { Review } from './review.model';
import { IReview } from './review.interface';

export const createReview = async (payload: IReview) => {
  return await Review.create(payload);
};

export const getReviews = async () => {
  return await Review.find().populate('user', 'name');
};
