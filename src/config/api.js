/* eslint-disable no-unused-vars */
// Hooks Naming Convention:
// mutation: use{Resource}Mutation
// query: use{Resource}Query
// subscription: use{Resource}Subscription
//
//
// ex: useLoginMutation, useLoginQuery, useLoginSubscription
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({ baseUrl: '/api' });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User'],

  endpoints: (builder) => ({}),
});
