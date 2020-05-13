import { createSlice } from '@reduxjs/toolkit';

const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState: {},
  reducers: {
    selectPost: (state, action) => {

    },
  }
})

export const {
  reducer: selectedPostReducer,
  actions: { selectPost }
} = selectedPostSlice;