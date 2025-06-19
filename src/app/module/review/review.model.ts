import { Schema, model } from 'mongoose';
import { IReview } from './review.interface';

const reviewSchema = new Schema<IReview>(
  {
    trainer: { type: Schema.Types.ObjectId, ref: 'Trainer' },
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
    gym: { type: String }, // Or ObjectId if you model gyms
     //@ts-ignore
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
  },
  { timestamps: true }
);

export const Review = model<IReview>('Review', reviewSchema);
