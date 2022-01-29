import express from 'express';
import router from './routers';

const port = 3000;
const app = express();
app.use('/api', router);
app.listen(port, () => console.log(`Server started at port ${port}`));

export default app;
