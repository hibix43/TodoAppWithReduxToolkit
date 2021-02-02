import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './List';
import { TodoListItem } from './TodoListItem';
import { Todo } from './types';
import { RootState } from './store';

type Props = {
  filterText: string;
  showTodosCategory: 'All' | 'Completed' | 'Incompleted';
};

export const TodoList: React.FC<Props> = ({
  filterText,
  showTodosCategory
}) => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todo.todos);
  const filteredTodos = todos.filter((todo) => todo.name.includes(filterText));
  const showTodos = selectShowTodos(filteredTodos, showTodosCategory);
  const rows = showTodos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return <List>{rows}</List>;
};

const selectShowTodos = (
  todos: Todo[],
  category: Props['showTodosCategory']
) => {
  if (category === 'Completed') {
    return todos.filter((todo) => todo.completed);
  }
  if (category === 'Incompleted') {
    return todos.filter((todo) => !todo.completed);
  }
  return todos;
};
