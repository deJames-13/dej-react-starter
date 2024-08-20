import { apiSlice } from '@app/config';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      //   query: (body) => ({
      //     url: '/auth/login',
      //     method: 'POST',
      //     body,
      //   }),
    }),
    register: build.mutation({
      //   query: (body) => ({
      //     url: '/auth/register',
      //     method: 'POST',
      //     body,
      //   }),
    }),
    logout: build.mutation({
      //   query: () => ({
      //     url: '/auth/logout',
      //     method: 'POST',
      //   }),
    }),
  }),
});
