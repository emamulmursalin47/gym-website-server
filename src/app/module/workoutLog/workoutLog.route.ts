import { Router } from 'express';
import * as workoutLogController from './workoutLog.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { workoutLogZodSchema } from './workoutLog.validation';

const router = Router();

router.post('/', auth(), validateRequest(workoutLogZodSchema), workoutLogController.createWorkoutLog);
router.get('/', auth(), workoutLogController.getMyWorkoutLogs);

export default router;
