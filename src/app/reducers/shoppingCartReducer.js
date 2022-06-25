import { types } from '../types/types';

const order = {
  'Product Name': '',
  Quantity: '',
  Size: '',
  Color: '',
};
const initialState = {
  orders: [order],
};
export const shoppingCartReducer = (state = initialState, action) => {
  if (action.type === types.shoppingCart) {
    return Object.assign({}, state, {
      orders: state.orders.concat(action.payload),
    });
  }
  return state;
};
