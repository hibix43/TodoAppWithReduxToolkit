import React, { useState } from 'react';
import Form from './Form';
import List from './List';

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

const Page: React.FC = () => {
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (newTodoName === '') return;
    const newTodo = { id: todos.length, name: newTodoName, completed: false };
    setNewTodoName('');
    setTodos([...todos, newTodo]);
  };

  const changeTodoChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const changedTodo = {
      ...todos.find((todo) => todo.id == id),
      completed: e.target.checked
    };
    setTodos(
      Object.assign([
        ...todos.filter((todo) => todo.id != changedTodo.id),
        changedTodo
      ])
    );
  };

  return (
    <div>
      <Form
        value={newTodoName}
        submitValue={addTodo}
        changeValue={setNewTodoName}
      />
      <List
        todos={todos.filter((todo) => !todo.completed)}
        changeCheckedHandler={changeTodoChecked}
      />
      <List
        todos={todos.filter((todo) => todo.completed)}
        changeCheckedHandler={changeTodoChecked}
      />
    </div>
  );
};

export default Page;
