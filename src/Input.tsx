import React from 'react';

type InputElement = JSX.IntrinsicElements['input'];

interface Props extends InputElement {
  labelText: string;
}

export const Input: React.FC<Props> = (props) => {
  const { labelText, ...inputProps } = props;
  return (
    <label>
      <input {...inputProps} />
      {labelText}
    </label>
  );
};
