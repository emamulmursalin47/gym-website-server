import { Router } from 'express';
import * as equipmentController from './equipment.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { equipmentZodSchema } from './equipment.validation';

const router = Router();

router.post('/', auth('SUPER_ADMIN', 'ADMIN'), validateRequest(equipmentZodSchema), equipmentController.createEquipment);
router.get('/', equipmentController.getAllEquipment);
router.patch('/:id', auth('SUPER_ADMIN', 'ADMIN'), validateRequest(equipmentZodSchema.partial()), equipmentController.updateEquipment);
router.delete('/:id', auth('SUPER_ADMIN', 'ADMIN'), equipmentController.deleteEquipment);

export default router;
