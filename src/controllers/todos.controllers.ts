import { NextFunction, Request, Response } from 'express';
import { CreateTodo } from '../api/todos/todos.schema';
import { Todo } from '../api/todos/todos.model';
export const createOne = async (
  req: Request<{}, {}, CreateTodo>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);
    const result = await Todo.create({ ...reqBody });
    console.log(result);
  } catch (err) {
    next(err);
  }
};
