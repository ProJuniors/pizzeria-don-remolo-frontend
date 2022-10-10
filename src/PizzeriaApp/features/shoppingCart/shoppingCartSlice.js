import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      id: 1,
      productName: 'Hamburguer',
      quantity: 1,
      price: 200,
    },
  ],
  isLoading: false,
  formCompleted: false,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const filtro = state.cart.filter((product) => product.id === payload.id);
      if (filtro.length > 0) {
        state.cart.map((product) => {
          if (product.id === payload.id) {
            // eslint-disable-next-line no-param-reassign
            product.quantity += 1;
          }
          return product;
        });
        // state.cart.map();
      } else {
        state.cart.push(payload);
      }
    },
    removeFromCart: () => {},
    subtractFromCart: () => {},
  },
});

export const { addToCart, removeFromCart, subtractFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice;
