import { apiSlice } from '@config';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
