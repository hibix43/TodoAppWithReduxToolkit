import React from 'react';
import { Todo } from './Page';

type Props = {
  todo: Todo;
  changeChecked: (completed: boolean) => void;
};

const ListRow: React.FC<Props> = ({ todo, changeChecked }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeChecked(e.target.checked);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      {todo.name}
    </li>
  );
};

export default ListRow;
