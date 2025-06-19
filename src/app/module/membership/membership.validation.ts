import { z } from 'zod';

export const membershipZodSchema = z.object({
  user: z.string(),
  type: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  features: z.array(z.string()),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CANCELLED']).optional(),
});
