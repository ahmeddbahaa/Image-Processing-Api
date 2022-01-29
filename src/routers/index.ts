import express from 'express';
import images from './api/images';

const router = express.Router();
router.use('/images', images);

export default router;
