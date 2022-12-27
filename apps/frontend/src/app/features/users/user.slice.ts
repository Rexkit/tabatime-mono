import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './types';

interface IUserSliceState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: IUserSliceState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: {},
});

export default userSlice.reducer;

export const { logout, setUser, setToken } = userSlice.actions;
