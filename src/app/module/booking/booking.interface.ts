export interface IBooking {
  _id?: string;
  user: string;
  class: string;
  status?: 'RESERVED' | 'CANCELLED' | 'ATTENDED';
  date: Date;
}
