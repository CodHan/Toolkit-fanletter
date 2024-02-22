import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios/api';
const initialState = {
  letters: [],
  isLoding: false,
  error: null,
};

export const __getLetters = createAsyncThunk(
  'letters/getLetters',
  async (payload, thunkApi) => {
    try {
      const data = await api.get('/letters');
      const sortData = data.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortData;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const __addLetter = createAsyncThunk(
  'letters/addLetter',
  async (payload, thunkApi) => {
    try {
      const data = await api.post('/letters', payload);
      return thunkApi.fulfillWithValue(data.data);
    } catch (error) {
      return alert(error.message);
    }
  }
);
export const __deleteLetter = createAsyncThunk(
  'letters/deleteLetter',
  async (payload, thunkApi) => {
    try {
      await api.delete(`/letters/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (error) {
      return alert(error.message);
    }
  }
);
export const __updateLetter = createAsyncThunk(
  'letters/updateLetter',
  async (payload, thunkApi) => {
    const { update, id } = payload;
    try {
      await api.patch(`/letters/${id}`, { content: update });
      return thunkApi.fulfillWithValue(payload);
    } catch (error) {
      return alert(error.message);
    }
  }
);
export const __profileUpdate = createAsyncThunk(
  'letters/profileUpdate',
  async (payload, thunkApi) => {
    const { id, updateNickName, changeImage } = payload;
    try {
      await api.patch(`/letters/${id}`, {
        nickname: updateNickName,
        avatar: changeImage,
      });
      return thunkApi.fulfillWithValue(payload);
    } catch (error) {
      return alert(error.message);
    }
  }
);

export const lettersSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getLetters.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__getLetters.fulfilled, (state, action) => {
        state.isLoding = false;
        state.letters = action.payload;
      })
      .addCase(__getLetters.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      .addCase(__addLetter.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__addLetter.fulfilled, (state, action) => {
        state.isLoding = false;
        state.letters.push(action.payload);
      })
      .addCase(__addLetter.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      .addCase(__deleteLetter.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__deleteLetter.fulfilled, (state, action) => {
        state.isLoding = false;
        state.letters = state.letters.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(__deleteLetter.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      .addCase(__updateLetter.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__updateLetter.fulfilled, (state, action) => {
        state.isLoding = false;
        const { update, id } = action.payload;
        state.letters = state.letters.map((item) => {
          if (item.id === id) {
            return { ...item, content: update };
          }
          return item;
        });
      })
      .addCase(__updateLetter.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      .addCase(__profileUpdate.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__profileUpdate.fulfilled, (state, action) => {
        state.isLoding = false;
        const { id, updateNickName, changeImage } = action.payload;
        state.letters = state.letters.map((item) => {
          if (item.id === id) {
            return { ...item, nickname: updateNickName, avatar: changeImage };
          }
          return item;
        });
      })
      .addCase(__profileUpdate.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
  },
});

export default lettersSlice.reducer;
export const {} = lettersSlice.actions;
