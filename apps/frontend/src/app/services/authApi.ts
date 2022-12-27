import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store';
import {
  IGenericResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from '@app-types/api.types';
import { setToken, setUser } from '@features/users/user.slice';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4200/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('authentication', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.accessToken));
          dispatch(setUser(data.user));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    register: builder.mutation<IGenericResponse, IRegisterRequest>({
      query: (credentials) => ({
        url: 'register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
