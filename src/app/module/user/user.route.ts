import { Router } from 'express';
import * as userController from './user.controller';
import auth from '../../middleware/auth';

const router = Router();

router.get('/me', auth(), userController.getProfile);
router.get('/', auth('SUPER_ADMIN', 'ADMIN'), userController.getAllUsers);

export default router;
