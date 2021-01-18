import React from 'react';

type Props = {
  value: string;
  submitValue: () => void;
  changeValue: (value: string) => void;
};

const Form: React.FC<Props> = ({ value, submitValue, changeValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitValue();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;
