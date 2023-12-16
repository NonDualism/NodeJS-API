import { getModelForClass } from '@typegoose/typegoose';
import { prop } from 'typegoose';
import mongoose from 'mongoose';

// @modelOptions
// export class Todo {
//   @prop({ required: true, unique: true })
//   description: String;

//   @prop({ required: true, default: false })
//   done: Boolean;
// }

// export const TodoModel = getModelForClass(Todo);

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  done: {
    type: Boolean,
  },
});

export const Todo = mongoose.model('Todo', todoSchema);
