import { Router } from 'express';
import * as membershipController from './membership.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { membershipZodSchema } from './membership.validation';

const router = Router();

router.post('/', auth('SUPER_ADMIN', 'ADMIN'), validateRequest(membershipZodSchema), membershipController.createMembership);
router.get('/', auth('SUPER_ADMIN', 'ADMIN'), membershipController.getAllMemberships);
router.get('/user/:userId', auth(), membershipController.getMembershipByUser);
router.patch('/:id', auth('SUPER_ADMIN', 'ADMIN'), validateRequest(membershipZodSchema.partial()), membershipController.updateMembership);
router.delete('/:id', auth('SUPER_ADMIN', 'ADMIN'), membershipController.deleteMembership);

export default router;
