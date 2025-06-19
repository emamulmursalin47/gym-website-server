export interface IClass {
  _id?: string;
  name: string;
  description?: string;
  trainer: string; // User _id or Trainer _id
  capacity: number;
  schedule: Date[];
  enrolledUsers?: string[]; // User _ids
  status?: 'ACTIVE' | 'INACTIVE' | 'CANCELLED';
  createdAt?: Date;
  updatedAt?: Date;
}
