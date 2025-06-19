export interface ITrainer {
  _id?: string;
  user: string; // reference to User _id
  specialties: string[];
  bio?: string;
  availability?: {
    day: string;
    times: string[];
  }[];
  rating?: number;
}
