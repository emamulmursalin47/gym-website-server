import { User } from './user.model';
import { IUser } from './user.interface';

export const createUser = async (payload: IUser) => {
  return await User.create(payload);
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const getUserById = async (id: string) => {
  return await User.findById(id).select('-password');
};

export const getAllUsers = async () => {
  return await User.find().select('-password');
};
