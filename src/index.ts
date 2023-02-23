import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import diaryRouter from './routes/diariesRoutes';

app.use(express.json());

app.use('/api/diaries', diaryRouter);

app.get('/', (_req, res) => {
  res.status(200).json({ msg: 'Hello world!' });
  console.log('someone ping somehting here');
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
