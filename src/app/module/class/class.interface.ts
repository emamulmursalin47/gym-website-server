export interface ISchedule {
  day: string;
  time: string;
}

export interface ITrainer {
  _id: string;
  name: string;
  avatar?: string;
  rating?: number;
}

export interface IClass {
  _id?: string;
  name: string;
  description: string;
  trainer: ITrainer | string; // Can be populated or just ID
  category: string;
    enrolledUsers: string[]; 
  difficulty: 'Beginner' | 'Intermediate' | 'High';
  duration: number;
  maxCapacity: number;
  currentEnrollment: number;
  schedule: ISchedule[];
  location: string;
  price: number;
  image: string;
  features: string[];
  status?: 'ACTIVE' | 'INACTIVE' | 'CANCELLED';
  createdAt?: Date;
  updatedAt?: Date;
}