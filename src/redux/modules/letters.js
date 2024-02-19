import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    init: (state, action) => {
      return action.payload;
    },

    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((item) => item.id !== letterId);
    },
    updateLetter: (state, action) => {
      const { id, update } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, content: update };
        }
        return item;
      });
    },
  },
});

export default lettersSlice.reducer;
export const { addLetter, deleteLetter, updateLetter, init } =
  lettersSlice.actions;
