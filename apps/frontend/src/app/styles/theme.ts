import { DefaultTheme } from 'styled-components';

import { ITheme, ThemeEnum } from '@app-types/styled.types';

export const baseTheme: ITheme = {
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    bg: '#E5E4E8',
    bgAlt: '',
    font: '#19191B',
    fontWhite: '#E5E4E8',
    fontDark: '#19191B',
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 540 },
    footer: { height: 128 },
    modal: { width: 320 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
  colors: {
    ...baseTheme.colors,
    bg: '#E5E4E8',
    font: '#19191B',
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: '#19191B',
    bgAlt: '#1d1d20',
    font: '#E5E4E8',
  },
};
