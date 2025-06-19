import { Schema, model } from 'mongoose';
import { IEquipment } from './equipment.interface';

const equipmentSchema = new Schema<IEquipment>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, enum: ['AVAILABLE', 'MAINTENANCE', 'OUT_OF_ORDER'], default: 'AVAILABLE' },
    lastMaintenance: { type: Date },
    maintenanceHistory: [
      {
        date: { type: Date },
        details: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export const Equipment = model<IEquipment>('Equipment', equipmentSchema);
