import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { Header } from './Header';
import { Input } from './Input';
import { TodoList } from './TodoList';

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

const Page: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newId, setNewId] = useState(0);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = (newTodoName: string) => {
    if (newTodoName === '') return;
    const newTodo = { id: newId, name: newTodoName, completed: false };
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

  const handleShowCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCompleted(e.target.checked);
  };

  const fixTodoName = (id: number, name: string) => {
    const changedTodo = {
      ...todos.find((todo) => todo.id == id),
      name
    };
    setTodos(
      Object.assign([
        // TODO: 書き換えた Todo が最後尾になってしまう問題を解決する
        ...todos.filter((todo) => todo.id != changedTodo.id),
        changedTodo
      ])
    );
  };

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  useEffect(() => {
    document.title = `未完了タスク (${incompleteTodos.length})`;
  }, [incompleteTodos]);

  // TODO: Header と ListContainer をまとめてコンポーネントに切り出す
  return (
    <div>
      <Header level={1}>{'TodoList'}</Header>
      <TodoForm buttonChildren={'追加'} onSubmit={addTodo} />
      <Input
        labelText={'完了済みを表示する'}
        type="checkbox"
        checked={showCompleted}
        onChange={handleShowCompleted}
      ></Input>
      <Header level={2}>{`未完了: ${incompleteTodos.length} 件`}</Header>
      <TodoList
        todos={incompleteTodos}
        onCheckboxChange={changeTodoChecked}
        onDeleteButtonClick={deleteTodo}
        onFixName={fixTodoName}
      />
      {showCompleted && (
        <Header level={2}>{`完了: ${completedTodos.length} 件`}</Header>
      )}
      {showCompleted && (
        <TodoList
          todos={completedTodos}
          onCheckboxChange={changeTodoChecked}
          onDeleteButtonClick={deleteTodo}
          onFixName={fixTodoName}
        />
      )}
    </div>
  );
};

export default Page;
