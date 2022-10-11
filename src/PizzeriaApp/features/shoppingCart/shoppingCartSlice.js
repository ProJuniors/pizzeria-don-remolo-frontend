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
            product.quantity += 1;
          }
          return product;
        });
      } else {
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
