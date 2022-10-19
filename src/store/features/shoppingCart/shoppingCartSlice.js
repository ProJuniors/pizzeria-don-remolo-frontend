import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  carousel: [],
  cart: [],
  totalToPay: 0,
  userData: {},
  loaded: false,
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
    getTotal: (state) => {
      if (state.cart.length === 0) {
        state.totalToPay = 0;
      }
      state.totalToPay = state.cart.reduce((prev, next) => {
        const total = next.quantity * next.price;
        return prev + total;
      }, 0);
    },
    getUserData: (state, { payload }) => {
      state.userData = payload;
    },
    loadProducts: (state, { payload }) => {
      state.data = payload;
      state.loaded = true;
    },
    loadCarousel: (state, { payload }) => {
      state.carousel = payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  subtractFromCart,
  getTotal,
  getUserData,
  loadProducts,
  loadCarousel,
} = shoppingCartSlice.actions;

export default shoppingCartSlice;
