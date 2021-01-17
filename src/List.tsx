import React from 'react';
import ListRow from './ListRow';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
  changeCheckedHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
};

const List: React.FC<Props> = ({ todos, changeCheckedHandler }) => {
  const rows = todos.map((todo) => {
    return (
      <ListRow
        todo={todo}
        changeCheckedHandler={changeCheckedHandler}
        key={todo.id}
      />
    );
  });
  return <ul>{rows}</ul>;
};

export default List;
