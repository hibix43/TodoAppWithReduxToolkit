import React from 'react';
import { Todo } from './Page';

type Props = {
  todo: Todo;
  changeCheckedHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
};

const ListRow: React.FC<Props> = ({ todo, changeCheckedHandler }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => changeCheckedHandler(e, todo.id)}
      />
      {name}
    </li>
  );
};

export default ListRow;
