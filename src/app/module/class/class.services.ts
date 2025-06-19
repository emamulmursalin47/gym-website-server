import { ClassModel } from './class.model';
import { IClass } from './class.interface';

export const createClass = async (payload: IClass) => {
  return await ClassModel.create(payload);
};

export const getAllClasses = async () => {
  return await ClassModel.find().populate('trainer', 'name');
};

export const getClassById = async (id: string) => {
  return await ClassModel.findById(id).populate('trainer', 'name');
};

export const updateClass = async (id: string, payload: Partial<IClass>) => {
  return await ClassModel.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteClass = async (id: string) => {
  return await ClassModel.findByIdAndDelete(id);
};
