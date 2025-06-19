import { Router } from 'express';
import * as reviewController from './review.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { reviewZodSchema } from './review.validation';

const router = Router();

router.post('/', auth(), validateRequest(reviewZodSchema), reviewController.createReview);
router.get('/', reviewController.getReviews);

export default router;
