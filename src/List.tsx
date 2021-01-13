import React from 'react';
import ListRow from './ListRow';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
};

const List: React.FC<Props> = ({ todos }) => {
  const rows = todos.map((todo, index) => {
    return (
      <ListRow
        name={todo.name}
        completed={todo.completed}
        key={'row' + index}
      />
    );
  });
  return <ul>{rows}</ul>;
};

export default List;
