import React from 'react';
import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';

type Props = {
  inputValue: string;
  buttonChildren: string;
  onSubmit: () => void;
  onChange: (value: string) => void;
};

export const FormContainer: React.FC<Props> = ({
  inputValue,
  buttonChildren,
  onSubmit,
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        labelText={''}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <Button type="submit">{buttonChildren}</Button>
    </Form>
  );
};
