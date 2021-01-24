import React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { List } from './List';
import { ListItem } from './ListItem';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
  onChange: (id: number, completed: boolean) => void;
  onClick: (id: number) => void;
};

export const ListContainer: React.FC<Props> = ({
  todos,
  onChange,
  onClick
}) => {
  const handleChange = (id: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(id, e.target.checked);
  };
  const handleClick = (id: number) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    onClick(id);
  };

  const rows = todos.map((todo) => {
    const handleChangeId = handleChange(todo.id);
    const handleClickId = handleClick(todo.id);
    return (
      <ListItem key={todo.id}>
        <Input
          labelText={todo.name}
          type="checkbox"
          checked={todo.completed}
          onChange={handleChangeId}
        />
        <Button type="button" onClick={handleClickId}>
          {'削除'}
        </Button>
      </ListItem>
    );
  });

  return <List>{rows}</List>;
};
