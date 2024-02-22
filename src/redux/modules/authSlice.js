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
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const __updateUser = createAsyncThunk(
  'authSlice/updateUser',
  async (payload, thunkApi) => {
    try {
      const token = localStorage.getItem('token');
      const updateResponse = await jwt.patch('/profile', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      return updateResponse.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getUser.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getUser.fulfilled, (state, action) => {
        state.isLoding = false;
        state.user = action.payload;
      })
      .addCase(__getUser.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      .addCase(__updateUser.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__updateUser.fulfilled, (state, action) => {
        state.isLoding = false;
        state.user = action.payload;
      })
      .addCase(__updateUser.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
