import {
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Medicamentos } from "./pages/Medicamentos";
import { Perfil } from "./pages/Perfil";
import { Recordatorios } from "./pages/Recordatorios";
import { Recetas } from "./pages/Recetas";

import { Layouts } from "./components/layouts/Layouts";

export const router = createBrowserRouter([

  // LOGIN
  {
    path: "/",
    element: <Login />,
  },

  // APP
  {
    path: "/app",
    element: (
      <>
        <ScrollRestoration />
        <Layouts />
      </>
    ),

    children: [

      // HOME
      {
        index: true,
        element: <Home />,
      },

      // MEDICAMENTOS
      {
        path: "medicamentos",
        element: <Medicamentos />,
      },

      // PERFIL
      {
        path: "perfil",
        element: <Perfil />,
      },

      // RECORDATORIOS
      {
        path: "recordatorios",
        element: <Recordatorios />,
      },

      // RECETAS
      {
        path: "recetas",
        element: <Recetas />,
      },
    ],
  },
]);