import { z } from 'zod';

export const workoutLogZodSchema = z.object({
  date: z.string().datetime(),
  activities: z.array(
    z.object({
      exercise: z.string(),
      sets: z.number().optional(),
      reps: z.number().optional(),
      weight: z.number().optional(),
    })
  ),
  notes: z.string().optional(),
});
