import { configureStore } from "@reduxjs/toolkit"
import todosReducer from './reducer';

const store = configureStore(todosReducer);

export default store;

