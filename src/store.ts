import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';

// TODO: プロパティ名考え直した方がいいかも
const rootReducer = combineReducers({ todo: todoReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
