import { IRouter } from '@app-types/router.types';

import Login from './login';
import Register from './register';

const pagesData: IRouter[] = [
  {
    title: 'login',
    path: '/login',
    element: <Login />,
  },
  {
    title: 'register',
    path: '/register',
    element: <Register />,
  },
];

export default pagesData;
