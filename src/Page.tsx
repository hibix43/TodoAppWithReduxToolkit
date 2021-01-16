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
  const changeNewTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  const addTodo = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoName === '') return;
    setNewTodoName('');
    setTodos([
      ...todos,
      { id: todos.length, name: newTodoName, completed: false }
    ]);
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
        todoName={newTodoName}
        addTodoSubmitHandler={addTodo}
        changeTodoNameHandler={changeNewTodoName}
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
