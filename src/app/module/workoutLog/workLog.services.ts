import { WorkoutLog } from './workoutLog.model';
import { IWorkoutLog } from './workoutLog.interface';

export const createWorkoutLog = async (payload: IWorkoutLog) => {
  return await WorkoutLog.create(payload);
};

export const getWorkoutLogsByUser = async (userId: string) => {
  return await WorkoutLog.find({ user: userId });
};
