import express from 'express';
import router from './routers';

const app = express();
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('hello');
});

export default app;
