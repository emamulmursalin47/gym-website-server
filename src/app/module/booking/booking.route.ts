import { Router } from 'express';
import * as bookingController from './booking.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { bookingZodSchema } from './booking.validation';

const router = Router();

router.post('/', auth(), validateRequest(bookingZodSchema), bookingController.createBooking);
router.get('/', auth(), bookingController.getBookingsByUser);
router.delete('/:id', auth(), bookingController.cancelBooking);

export default router;
