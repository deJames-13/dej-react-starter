import { toast } from 'react-toastify';

export const protect = (store) => (next) => (action) => {
  const state = store.getState();
  const { userInfo } = state.auth;

  if (!userInfo) {
    return toast.error('You need to login to access this page.');
  }
  return next(action);
};

export const checkPermission = (store) => (next) => (action) => {};
