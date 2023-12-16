import { getModelForClass, prop } from '@typegoose/typegoose';

export class Todo {
  @prop({ required: true, unique: true })
  description: String;

  @prop({ required: true, default: false })
  done: Boolean;
}

export const TodoModel = getModelForClass(Todo);
