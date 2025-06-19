import { Schema, model } from 'mongoose';
import { IClass } from './class.interface';

const classSchema = new Schema<IClass>(
  {
    name: { type: String, required: true },
    description: { type: String },
    //@ts-ignore
    trainer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    capacity: { type: Number, required: true },
    schedule: [{ type: Date }],
    enrolledUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'CANCELLED'], default: 'ACTIVE' },
  },
  { timestamps: true }
);

export const ClassModel = model<IClass>('Class', classSchema);
