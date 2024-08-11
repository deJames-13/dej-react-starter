import { Errors } from '@components';
import { createBrowserRouter } from 'react-router-dom';
import defaultRoutes from './default';

const router = createBrowserRouter([
  ...defaultRoutes,
  {
    path: '*',
    element: <Errors.NotFound />,
  },
]);

export default router;
