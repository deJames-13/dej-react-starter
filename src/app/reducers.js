import { combineReducers } from '@reduxjs/toolkit';
import * as slice from '@slices';

const rootReducer = combineReducers({
  auth: slice.authReducer,
  [slice.apiSlice.reducerPath]: slice.apiSlice.reducer,
});

export default rootReducer;
