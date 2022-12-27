import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './types';

interface IUserSliceState {
  loading: boolean;
  user: IUser | null;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: IUserSliceState = {
  loading: false,
  user: null,
  token: null,
  error: null,
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
  },
  extraReducers: {},
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
