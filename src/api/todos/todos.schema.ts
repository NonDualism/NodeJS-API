import * as z from 'zod';

export const createTodoSchema = z.object({
  body: z.object({
    description: z
      .string({
        required_error: 'Description is required.',
      })
      .min(3, 'Description should at least contain 3 characters.'),
    done: z.boolean({
      required_error: 'Done is required.',
    }),
  }),
});

export type CreateTodo = z.infer<typeof createTodoSchema>['body'];
