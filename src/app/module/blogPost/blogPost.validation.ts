import { z } from 'zod';

export const blogPostZodSchema = z.object({
  title: z.string().min(2),
  content: z.string(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});
