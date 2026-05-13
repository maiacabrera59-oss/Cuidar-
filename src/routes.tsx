import {
  createBrowserRouter,
  ScrollRestoration,
} from 'react-router-dom';

import { Layouts } from './components/layouts/Layouts';
import { Home } from './pages/Home';
import { Medicamentos } from './pages/Medicamentos';
import { Perfil } from './pages/Perfil';
import { Recordatorios } from './pages/Recordatorios';
import { Recetas } from './pages/Recetas';

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

      {
        path: 'medicamentos',
        element: <Medicamentos />,
      },
      {
        path: 'perfil',
        element: <Perfil />,
      },
      {
        path: 'recordatorios',
        element: <Recordatorios />,
      },
      {
        path: 'recetas',
        element: <Recetas />,
      },
    ],
  },
]);