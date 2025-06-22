import { Schema, model } from 'mongoose';
import { IClass, ISchedule } from './class.interface';

const scheduleSchema = new Schema<ISchedule>({
  day: { type: String, required: true },
  time: { type: String, required: true }
});

const classSchema = new Schema<IClass>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    trainer: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    category: { type: String, required: true },
    difficulty: { 
      type: String, 
      enum: ['Beginner', 'Intermediate', 'High'], 
      required: true 
    },
    duration: { type: Number, required: true },
    maxCapacity: { type: Number, required: true },
    currentEnrollment: { type: Number, default: 0 },
    schedule: [scheduleSchema],
    location: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    features: [{ type: String }],
    status: { 
      type: String, 
      enum: ['ACTIVE', 'INACTIVE', 'CANCELLED'], 
      default: 'ACTIVE' 
    },
  },
  { timestamps: true }
);

export const ClassModel = model<IClass>('Class', classSchema);