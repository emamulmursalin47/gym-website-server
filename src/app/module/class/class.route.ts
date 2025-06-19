import { Router } from 'express';
import * as classController from './class.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { classZodSchema } from './class.validation';

const router = Router();

router.post(
  '/',
  auth('SUPER_ADMIN', 'ADMIN', 'TRAINER'), // Only trainers or admins can create classes
  validateRequest(classZodSchema),
  classController.createClass
);
router.get('/', classController.getClasses);
router.get('/:id', classController.getClass);
router.patch(
  '/:id',
  auth('SUPER_ADMIN', 'ADMIN', 'TRAINER'),
  validateRequest(classZodSchema.partial()),
  classController.updateClass
);
router.delete(
  '/:id',
  auth('SUPER_ADMIN', 'ADMIN', 'TRAINER'),
  classController.deleteClass
);

export default router;
