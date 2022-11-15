import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/test', (_, res) => {
  res.json({ message: 'Hello world' });
});

server.listen(3030);
