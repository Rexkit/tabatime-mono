import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@components/theme/theme.slice';
import userReducer from '@features/users/user.slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
