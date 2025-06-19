import { Router } from 'express';
import * as trainerController from './trainer.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { trainerZodSchema } from './trainer.validation';

const router = Router();

router.post(
  '/',
  auth('SUPER_ADMIN', 'ADMIN'),
  validateRequest(trainerZodSchema),
  trainerController.createTrainer
);
router.get('/', trainerController.getAllTrainers);
router.get('/:id', trainerController.getTrainer);
router.patch('/:id', auth('SUPER_ADMIN', 'ADMIN'), validateRequest(trainerZodSchema.partial()), trainerController.updateTrainer);
router.delete('/:id', auth('SUPER_ADMIN', 'ADMIN'), trainerController.deleteTrainer);

export default router;
