import { combineReducers } from '@reduxjs/toolkit';
import { readPostsReducer } from './readPostsSlice';
import { selectedPostReducer } from './selectedPostSlice';
import { allPostsReducer } from './allPostsSlice';

export const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  selectedPost: selectedPostReducer,
  readPosts: readPostsReducer,
});