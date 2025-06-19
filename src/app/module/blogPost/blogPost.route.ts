import { Router } from 'express';
import * as blogPostController from './blogPost.controller';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { blogPostZodSchema } from './blogPost.validation';

const router = Router();

router.post('/', auth('SUPER_ADMIN', 'ADMIN'), validateRequest(blogPostZodSchema), blogPostController.createBlogPost);
router.get('/', blogPostController.getAllBlogPosts);

export default router;
