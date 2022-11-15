import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

const server = express();

connectDB();

server.use(cors());

server.get('/test', (_, res) => {
  res.json({ message: 'Hello world' });
});

server.listen(3030);
