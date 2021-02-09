import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListItem } from './ListItem';
import { Button } from './Button';
import { Input } from './Input';
import { Form } from './Form';
import { Todo } from './types';
import { changeTodoCompleted, changeTodoName, deleteTodo } from './todoSlice';

export const TodoListItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleClickToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleClickDeleteButton = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <ListItem key={todo.id}>
      {isEditing ? (
        <EditableTodoItem
          todo={todo}
          handleClickButton={handleClickToggleEditing}
        />
      ) : (
        <FixedTodoItem
          todo={todo}
          handleClickButton={handleClickToggleEditing}
        />
      )}
      <Button type="button" onClick={handleClickDeleteButton}>
        {'削除'}
      </Button>
    </ListItem>
  );
};

const FixedTodoItem: React.FC<{
  todo: Todo;
  handleClickButton: () => void;
}> = ({ todo, handleClickButton }) => {
  const dispatch = useDispatch();
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTodoCompleted({ ...todo, completed: e.target.checked }));
  };

  return (
    <>
      <Input
        labelText={todo.name}
        type="checkbox"
        checked={todo.completed}
        onChange={handleChangeCheckbox}
      />
      <Button type="button" onClick={handleClickButton}>
        {'編集'}
      </Button>
    </>
  );
};

const EditableTodoItem: React.FC<{
  todo: Todo;
  handleClickButton: () => void;
}> = ({ todo, handleClickButton }) => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState(todo.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handleSubmitClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeTodoName({ ...todo, name: todoName }));
    handleClickButton();
  };

  return (
    // TodoForm を使いまわせないか？
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
