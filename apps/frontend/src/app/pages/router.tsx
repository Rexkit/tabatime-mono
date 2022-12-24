import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRouter } from '@app-types/router.types';

import pagesData from './pages-data';

const Router: FC<PropsWithChildren> = ({ children }) => {
  const pageRoutes = pagesData.map(({ title, path, element }: IRouter) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  return (
    <BrowserRouter>
      {children}
      <Routes>{pageRoutes}</Routes>
    </BrowserRouter>
  );
};

export default Router;
