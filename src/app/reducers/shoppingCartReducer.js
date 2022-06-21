import { types } from '../types/types';

const initialState = {
  orders: [],
};
export const shoppingCartReducer = (state = initialState, action) => {
  if (action.type === types.shoppingCart) {
    return Object.assign({}, state, {
        orders: state.orders.concat(action.payload)
      });
   
  }
  return state;
};
