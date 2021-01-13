import React, { useState } from 'react';
import Form from './Form';
import List from './List';

export type Todo = {
  name: string;
  completed: boolean;
};

const DUMMY: Todo[] = [
  { name: 'Elva Reed', completed: false },
  { name: 'Lora Benson', completed: false },
  { name: 'Marcus Cunningham', completed: true }
];

const Page: React.FC = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const changeNewTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  return (
    <div>
      <Form todoName={newTodoName} changeTodoNameHandler={changeNewTodoName} />
      <List todos={DUMMY} />
    </div>
  );
};

export default Page;
