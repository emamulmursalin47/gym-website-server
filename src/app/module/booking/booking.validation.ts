import { z } from 'zod';

export const bookingZodSchema = z.object({
  class: z.string(),
  date: z.string().datetime(),
  status: z.enum(['RESERVED', 'CANCELLED', 'ATTENDED']).optional(),
});
