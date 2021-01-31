import React, { useState } from 'react';
import { ListItem } from './ListItem';
import { Button } from './Button';
import { Input } from './Input';
import { Form } from './Form';
import { Todo } from './types';

export const TodoListItem: React.FC<{
  todo: Todo;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteButtonClick: () => void;
  handleFixTodoName: (name: string) => void;
}> = ({
  todo,
  handleCheckboxChange,
  handleDeleteButtonClick,
  handleFixTodoName
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const TodoListItemEditedComponent = (
    <TodoListItemEdited
      todo={todo}
      handleCheckboxChange={handleCheckboxChange}
      handleButtonClick={handleClickToggleEditing}
    />
  );
  const TodoListItemEditingComponent = (
    <TodoListItemEditing
      todo={todo}
      handleFixName={handleFixTodoName}
      handleButtonClick={handleClickToggleEditing}
    />
  );
  const Item = isEditing
    ? TodoListItemEditingComponent
    : TodoListItemEditedComponent;

  return (
    <ListItem key={todo.id}>
      {Item}
      <Button type="button" onClick={handleDeleteButtonClick}>
        {'削除'}
      </Button>
    </ListItem>
  );
};

const TodoListItemEdited: React.FC<{
  todo: Todo;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
}> = ({ todo, handleCheckboxChange, handleButtonClick }) => {
  return (
    <>
      <Input
        labelText={todo.name}
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <Button type="button" onClick={handleButtonClick}>
        {'編集'}
      </Button>
    </>
  );
};

const TodoListItemEditing: React.FC<{
  todo: Todo;
  handleFixName: (name: string) => void;
  handleButtonClick: () => void;
}> = ({ todo, handleFixName, handleButtonClick }) => {
  const [todoName, setTodoName] = useState(todo.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handleSubmitClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFixName(todoName);
    handleButtonClick();
  };

  return (
    <Form onSubmit={handleSubmitClick}>
      <Input
        labelText={''}
        type="text"
        value={todoName}
        onChange={handleChange}
      />
      <Button type="submit">{'保存'}</Button>
    </Form>
  );
};
