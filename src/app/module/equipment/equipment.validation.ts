import { z } from 'zod';

export const equipmentZodSchema = z.object({
  name: z.string(),
  type: z.string(),
  status: z.enum(['AVAILABLE', 'MAINTENANCE', 'OUT_OF_ORDER']).optional(),
  lastMaintenance: z.string().datetime().optional(),
  maintenanceHistory: z.array(
    z.object({
      date: z.string().datetime(),
      details: z.string(),
    })
  ).optional(),
});
