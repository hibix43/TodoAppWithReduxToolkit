import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './Button';
import { Form } from './Form';
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
        onChange={handleChange}
      />
      <Button type="submit">{buttonChildren}</Button>
    </Form>
  );
};
