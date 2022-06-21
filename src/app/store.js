import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import getAsyncDataReducer from '../features/todsMock/getDataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    getData: getAsyncDataReducer
  },
});
