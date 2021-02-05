import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { List } from './List';
import { TodoListItem } from './TodoListItem';
import { Todo } from './types';
import { RootState } from './store';
import { showTodosCategory } from './types';

type Props = {
  filterText: string;
  showTodosCategory: showTodosCategory;
};

export const TodoList: React.FC<Props> = ({
  filterText,
  showTodosCategory
}) => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todo.todos);
  const selectedTodos = selectShowTodos(todos, showTodosCategory);
  useEffect(() => {
    document.title = `${showTodosCategory}: ${selectedTodos.length} | TodoAppWithReduxToolkit`;
  }, [selectedTodos, showTodosCategory]);
  if (!selectedTodos.length) {
    return <p>{emptyMessage[showTodosCategory]}</p>;
  }

  const showTodos = selectedTodos.filter((todo) =>
    todo.name.includes(filterText)
  );
  if (!showTodos.length) {
    return <p>{'Not found!'}</p>;
  }

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

// TODO: 文言管理する
const emptyMessage: { [key in showTodosCategory]: string } = {
  All: 'Let’s make first Todo !',
  Completed: 'Shall you try even 1 minutes ?',
  Incompleted: 'Greate! What do you next challenge ?'
};
