import React from 'react';
import { Input } from './Input';
import { List } from './List';
import { ListItem } from './ListItem';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
  onChange: (id: number, completed: boolean) => void;
};

export const ListContainer: React.FC<Props> = ({ todos, onChange }) => {
  const handleChange = (id: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(id, e.target.checked);
  };

  const rows = todos.map((todo) => {
    const handleChangeId = handleChange(todo.id);
    return (
      <ListItem key={todo.id}>
        <Input
          labelText={todo.name}
          type="checkbox"
          checked={todo.completed}
          onChange={handleChangeId}
        />
      </ListItem>
    );
  });

  return <List>{rows}</List>;
};
