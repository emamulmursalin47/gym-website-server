import { Equipment } from './equipment.model';
import { IEquipment } from './equipment.interface';

export const createEquipment = async (payload: IEquipment) => {
  return await Equipment.create(payload);
};

export const getAllEquipment = async () => {
  return await Equipment.find();
};

export const updateEquipment = async (id: string, payload: Partial<IEquipment>) => {
  return await Equipment.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteEquipment = async (id: string) => {
  return await Equipment.findByIdAndDelete(id);
};
