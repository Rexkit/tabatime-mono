import { IRouter } from '@app-types/router.types';

import Authenticate from './Authenticate';

const pagesData: IRouter[] = [
  {
    title: 'authenticate',
    path: '/auth',
    element: <Authenticate />,
  },
];

export default pagesData;
