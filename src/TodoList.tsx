import React from 'react';
import { List } from './List';
import { TodoListItem } from './TodoListItem';
import { Todo } from './types';

type Props = {
  todos: Todo[];
  onCheckboxChange: (id: string, completed: boolean) => void;
  onDeleteButtonClick: (id: string) => void;
  onFixName: (id: string, name: string) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  onCheckboxChange,
  onDeleteButtonClick,
  onFixName
}) => {
  const handleChange = (id: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onCheckboxChange(id, e.target.checked);
  };
  const handleClick = (id: string) => () => {
    onDeleteButtonClick(id);
  };
  const handleSubmit = (id: string) => (name: string) => {
    onFixName(id, name);
  };

  const rows = todos.map((todo) => {
    const handleChangeId = handleChange(todo.id);
    const handleClickId = handleClick(todo.id);
    const handleSubmitId = handleSubmit(todo.id);
    return (
      <TodoListItem
        key={todo.id}
        todo={todo}
        handleCheckboxChange={handleChangeId}
        handleDeleteButtonClick={handleClickId}
        handleFixTodoName={handleSubmitId}
      />
    );
  });

  return <List>{rows}</List>;
};
