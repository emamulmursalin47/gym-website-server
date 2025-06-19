import { Schema, model } from 'mongoose';
import { IMembership } from './membership.interafce';

const membershipSchema = new Schema<IMembership>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    features: [{ type: String }],
    status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'CANCELLED'], default: 'ACTIVE' },
  },
  { timestamps: true }
);

export const Membership = model<IMembership>('Membership', membershipSchema);
