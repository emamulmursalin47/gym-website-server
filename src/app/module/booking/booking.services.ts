import { Booking } from './booking.model';
import { IBooking } from './booking.interface';

export const createBooking = async (payload: IBooking) => {
  return await Booking.create(payload);
};

export const getBookingsByUser = async (userId: string) => {
  return await Booking.find({ user: userId }).populate('class');
};

export const cancelBooking = async (id: string) => {
  return await Booking.findByIdAndDelete(id);
};
