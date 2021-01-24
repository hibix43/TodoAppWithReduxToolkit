import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Header } from './Header';
import { ListContainer } from './ListContainer';

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

const Page: React.FC = () => {
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newId, setNewId] = useState(0);

  const addTodo = () => {
    if (newTodoName === '') return;
    const newTodo = { id: newId, name: newTodoName, completed: false };
    setNewTodoName('');
    setNewId(newId + 1);
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

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <Header level={1}>{'TodoList'}</Header>
      <FormContainer
        inputValue={newTodoName}
        buttonChildren={'追加'}
        onSubmit={addTodo}
        onChange={setNewTodoName}
      />
      <Header level={2}>{`未完了: ${incompleteTodos.length} 件`}</Header>
      <ListContainer
        todos={incompleteTodos}
        onChange={changeTodoChecked}
        onClick={deleteTodo}
      />
      <Header level={2}>{`完了: ${completedTodos.length} 件`}</Header>
      <ListContainer
        todos={completedTodos}
        onChange={changeTodoChecked}
        onClick={deleteTodo}
      />
    </div>
  );
};

export default Page;
