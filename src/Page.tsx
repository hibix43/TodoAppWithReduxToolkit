import React, { useState } from 'react';
import Form from './Form';
import List from './List';

export type Todo = {
  name: string;
  completed: boolean;
};

const Page: React.FC = () => {
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const changeNewTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  const addTodo = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoName === '') return;
    setNewTodoName('');
    setTodos([...todos, { name: newTodoName, completed: false }]);
  };
  return (
    <div>
      <Form
        todoName={newTodoName}
        addTodoSubmitHandler={addTodo}
        changeTodoNameHandler={changeNewTodoName}
      />
      <List todos={todos} />
    </div>
  );
};

export default Page;
