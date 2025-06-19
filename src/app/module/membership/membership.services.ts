import { IMembership } from './membership.interafce';
import { Membership } from './membership.model';


export const createMembership = async (payload: IMembership) => {
  return await Membership.create(payload);
};

export const getAllMemberships = async () => {
  return await Membership.find().populate('user', 'name email');
};

export const getMembershipByUser = async (userId: string) => {
  return await Membership.findOne({ user: userId });
};

export const updateMembership = async (id: string, payload: Partial<IMembership>) => {
  return await Membership.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteMembership = async (id: string) => {
  return await Membership.findByIdAndDelete(id);
};
