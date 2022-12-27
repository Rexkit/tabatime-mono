import { RootState } from '@/store';
import { IUser } from '@features/users/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4200/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, void>({
      query() {
        return {
          url: 'me',
          credentials: 'include',
        };
      },
    }),
  }),
});
