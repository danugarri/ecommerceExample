import { types } from '../types/types';

export const shoppingCartAction = (productName, quantity, color, size) => {
  return {
    type: types.shoppingCart,
    payload: {
      productName,
      quantity,
      size,
      color,
    },
  };
};
