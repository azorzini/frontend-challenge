import { createSlice } from '@reduxjs/toolkit';

const readPostsSlice = createSlice({
  name: 'readPosts',
  initialState: {},
  reducers: {
    markAsRead: (state, action) => {

    },
  }
})

export const {
  reducer: readPostsReducer,
  actions: { markAsRead }
} = readPostsSlice;