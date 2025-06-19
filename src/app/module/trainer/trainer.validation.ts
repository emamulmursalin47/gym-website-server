import { z } from 'zod';

export const trainerZodSchema = z.object({
  user: z.string(),
  specialties: z.array(z.string()),
  bio: z.string().optional(),
  availability: z.array(
    z.object({
      day: z.string(),
      times: z.array(z.string()),
    })
  ).optional(),
  rating: z.number().optional(),
});
