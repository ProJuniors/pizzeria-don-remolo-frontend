import { createSlice } from '@reduxjs/toolkit';
import {
  createStorage,  
  readStorage,
  updateStorage
} from '../../../utils/storage.utils';


const initialState = {
  data: [],
  carousel: [],
  cart: readStorage(),
  totalToPay: 0,
  userData: {},
  loaded: false,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      createStorage(state.cart)
      let limit = 9999
      const filtro = state.cart.filter((product) => product.id === payload.id);
      if (filtro.length > 0) {
        state.cart = state.cart.map((product) => {
          if (product.id === payload.id && product.quantity <= limit) {
            product.quantity += 1;
          }
          return product;
        });
      } else {
        payload.quantity = 1;
        state.cart.push(payload);
      }
      updateStorage(state.cart)
    },
    removeFromCart: (state, { payload }) => {
      createStorage(state.cart)
      state.cart = state.cart.filter((product) => product.id !== payload.id);
      updateStorage(state.cart)
    },
    subtractFromCart: (state, { payload }) => {
      createStorage(state.cart)
      state.cart = state.cart.map((product) => {
        if (product.id !== payload.id) return product;
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
        return product;
      });
      updateStorage(state.cart)
    },
    getTotal: (state) => {
      createStorage(state.cart)
      if (state.cart.length === 0) {
        state.totalToPay = 0;
      }
      state.totalToPay = state.cart.reduce((prev, next) => {
        const total = next.quantity * next.price;
        return prev + total;
      }, 0);
    },
    getUserData: (state, { payload }) => {
      createStorage(state.cart)
      state.userData = payload;
    },
    loadProducts: (state, { payload }) => {
      createStorage(state.cart)
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
