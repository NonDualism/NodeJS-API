import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  findAllTodos,
  findOneTodo,
} from '../../controllers/todos.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { createTodoSchema } from './todos.schema';
const router = Router();

router.get('/', findAllTodos);
router.get('/:id', findOneTodo);
router.post('/create', validateRequest(createTodoSchema), createTodo);
router.delete('/delete', deleteTodo);

export default router;
