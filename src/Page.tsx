import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Header } from './Header';
import { Input } from './Input';
import { TodoList } from './TodoList';
import { RadioButton } from './RadioButton';
import { showTodosCategory } from './types';

const Page: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [showCategory, setShowCategory] = useState<showTodosCategory>('All');

  const radioButtonOptions = showTodosCategory.map((category) => ({
    labelText: category,
    value: category
  }));

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleShowCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCategory(e.target.value as showTodosCategory);
  };

  return (
    <div>
      <Header level={1}>{'TodoList'}</Header>
      <TodoForm buttonChildren={'Add'} />
      <Input
        labelText={''}
        type="text"
        value={filterText}
        placeholder={'検索'}
        onChange={handleFilterTextChange}
      />
      <RadioButton
        name={'showCategory'}
        options={radioButtonOptions}
        selectedValue={showCategory}
        handleChange={handleShowCategory}
      />
      <TodoList filterText={filterText} showTodosCategory={showCategory} />
    </div>
  );
};

export default Page;
