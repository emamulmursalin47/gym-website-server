import { z } from 'zod';

export const forumReplyZodSchema = z.object({
  post: z.string(),
  content: z.string(),
  parent: z.string().optional(),
});
