import { Router } from 'express';
import * as commentController from './comment.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { commentZodSchema } from './comment.validation';

const router = Router();

router.post('/', auth(), validateRequest(commentZodSchema), commentController.createComment);
router.get('/post/:postId', commentController.getCommentsForPost);

export default router;
