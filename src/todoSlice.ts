import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';

type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: []
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: State, action: PayloadAction<string>) => {
      const newTodo = { id: nanoid(), name: action.payload, completed: false };
      state.todos = [...state.todos, newTodo];
    },
    changeTodoCompleted: (state: State, action: PayloadAction<Todo>) => {
      const targetTodo = getTargetTodo(state.todos, action.payload.id);
      if (targetTodo) {
        targetTodo.completed = action.payload.completed;
      }
    },
    changeTodoName: (state: State, action: PayloadAction<Todo>) => {
      const targetTodo = getTargetTodo(state.todos, action.payload.id);
      if (targetTodo) {
        targetTodo.name = action.payload.name;
      }
    },
    deleteTodo: (state: State, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

const getTargetTodo = (todos: Todo[], id: string) => {
  return todos.find((todo) => todo.id === id);
};

export const todoReducer = slice.reducer;
export const {
  addTodo,
  changeTodoCompleted,
  changeTodoName,
  deleteTodo
} = slice.actions;
