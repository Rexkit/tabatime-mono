import { PropsWithChildren, FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '@hooks/useStore';

import { lightTheme, darkTheme } from '@styles/theme';
import { ThemeEnum } from '@app-types/styled.types';

const Theme: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === ThemeEnum.light ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
