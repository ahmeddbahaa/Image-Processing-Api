import express from 'express';
import router from './routers';

const app = express();
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello User this is root endpoint');
});
app.use('/api', router as express.Router);

export default app;
