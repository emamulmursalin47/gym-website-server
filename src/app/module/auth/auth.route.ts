import { Router } from 'express';
import * as authController from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { registerZodSchema, loginZodSchema } from './auth.validation';

const router = Router();

router.post('/register', validateRequest(registerZodSchema), authController.register);
router.post('/login', validateRequest(loginZodSchema), authController.login);
router.post('/logout', authController.logout);

export default router;
