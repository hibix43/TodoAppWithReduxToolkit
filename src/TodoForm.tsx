import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from './Button';
import { Input } from './Input';
import { addTodo } from './todoSlice';

type Props = {
  buttonChildren: string;
};

export const TodoForm: React.FC<Props> = ({ buttonChildren }) => {
  const dispatch = useDispatch();
  const [newTodoName, setNewTodoName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    // TODO: newTodoName  が空なら追加しない
    e.preventDefault();
    setNewTodoName('');
    dispatch(addTodo(newTodoName));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        labelText={''}
        type="text"
        value={newTodoName}
        size={50}
        onChange={handleChange}
      />
      <Button type="submit">{buttonChildren}</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  button {
    margin-left: auto;
  }
`;
