import {
  createBrowserRouter,
  ScrollRestoration,
} from 'react-router-dom';



import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Medicamentos } from './pages/Medicamentos';
import { Perfil } from './pages/Perfil';
import { Recordatorios } from './pages/Recordatorios';
import { Recetas } from './pages/Recetas';
import { Layouts } from './components/layouts/Layouts';

export const router = createBrowserRouter([

  // LOGIN
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
        element: <Login />,
      },
    ],
  },

  // APP
  {
    path: '/app',
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