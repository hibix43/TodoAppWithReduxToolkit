import React from 'react';
import styled from 'styled-components';

type InputElement = JSX.IntrinsicElements['input'];

interface Props extends InputElement {
  labelText: string;
}

// TODO: input の type ごとに作り分ける方がよさそう
const StyledWrapper = styled.input.attrs((props: InputElement) => ({
  ...props
}))`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  border: 2px solid #f5a370;
  border-radius: 4px;
  box-sizing: border-box;
  :focus {
    border: 2px solid #f9690e;
    outline: none;
  }
`;

export const Input: React.FC<Props> = (props) => {
  const { labelText, ...inputProps } = props;
  return (
    <>
      <StyledWrapper {...inputProps} />
      <label htmlFor={props.id}>{labelText}</label>
    </>
  );
};
