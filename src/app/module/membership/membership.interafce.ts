export interface IMembership {
  _id?: string;
  user: string;
  type: string;
  startDate: Date;
  endDate: Date;
  features: string[];
  status?: 'ACTIVE' | 'INACTIVE' | 'CANCELLED';
}
