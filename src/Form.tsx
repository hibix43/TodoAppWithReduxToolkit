import React from 'react';

type Props = {
  todoName: string;
  addTodoSubmitHandler: (e: React.MouseEvent<HTMLFormElement>) => void;
  changeTodoNameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form: React.FC<Props> = ({
  todoName,
  addTodoSubmitHandler,
  changeTodoNameHandler
}) => {
  return (
    <form onSubmit={addTodoSubmitHandler}>
      <input type="text" value={todoName} onChange={changeTodoNameHandler} />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;
