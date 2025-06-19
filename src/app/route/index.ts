import { Router } from 'express';

import authRoutes from '../module/auth/auth.route';
import userRoutes from '../module/user/user.route';
import classRoutes from '../module/class/class.route';
import trainerRoutes from '../module/trainer/trainer.route';
import bookingRoutes from '../module/booking/booking.route';
import membershipRoutes from '../module/membership/membership.route';
import workoutLogRoutes from '../module/workoutLog/workoutLog.route';
import blogPostRoutes from '../module/blogPost/blogPost.route';
import commentRoutes from '../module/comment/comment.route';
import forumPostRoutes from '../module/forumPost/forumPost.route';
import forumReplyRoutes from '../module/forumReply/forumReply.route';
import reviewRoutes from '../module/review/review.route';
import equipmentRoutes from '../module/equipment/equipment.route';


const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/classes', classRoutes);
router.use('/trainers', trainerRoutes);
router.use('/bookings', bookingRoutes);
router.use('/memberships', membershipRoutes);
router.use('/workout-logs', workoutLogRoutes);
router.use('/blog-posts', blogPostRoutes);
router.use('/comments', commentRoutes);
router.use('/forum-posts', forumPostRoutes);
router.use('/forum-replies', forumReplyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/equipment', equipmentRoutes);


export default router;
