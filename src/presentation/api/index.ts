import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import product from './product';

function main() {
  const app = express();
  const port = process.env.PORT || 4000;

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    return res.json({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
  });

  const apiRouter = express.Router();

  apiRouter.use('/products', product);

  app.use('/api/v1', apiRouter);

  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status).json({ message: err.message });
  });

  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
}

export default main;
