import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import topicRouter from './routes/topicRoutes';
import contentRouter from './routes/contentRoutes';
import historyRouter from './routes/historyRoutes';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', topicRouter);
app.use('/api', contentRouter);
app.use('/api', historyRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
