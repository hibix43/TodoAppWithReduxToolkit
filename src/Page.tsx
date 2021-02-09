import React, { useState } from 'react';
import styled from 'styled-components';
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

  // TODO: 検索窓は画面右上に
  return (
    <Wrapper>
      <Header level={1}>{'TodoList'}</Header>
      <Input
        labelText={''}
        type="text"
        value={filterText}
        placeholder={'検索'}
        onChange={handleFilterTextChange}
      />
      <TodoForm buttonChildren={'Add'} />
      <RadioButton
        name={'showCategory'}
        options={radioButtonOptions}
        selectedValue={showCategory}
        handleChange={handleShowCategory}
      />
      <TodoList filterText={filterText} showTodosCategory={showCategory} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 48px auto;
  padding: 16px;
  background-color: #fefefe;
  width: 670px;
`;

export default Page;
