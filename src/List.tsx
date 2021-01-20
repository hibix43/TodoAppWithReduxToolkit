import React from 'react';
import { Input } from './Input';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
  onChange: (id: number, completed: boolean) => void;
};

const List: React.FC<Props> = ({ todos, onChange }) => {
  const handleChange = (id: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(id, e.target.checked);
  };

  const rows = todos.map((todo) => {
    const handleChangeId = handleChange(todo.id);

    return (
      <li key={todo.id}>
        <Input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChangeId}
        />
        {todo.name}
      </li>
    );
  });
  return <ul>{rows}</ul>;
};

export default List;
