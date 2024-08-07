import { createBrowserRouter } from 'react-router-dom';
import { Error } from '../components';
import defaultRoutes from './default';

const router = createBrowserRouter([
  ...defaultRoutes,
  {
    path: '*',
    element: <Error status={404} message='Page not found.' />,
  },
]);

export default router;
