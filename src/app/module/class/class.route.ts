import { Router } from 'express';
import * as classController from './class.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { classZodSchema } from './class.validation';

const router = Router();

router.post(
  '/',
  auth('SUPER_ADMIN', 'ADMIN', 'TRAINER','MEMBER'),
  validateRequest(classZodSchema),
  classController.createClass
);

router.get('/', classController.getClasses);
router.get('/categories', classController.getCategories);
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

router.post(
  '/:id/enroll',
  auth('MEMBER'), // Only members can enroll
  classController.enrollClass
);

export default router;