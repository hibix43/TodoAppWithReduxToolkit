import React from 'react';
import { List } from './List';
import { TodoListItem } from './TodoListItem';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
  onCheckboxChange: (id: number, completed: boolean) => void;
  onDeleteButtonClick: (id: number) => void;
  onFixName: (id: number, name: string) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  onCheckboxChange,
  onDeleteButtonClick,
  onFixName
}) => {
  const handleChange = (id: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onCheckboxChange(id, e.target.checked);
  };
  const handleClick = (id: number) => () => {
    onDeleteButtonClick(id);
  };
  const handleSubmit = (id: number) => (name: string) => {
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
