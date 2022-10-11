import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from '../PizzeriaApp/features/shoppingCart/shoppingCartSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice.reducer,
  },
});

export default store;
