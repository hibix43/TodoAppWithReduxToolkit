import React from 'react';
import ListRow from './ListRow';
import { Todo } from './Page';

type Props = {
  todos: Todo[];
  changeChecked: (id: number, completed: boolean) => void;
};

const List: React.FC<Props> = ({ todos, changeChecked }) => {
  const handleChange = (id: number, completed: boolean) => {
    changeChecked(id, completed);
  };

  const rows = todos.map((todo) => {
    return (
      <ListRow
        todo={todo}
        changeChecked={(checked) => handleChange(todo.id, checked)}
        key={todo.id}
      />
    );
  });
  return <ul>{rows}</ul>;
};

export default List;
