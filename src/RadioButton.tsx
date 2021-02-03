import React from 'react';
import { Input } from './Input';

type Props = {
  name: string;
  options: {
    labelText: string;
    value: string;
  }[];
  selectedValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton: React.FC<Props> = ({
  name,
  options,
  selectedValue,
  handleChange
}) => {
  const items = options.map((option) => {
    return (
      <Input
        key={`${name}_${option.value}`}
        labelText={option.labelText}
        type="radio"
        name={name}
        value={option.value}
        checked={selectedValue === option.value}
        onChange={handleChange}
      />
    );
  });

  return <div>{items}</div>;
};
