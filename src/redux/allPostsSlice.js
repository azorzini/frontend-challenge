import { createSlice } from '@reduxjs/toolkit';

const AllPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {},
  reducers: {
    addPosts: (state, action) => {

    },
    dismissPosts: (state, action) => {

    },
    dismissSinglePost: (state, action) => {

    }
  }
})

export const {
  reducer: allPostsReducer,
  actions: { addPosts, dismissPosts, dismissSinglePost }
} = AllPostsSlice;