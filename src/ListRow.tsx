import React from 'react';

type Props = {
  id: number;
  name: string;
  completed: boolean;
  changeCheckedHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
};

const ListRow: React.FC<Props> = ({
  id,
  name,
  completed,
  changeCheckedHandler
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => changeCheckedHandler(e, id)}
      />
      {name}
    </li>
  );
};

export default ListRow;
