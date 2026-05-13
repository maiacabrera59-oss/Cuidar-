import { Link, Outlet } from "react-router-dom";

export function Layouts() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#212121] flex flex-col">

      {/* HEADER */}
      <header className="p-5 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#2E7D32]"
          >
            Cuidar+
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-8 font-medium">

            <Link to="/">Inicio</Link>

            <Link to="/medicamentos">Medicamentos</Link>

            <Link to="/">Alertas</Link>

            <Link to="/">Recetas</Link>

            <Link to="/">Perfil</Link>
          </nav>

          {/* PERFIL */}
          <img
            src="https://i.pravatar.cc/40"
            alt="perfil"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1 w-full pb-24 md:pb-0">
        <Outlet />
      </main>

      {/* FOOTER MOBILE */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">

        <ul className="flex justify-around py-4 text-sm">

          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/medicamentos">Medicamentos</Link>
          </li>

          <li>
            <Link to="/">Alertas</Link>
          </li>

          <li>
            <Link to="/">Recetas</Link>
          </li>

          <li>
            <Link to="/">Perfil</Link>
          </li>

        </ul>
      </footer>
    </div>
  );
}