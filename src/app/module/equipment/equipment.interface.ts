export interface IEquipment {
  _id?: string;
  name: string;
  type: string;
  status?: 'AVAILABLE' | 'MAINTENANCE' | 'OUT_OF_ORDER';
  lastMaintenance?: Date;
  maintenanceHistory?: {
    date: Date;
    details: string;
  }[];
}
