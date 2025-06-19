import { z } from 'zod';
import { USER_ROLE } from './user.constant';

export const userRegisterZodSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum([USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN, USER_ROLE.USER]).optional(),
});

export const userLoginZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
