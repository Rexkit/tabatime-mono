import { Outlet } from 'react-router-dom';
import { AppLayoutContainer, AppLayoutFrame } from './app-layout.styles';

const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <AppLayoutFrame>
        <Outlet />
      </AppLayoutFrame>
    </AppLayoutContainer>
  );
};

export default AppLayout;
