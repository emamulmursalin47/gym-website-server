import { z } from 'zod';

export const classZodSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  trainer: z.string(),
  capacity: z.number().min(1),
  schedule: z.array(z.string().datetime()),
  enrolledUsers: z.array(z.string()).optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CANCELLED']).optional(),
});
