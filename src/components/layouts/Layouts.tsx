import { Link, Outlet } from "react-router-dom";

import iconoCasa from "../../assets/svg/home.svg";
import recordatorioIcon from "../../assets/svg/recordatorio.svg";
import medicamentoIcon from "../../assets/svg/pastillas.png";
import perfilIcon from "../../assets/svg/perfil.svg";
import recetaIcon from "../../assets/svg/receta.svg";

export function Layouts() {

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#212121] flex flex-col">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white px-4 py-3">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/app"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E7D32]"
          >
            Cuidar+
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-lg">

            <Link
              to="/app"
              className="hover:text-[#2E7D32] transition"
            >
              Inicio
            </Link>

            <Link
              to="/app/medicamentos"
              className="hover:text-[#2E7D32] transition"
            >
              Medicamentos
            </Link>

            <Link
              to="/app/recordatorios"
              className="hover:text-[#2E7D32] transition"
            >
              Recordatorios
            </Link>

            <Link
              to="/app/recetas"
              className="hover:text-[#2E7D32] transition"
            >
              Recetas
            </Link>

            <Link
              to="/app/perfil"
              className="hover:text-[#2E7D32] transition"
            >
              Perfil
            </Link>

          </nav>

          {/* PERFIL */}
          <Link to="/app/perfil">

            <img
              src="https://i.pravatar.cc/40"
              alt="perfil"
              className="
      w-9
      h-9
      sm:w-10
      sm:h-10
      rounded-full
      object-cover
      cursor-pointer
      hover:scale-105
      transition
      border-2
      border-transparent
      hover:border-[#2E7D32]/30
    "
            />

          </Link>

        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1 w-full px-3 md:px-4 pb-28 md:pb-6">
        <Outlet />
      </main>

      {/* FOOTER MOBILE */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">

        <ul className="grid grid-cols-5 items-center py-2">

          {/* INICIO */}
          <li>
            <Link
              to="/app"
              className="flex flex-col items-center justify-center gap-1 text-[10px]"
            >

              <img
                src={iconoCasa}
                alt="Inicio"
                className="w-6 h-6 object-contain"
              />

              <span>Inicio</span>

            </Link>
          </li>

          {/* MEDICAMENTOS */}
          <li>
            <Link
              to="/app/medicamentos"
              className="flex flex-col items-center justify-center gap-1 text-[10px] px-1"
            >
              <img
                src={medicamentoIcon}
                alt="Medicamentos"
                className="w-8 h-8 object-contain"
              />

              <span className="text-center leading-tight">
                Medicamentos
              </span>
            </Link>
          </li>

          {/* RECORDATORIOS */}
          <li>
            <Link
              to="/app/recordatorios"
              className="flex flex-col items-center justify-center gap-1 text-[10px] px-1"
            >
              <img
                src={recordatorioIcon}
                alt="Recordatorios"
                className="w-8 h-8 object-contain"
              />

              <span className="text-center leading-tight">
                Recordatorios
              </span>
            </Link>
          </li>

          {/* RECETAS */}
          <li>
            <Link
              to="/app/recetas"
              className="flex flex-col items-center justify-center gap-1 text-[10px] px-1"
            >
              <img
                src={recetaIcon}
                alt="Recetas"
                className="w-8 h-8 object-contain"
              />

              <span>Recetas</span>
            </Link>
          </li>

          {/* PERFIL */}
          <li>
            <Link
              to="/app/perfil"
              className="flex flex-col items-center justify-center gap-1 text-[10px]"
            >
              <img
                src={perfilIcon}
                alt="Perfil"
                className="w-7 h-7 object-contain"
              />

              <span>Perfil</span>
            </Link>
          </li>

        </ul>

      </footer>
    </div>
  );
}