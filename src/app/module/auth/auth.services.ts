import { User } from '../user/user.model';
import { generateToken } from '../../utils/JWTHelpers';

export const register = async (payload: any) => {
  return await User.create(payload);
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken({ id: user._id, email: user.email, role: user.role });
  return { user, token };
};
