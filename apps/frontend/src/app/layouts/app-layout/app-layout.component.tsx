import { Outlet } from 'react-router-dom';

import { Header } from '@components/header';

import {
  AppLayoutContainer,
  AppLayoutFrame,
  ContentContainer,
} from './app-layout.styles';

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <AppLayoutFrame>
        <Header />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </AppLayoutFrame>
    </AppLayoutContainer>
  );
};

export default AppLayout;
