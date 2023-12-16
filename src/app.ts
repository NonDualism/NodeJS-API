import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import api from './api';
import connectToMongoDbDatabase from './db/dbConnection';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

const currentPort = process.env.PORT || 5000;
connectToMongoDbDatabase();

app.listen(currentPort, () => {
  try {
    console.log('Connected to MongoDB.');
    console.log(`Listening: http://localhost:${currentPort}`);
  } catch (e) {
    console.log(e);
  }
});
