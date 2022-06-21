import { types } from '../types/types';

const initialState = {
  productName: null,
  quantity: null,
  size: null,
  color: null,
};
export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.shoppingCart:
      return {
        shoppingCart: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
