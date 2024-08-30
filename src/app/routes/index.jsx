import { Errors } from '@common/components';
import { createBrowserRouter } from 'react-router-dom';
import defaultRoutes from './default';
import privateRoutes from './private';

const router = createBrowserRouter([
  ...defaultRoutes,
  ...privateRoutes,
  {
    path: '*',
    element: <Errors.NotFound />,
  },
]);

export default router;
