export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export const showTodosCategory = ['All', 'Completed', 'Incompleted'] as const;
export type showTodosCategory = typeof showTodosCategory[number];
