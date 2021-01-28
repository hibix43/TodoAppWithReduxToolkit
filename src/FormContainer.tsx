import React, { useState } from 'react';
import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';

type Props = {
  buttonChildren: string;
  onSubmit: (name: string) => void;
};

export const FormContainer: React.FC<Props> = ({
  buttonChildren,
  onSubmit
}) => {
  // TODO: FormContainer,ListContainer ではなく AddTodoForm, TodoList といった固有の名前をつける
  const [newTodoName, setNewTodoName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTodoName('');
    onSubmit(newTodoName);
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
