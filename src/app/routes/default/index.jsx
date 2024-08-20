import { authRoutes } from '@features';
import { DefaultLayout } from '@layouts';
import { About, Home } from '@screens';

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
      {
        path: '/about',
        element: <About />,
      },

      ...authRoutes,
    ],
  },
];

export default defaultRoutes;
