import { apiSlice, APP_ENV } from '@app/config';
import { APP } from '@app/constants';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './reducers.js';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: APP_ENV === APP.STATUS.DEVELOPMENT,
});
setupListeners(store.dispatch);

export default store;
