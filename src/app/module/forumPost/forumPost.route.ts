import { Router } from 'express';
import * as forumPostController from './forumPost.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { forumPostZodSchema } from './forumPost.validation';

const router = Router();

router.post('/', auth(), validateRequest(forumPostZodSchema), forumPostController.createForumPost);
router.get('/', forumPostController.getAllForumPosts);

export default router;
