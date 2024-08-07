import { createBrowserRouter } from 'react-router-dom';
import { Errors } from '../components';
import defaultRoutes from './default';

const router = createBrowserRouter([
  ...defaultRoutes,
  {
    path: '*',
    element: <Errors.NotFound />,
  },
]);

export default router;
