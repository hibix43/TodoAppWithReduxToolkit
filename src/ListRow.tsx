import React from 'react';

type Props = {
  name: string;
  completed: boolean;
};

const ListRow: React.FC<Props> = ({ name, completed }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      {name}
    </li>
  );
};

export default ListRow;
