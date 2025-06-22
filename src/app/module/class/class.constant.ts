export const CLASS_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  CANCELLED: 'CANCELLED',
} as const;

export const CLASS_DIFFICULTY = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  HIGH: 'High',
} as const;

export const CLASS_CATEGORIES = [
  'Cardio',
  'Strength',
  'Yoga',
  'Pilates',
  'Functional',
  'HIIT',
  'Spin',
  'CrossFit',
  'Dance',
  'Martial Arts'
] as const;