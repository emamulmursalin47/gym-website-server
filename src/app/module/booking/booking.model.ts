import { Schema, model } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema<IBooking>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    class: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    status: { type: String, enum: ['RESERVED', 'CANCELLED', 'ATTENDED'], default: 'RESERVED' },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>('Booking', bookingSchema);
