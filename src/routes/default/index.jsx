import { DefaultLayout } from '@layouts';
import { Home } from '@pages';
import { Auth } from '@pages';

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
        path: '/login',
        element: <Auth page='login' />,
      },
      {
        path: '/signup',
        element: <Auth page='signup' />,
      },
    ],
  },
];

export default defaultRoutes;
