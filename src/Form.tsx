import React from 'react';

type Props = {
  todoName: string;
  changeTodoNameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form: React.FC<Props> = ({ todoName, changeTodoNameHandler }) => {
  return (
    <form>
      <input type="text" value={todoName} onChange={changeTodoNameHandler} />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;
