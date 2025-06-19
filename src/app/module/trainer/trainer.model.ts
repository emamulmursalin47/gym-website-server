import { Schema, model } from 'mongoose';
import { ITrainer } from './trainer.interface';

const trainerSchema = new Schema<ITrainer>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    specialties: [{ type: String }],
    bio: String,
    availability: [
      {
        day: String,
        times: [String],
      },
    ],
    rating: Number,
  },
  { timestamps: true }
);

export const Trainer = model<ITrainer>('Trainer', trainerSchema);
