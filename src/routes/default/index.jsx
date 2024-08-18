import { DefaultLayout } from '@layouts';
import { About, Auth, Home } from '@pages';

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
