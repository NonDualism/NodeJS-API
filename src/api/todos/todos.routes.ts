import { Router } from 'express';
import { createOne } from '../../controllers/todos.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { createTodoSchema } from './todos.schema';
const router = Router();

router.post('/create', createOne);

export default router;
