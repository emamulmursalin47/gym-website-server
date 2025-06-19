import { z } from 'zod';

export const commentZodSchema = z.object({
  post: z.string(),
  content: z.string(),
  parent: z.string().optional(),
});
