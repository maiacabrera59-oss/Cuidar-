import {
  createBrowserRouter,
  ScrollRestoration,
} from 'react-router-dom';

import { Layouts } from './components/layouts/Layouts';
import { Home } from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Layouts />
      </>
    ),

    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);