import { createSlice } from '@reduxjs/toolkit';
import { ThemeEnum } from '@app-types/styled.types';

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (['light', 'dark'].includes(theme))
    return theme === 'light' ? ThemeEnum.light : ThemeEnum.dark;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return ThemeEnum.light;

  return ThemeEnum.dark;
};

const initialState: ThemeEnum = getTheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
