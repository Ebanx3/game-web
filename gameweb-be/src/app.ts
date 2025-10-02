import express from 'express';
const app = express()
import cors from 'cors';
import router from './routes';
import { showRequest } from './middlewares/showRequest';

//middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use(showRequest);
//routes
app.use('/api', router);



export default app;