import { configureStore } from '@reduxjs/toolkit';
import getAsyncDataReducer from '../features/todsMock/getDataSlice';
import {shoppingCartReducer} from './reducers/shoppingCartReducer';

export const store = configureStore({
  reducer: {
    getData: getAsyncDataReducer,
    shoppingCart: shoppingCartReducer,
  },
});
