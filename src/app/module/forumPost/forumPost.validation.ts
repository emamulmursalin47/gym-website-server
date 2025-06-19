import { z } from 'zod';

export const forumPostZodSchema = z.object({
  title: z.string().min(2),
  content: z.string(),
  tags: z.array(z.string()).optional(),
  locked: z.boolean().optional(),
});
