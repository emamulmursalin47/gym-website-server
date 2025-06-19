import { Router } from 'express';
import * as forumReplyController from './forumReply.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { forumReplyZodSchema } from './forumReply.validation';

const router = Router();

router.post('/', auth(), validateRequest(forumReplyZodSchema), forumReplyController.createForumReply);
router.get('/post/:postId', forumReplyController.getRepliesForPost);

export default router;
