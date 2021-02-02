import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Header } from './Header';
import { Input } from './Input';
import { TodoList } from './TodoList';

const Page: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div>
      <Header level={1}>{'TodoList'}</Header>
      <TodoForm buttonChildren={'追加'} />
      <Input
        labelText={''}
        type="text"
        value={filterText}
        placeholder={'検索'}
        onChange={handleFilterTextChange}
      />
      <TodoList filterText={filterText} showTodosCategory={'All'} />
    </div>
  );
};

export default Page;
