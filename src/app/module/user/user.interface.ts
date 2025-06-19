import { USER_ROLE } from './user.constant';

export type TUserRole = typeof USER_ROLE[keyof typeof USER_ROLE];

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: TUserRole;
  createdAt?: Date;
  updatedAt?: Date;
  // Add profile fields if needed
}
