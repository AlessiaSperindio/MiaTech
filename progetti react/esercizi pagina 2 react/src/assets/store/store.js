//Installa @reduxjs/toolkit e react-redux nel tuo progetto. Configura lo store Redux e crea uno slice per gestire i to-do.
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});