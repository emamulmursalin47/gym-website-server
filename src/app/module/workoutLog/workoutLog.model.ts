import { Schema, model } from 'mongoose';
import { IWorkoutLog } from './workoutLog.interface';

const workoutLogSchema = new Schema<IWorkoutLog>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    activities: [
      {
        exercise: String,
        sets: Number,
        reps: Number,
        weight: Number,
      },
    ],
    notes: String,
  },
  { timestamps: true }
);

export const WorkoutLog = model<IWorkoutLog>('WorkoutLog', workoutLogSchema);
