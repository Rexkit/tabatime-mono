import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '@layouts/app-layout/app-layout.component';

import pagesData from './pages-data';
import { IRouter } from '@app-types/router.types';

const Router: FC<PropsWithChildren> = ({ children }) => {
  const pageRoutes = pagesData.map(({ title, path, element }: IRouter) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {pageRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
