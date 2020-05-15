import { combineReducers } from '@reduxjs/toolkit';
import { selectedPostReducer } from './selectedPostSlice';
import { allPostsReducer } from './allPostsSlice';

export const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  selectedPost: selectedPostReducer
});