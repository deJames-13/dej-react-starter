import { PrivateLayout } from '@layouts';
import { Dashboard } from '@pages';

const privateRoutes = [
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

export default privateRoutes;
