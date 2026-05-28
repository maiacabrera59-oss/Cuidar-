import { Link, useNavigate } from "react-router-dom";
import pastillasIcon from "../assets/svg/pastillas.png";
import recetaIcon from "../assets/svg/receta.svg";
import recordatorioIcon from "../assets/svg/recordatorio.svg";


export function Home() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-3 md:px-4 py-4 md:py-6">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-6xl mx-auto">

        {/* BIENVENIDA */}
        <section className="mt-4 md:mt-10">
          <p className="text-sm md:text-lg text-[#747970]">
            Hola, Mateo
          </p>

          <h2 className="text-3xl md:text-6xl font-bold leading-tight mt-2">
            Todo bajo control
          </h2>
        </section>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 mt-6 md:mt-10">

          {/* CARD PRINCIPAL */}
          <div className="bg-white rounded-3xl p-5 md:p-8 border border-gray-200 shadow-sm">

            <span className="bg-[#2E7D32]/10 text-[#2E7D32] px-3 py-2 rounded-full text-xs md:text-sm font-semibold">
              PRÓXIMA DOSIS
            </span>

            <h1 className="text-3xl md:text-6xl font-bold mt-5 text-[#212121]">
              Atorvastatina
            </h1>

            <p className="text-[#747970] mt-2 text-base md:text-lg">
              40mg • Después de la cena
            </p>

            <div className="mt-8 md:mt-12">
              <p className="text-[#747970] text-base md:text-lg">
                Programada para las
              </p>

              <h2 className="text-4xl md:text-7xl font-bold text-[#2E7D32] mt-2">
                21:00
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12">

              {/* BOTÓN CONFIRMAR DOSIS */}
              <button
                onClick={() => navigate("/app/historial-animo")}
                className="flex-1 bg-[#2E7D32] text-white font-bold py-3 md:py-4 rounded-2xl hover:opacity-90 transition"
              >
                Confirmar dosis
              </button>

              <button className="flex-1 border border-[#747970] text-[#212121] py-3 md:py-4 rounded-2xl hover:bg-gray-100 transition">
                Omitir
              </button>
            </div>
          </div>

          {/* PANEL LATERAL */}
          <div className="flex flex-col gap-4 md:gap-6">

            {/* PROGRESO */}
            <div className="bg-white rounded-3xl p-5 md:p-6 border border-gray-200 shadow-sm">
              <p className="text-[#747970] text-sm md:text-base">
                Progreso del día
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mt-3 text-[#2E7D32]">
                4/6
              </h3>

              <p className="text-[#747970] mt-2 text-sm md:text-base">
                dosis completadas
              </p>
            </div>

            {/* ALERTAS */}
            <div className="bg-white rounded-3xl p-5 md:p-6 border border-gray-200 shadow-sm">
              <p className="text-[#747970] text-sm md:text-base">
                Próximo recordatorio
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-3">
                Vitamina D
              </h3>

              <p className="text-[#747970] mt-2 text-sm md:text-base">
                08:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* ACCESOS RÁPIDOS */}
        <section className="hidden md:block mt-14 pb-8">

          <div className="flex justify-between items-center gap-3">
            <h3 className="text-2xl md:text-5xl font-bold">
              Accesos rápidos
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 md:mt-6">

            {/* CARD MEDICAMENTOS */}
            <Link
              to="/app/medicamentos"
              className="bg-white p-5 md:p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#2E7D32] hover:-translate-y-1 transition"
            >
              <div className="mb-4">
                <img
                  src={pastillasIcon}
                  alt="Medicamentos"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <p className="font-bold text-base md:text-lg text-[#212121]">
                Medicamentos
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Ver tratamientos activos
              </p>
            </Link>

            {/* CARD RECETAS */}
            <Link
              to="/app/recetas"
              className="bg-white p-5 md:p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#2E7D32] hover:-translate-y-1 transition"
            >
              <div className="mb-4">
                <img
                  src={recetaIcon}
                  alt="Recetas"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <p className="font-bold text-base md:text-lg text-[#212121]">
                Recetas
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Recetario digital
              </p>
            </Link>

            {/* CARD RECORDATORIOS */}
            <Link
              to="/app/recordatorios"
              className="bg-white p-5 md:p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#2E7D32] hover:-translate-y-1 transition"
            >
              <div className="mb-4">
                <img
                  src={recordatorioIcon}
                  alt="Recordatorios"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <p className="font-bold text-base md:text-lg text-[#212121]">
                Recordatorios
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Gestionar alertas y horarios
              </p>
            </Link>

          </div>
        </section>
      </div>
    </section>
  );
}