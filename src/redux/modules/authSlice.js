import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt from '../../axios/jwt';

const initialState = {
  user: {},
  isLoding: false,
  error: null,
};

//로그인 인증 및 현재 유저 정보
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
//유저 프로필 변경
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
      //유저 검증 및 현재 로그인한 유저 정보
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
      // 유저 프로필 변경
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
