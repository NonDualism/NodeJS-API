import { NextFunction, Request, Response } from 'express';
import { CreateTodo } from '../api/todos/todos.schema';
import { TodoModel } from '../api/todos/todos.model';

export const createTodo = async (
  req: Request<{}, {}, CreateTodo>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqBody = req.body;
    const result = await TodoModel.create({ ...reqBody });
    res.json({
      msg: 'Todo created successfully.',
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

export const findOneTodo = async (
  req: Request<{ id: string }, {}, CreateTodo>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await TodoModel.findById(id);
    console.log(result);
    res.json({
      msg: `Todo fetched successfully having an Id ${id}`,
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.body;
    const result = await TodoModel.deleteOne({ _id: id });
    console.log(result);
    res.json({
      msg: `Todo deleted successfully having an Id ${id}`,
      result: result,
    });
  } catch (err) {
    next(err);
  }
};

export const findAllTodos = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await TodoModel.find();
    res.json({
      msg: 'Fetched all todos',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
