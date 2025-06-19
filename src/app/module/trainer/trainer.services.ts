import { Trainer } from './trainer.model';
import { ITrainer } from './trainer.interface';

export const createTrainer = async (payload: ITrainer) => {
  return await Trainer.create(payload);
};

export const getAllTrainers = async () => {
  return await Trainer.find().populate('user', 'name email');
};

export const getTrainerById = async (id: string) => {
  return await Trainer.findById(id).populate('user', 'name email');
};

export const updateTrainer = async (id: string, payload: Partial<ITrainer>) => {
  return await Trainer.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteTrainer = async (id: string) => {
  return await Trainer.findByIdAndDelete(id);
};
