import { z } from 'zod';

const scheduleSchema = z.object({
  day: z.string(),
  time: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Time must be in HH:MM format'
  })
});

export const classZodSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  trainer: z.string(),
  category: z.string().min(2),
  difficulty: z.enum(['Beginner', 'Intermediate', 'High']),
  duration: z.number().min(1),
  maxCapacity: z.number().min(1),
  currentEnrollment: z.number().min(0).optional(),
  schedule: z.array(scheduleSchema).min(1),
  location: z.string().min(2),
  price: z.number().min(0),
  image: z.string().url(),
  features: z.array(z.string().min(2)).min(1),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CANCELLED']).optional()
});