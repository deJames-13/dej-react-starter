import { apiSlice } from '@config/api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './reducers.js';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_CLIENT_ENV === 'development',
});
setupListeners(store.dispatch);

export default store;
