import { Router, Request, Response } from 'express';
import Todo from './todos.model';

const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>) => {
  res.json([
    {
      description: 'first todo',
      done: true,
    },
  ]);
});

export default router;
