import React from 'react';
import ListRow from './ListRow';

const List: React.FC = () => {
  const rows = dummy.map((task, index) => {
    return (
      <ListRow
        name={task.name}
        completed={task.completed}
        key={'row' + index}
      />
    );
  });
  return <ul>{rows}</ul>;
};

export default List;

const dummy: { name: string; completed: boolean }[] = [
  { name: 'Elva Reed', completed: false },
  { name: 'Lora Benson', completed: false },
  { name: 'Marcus Cunningham', completed: true }
];
