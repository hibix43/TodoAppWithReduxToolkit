import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
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

  const changeTodoChecked = (id: number, completed: boolean) => {
    const changedTodo = { ...todos.find((todo) => todo.id == id), completed };
    setTodos(
      Object.assign([
        ...todos.filter((todo) => todo.id != changedTodo.id),
        changedTodo
      ])
    );
  };

  return (
    <div>
      <FormContainer
        inputValue={newTodoName}
        buttonChildren={'追加'}
        onSubmit={addTodo}
        onChange={setNewTodoName}
      />
      <List
        todos={todos.filter((todo) => !todo.completed)}
        onChange={changeTodoChecked}
      />
      <List
        todos={todos.filter((todo) => todo.completed)}
        onChange={changeTodoChecked}
      />
    </div>
  );
};

export default Page;
