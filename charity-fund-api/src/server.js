import express from 'express';

const server = express();

server.get('/test', (_, res) => {
  res.json({ message: 'Hello world' });
});

server.listen(3030);
