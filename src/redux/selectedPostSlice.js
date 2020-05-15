import { createSlice } from '@reduxjs/toolkit';

const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState: '',
  reducers: {
    selectPost: (state, action) => {
      return action.payload;
    },
  }
})

export const {
  reducer: selectedPostReducer,
  actions: { selectPost }
} = selectedPostSlice;