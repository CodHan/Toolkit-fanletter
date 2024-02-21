import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt from '../../axios/jwt';

const initialState = {
  user: {},
  isLoding: false,
  error: null,
};

export const __getUser = createAsyncThunk(
  'authSlice/getuser',
  async (payload, thunkApi) => {
    try {
      const token = localStorage.getItem('token');
      const userResponse = await jwt.get('user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return userResponse.data;
    } catch (error) {
      console.error('에러가 발생했습니다', error);

      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getUser.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getUser.fulfilled, (state, action) => {
        state.isLoding = false;
        state.user = action.payload;
      })
      .addCase(__getUser.rejected, (state) => {
        state.isLoding = false;
        // state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
