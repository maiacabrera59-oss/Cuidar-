import { Link, Outlet } from "react-router-dom";

export function Layouts() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#212121] flex flex-col">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl md:text-5xl font-bold text-[#2E7D32]"
          >
            Cuidar+
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-6 lg:gap-10 text-lg lg:text-2xl ml-auto">

            <Link
              to="/"
              className="hover:text-[#2E7D32] transition"
            >
              Inicio
            </Link>

            <Link
              to="/medicamentos"
              className="hover:text-[#2E7D32] transition"
            >
              Medicamentos
            </Link>

            <Link
              to="/recordatorios"
              className="hover:text-[#2E7D32] transition"
            >
              Recordatorios
            </Link>

            <Link
              to="/recetas"
              className="hover:text-[#2E7D32] transition"
            >
              Recetas
            </Link>

            <Link
              to="/perfil"
              className="hover:text-[#2E7D32] transition"
            >
              Perfil
            </Link>
          </nav>

          {/* PERFIL */}
          <img
            src="https://i.pravatar.cc/40"
            alt="perfil"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full ml-auto md:ml-8"
          />
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1 w-full pb-24 md:pb-0 px-4">
        <Outlet />
      </main>

      {/* FOOTER MOBILE */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">

        <ul className="flex justify-around items-center py-3 text-xs">

          <li>
            <Link
              to="/"
              className="flex flex-col items-center"
            >
              🏠
              <span>Inicio</span>
            </Link>
          </li>

          <li>
            <Link
              to="/medicamentos"
              className="flex flex-col items-center"
            >
              💊
              <span>Medic.</span>
            </Link>
          </li>

          <li>
            <Link
              to="/recordatorios"
              className="flex flex-col items-center"
            >
              ⏰
              <span>Record.</span>
            </Link>
          </li>

          <li>
            <Link
              to="/recetas"
              className="flex flex-col items-center"
            >
              📄
              <span>Recetas</span>
            </Link>
          </li>

          <li>
            <Link
              to="/perfil"
              className="flex flex-col items-center"
            >
              👤
              <span>Perfil</span>
            </Link>
          </li>

        </ul>
      </footer>
    </div>
  );
}