import { ClassModel } from './class.model';
import { IClass } from './class.interface';
import { FilterQuery } from 'mongoose';

export const createClass = async (payload: IClass) => {
  return await ClassModel.create(payload);
};

export const getAllClasses = async (filters: FilterQuery<IClass> = {}) => {
  return await ClassModel.find(filters)
    .populate('trainer', 'name avatar rating')
    .sort({ createdAt: -1 });
};

export const getClassById = async (id: string) => {
  return await ClassModel.findById(id)
    .populate('trainer', 'name avatar rating');
};

export const updateClass = async (id: string, payload: Partial<IClass>) => {
  return await ClassModel.findByIdAndUpdate(id, payload, { 
    new: true 
  }).populate('trainer', 'name avatar rating');
};

export const deleteClass = async (id: string) => {
  return await ClassModel.findByIdAndDelete(id);
};

export const getClassCategories = async () => {
  return await ClassModel.distinct('category');
};

export const enrollInClass = async (classId: string, userId: string) => {
  const cls = await ClassModel.findById(classId);
  if (!cls) throw new Error('Class not found');
  
  if (cls.currentEnrollment >= cls.maxCapacity) {
    throw new Error('Class is already full');
  }

  if (cls.enrolledUsers?.includes(userId)) {
    throw new Error('User already enrolled in this class');
  }

  return await ClassModel.findByIdAndUpdate(
    classId,
    {
      $inc: { currentEnrollment: 1 },
      $addToSet: { enrolledUsers: userId }
    },
    { new: true }
  ).populate('trainer', 'name avatar rating');
};