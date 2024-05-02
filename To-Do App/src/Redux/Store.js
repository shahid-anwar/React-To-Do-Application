// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slice';

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;
