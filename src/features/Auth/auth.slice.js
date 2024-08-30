import { createSlice } from '@reduxjs/toolkit';

const itemKey = 'userInfo';
const userInfo = window.localStorage.getItem(itemKey);
const initialState = {
  userInfo: userInfo ? JSON.parse(userInfo) : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem(itemKey, JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem(itemKey);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
