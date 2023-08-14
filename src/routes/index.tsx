import { createBrowserRouter } from 'react-router-dom';
import WebLayout from '~/layouts/web';
import Characters from '~/pages/characters';
import Episodes from '~/pages/episodes';
import Home from '~/pages/home';
import Locations from '~/pages/locations';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/locations',
        element: <Locations />,
      },
      {
        path: '/episodes',
        element: <Episodes />,
      },
    ],
  },
]);

export default routes;
