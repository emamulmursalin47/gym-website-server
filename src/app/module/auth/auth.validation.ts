import { z } from 'zod';

export const registerZodSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string().optional()
});

export const loginZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
