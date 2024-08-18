import { Auth } from '@features';
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
