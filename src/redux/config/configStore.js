import { configureStore } from '@reduxjs/toolkit';
import letters from '../modules/letters';
import authSlice from '../modules/authSlice';

const store = configureStore({
  reducer: {
    letters: letters,
    authSlice: authSlice,
  },
});

export default store;
