import express from 'express';
import images from './api/images';

const router = express.Router();
router.get('/', (req: express.Request, res: express.Response): void => {
  res.send('hello this is api endpoint ');
});
router.use('/images' as string, images as express.Router);

export default router;
