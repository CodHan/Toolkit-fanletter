import { createSlice } from '@reduxjs/toolkit';

const user = {};

const authSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
