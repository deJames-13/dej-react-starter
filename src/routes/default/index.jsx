import { DefaultLayout } from '@layouts';
import { Home } from '@pages';

const defaultRoutes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
];

export default defaultRoutes;
