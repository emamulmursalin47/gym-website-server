export interface IWorkoutLog {
  _id?: string;
  user: string;
  date: Date;
  activities: {
    exercise: string;
    sets?: number;
    reps?: number;
    weight?: number;
  }[];
  notes?: string;
}
