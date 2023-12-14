import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
require('dotenv').config();
import api from './api';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

const currentPort = process.env.PORT || 5000;

app.listen(currentPort, () => {
  console.log(`Listening: http://localhost:${currentPort}`);
});
