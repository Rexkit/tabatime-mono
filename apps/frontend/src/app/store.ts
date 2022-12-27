import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './services/authApi';
import themeReducer from '@components/theme/theme.slice';
import userReducer from '@features/users/user.slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
