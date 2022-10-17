import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isLoading: false,
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
            product.quantity += 1;
          }
          return product;
        });
      } else {
        payload.quantity = 1;
        state.cart.push(payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product.id !== payload.id);
    },
    subtractFromCart: (state, { payload }) => {
      state.cart.map((product) => {
        if (product.id !== payload.id) return product;
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
        return product;
      });
    },
  },
});

export const { addToCart, removeFromCart, subtractFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice;
