import { createSlice } from '@reduxjs/toolkit';

const AllPostsSlice = createSlice({
  name: 'allPosts',
  initialState: [],
  reducers: {
    addPosts: (state, action) => {
      return [...state, ...action.payload.map(p => ({ ...p, read: false, dismissed: false}))];
    },
    dismissPosts: (state) => {
      return [];
    },
    dismissSinglePost: (state, action) => {
      const postToDismiss = state.find(post => post.data.id === action.payload);
      postToDismiss.dismissed = true;
    },
    markAsRead: (state, action) => {
      const readPost = state.find(post => post.data.id === action.payload);
      readPost.read = true;
    },
  }
});

export const {
  reducer: allPostsReducer,
  actions: { addPosts, dismissPosts, markAsRead, dismissSinglePost }
} = AllPostsSlice;