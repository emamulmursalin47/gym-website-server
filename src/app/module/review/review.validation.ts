import { z } from 'zod';

export const reviewZodSchema = z.object({
  trainer: z.string().optional(),
  class: z.string().optional(),
  gym: z.string().optional(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});
