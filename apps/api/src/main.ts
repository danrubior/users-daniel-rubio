/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { users } from './data/users.data';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const port = 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);

  app.post(`/api/users`, (req, res) => {
    res.send(users);
  });
});
server.on('error', console.error);
