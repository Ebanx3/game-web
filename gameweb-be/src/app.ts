import express from 'express';
const app = express()
import cors from 'cors';
import router from './routes';

//middlewares
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use((req, _res, next) => {
  console.log(req.url);
  console.log(req.originalUrl);
  console.log(req.body);
  next();
});

//routes
app.use('/api', router);



export default app;