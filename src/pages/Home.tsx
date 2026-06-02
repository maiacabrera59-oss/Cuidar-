import { Link, useNavigate } from "react-router-dom";
import pastillasIcon from "../assets/svg/pastillas.png";
import recetaIcon from "../assets/svg/receta.svg";
import recordatorioIcon from "../assets/svg/recordatorio.svg";

export function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-3 md:px-4 py-4 md:py-6">

      <div className="max-w-6xl mx-auto animate-[fadeIn_.6s_ease-out]">

        {/* BIENVENIDA */}
        <section className="mt-4 md:mt-10">
          <p
            className="
              text-sm md:text-lg text-[#747970]
              animate-[slideUp_.5s_ease-out]
            "
          >
            Hola, Mateo
          </p>

          <h2
            className="
              text-3xl md:text-6xl font-bold leading-tight mt-2
              animate-[slideUp_.7s_ease-out]
            "
          >
            Todo bajo control
          </h2>
        </section>

        {/* GRID */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 mt-6 md:mt-10">

          {/* CARD PRINCIPAL */}
          <div
            className="
              bg-white rounded-3xl p-5 md:p-8
              border border-gray-200 shadow-sm
              animate-[slideUp_.8s_ease-out]
              transition-all duration-300
              hover:shadow-md
            "
          >
            <span
              className="
                bg-[#2E7D32]/10 text-[#2E7D32]
                px-3 py-2 rounded-full
                text-xs md:text-sm font-semibold
              "
            >
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

              <h2
                className="
                  text-4xl md:text-7xl font-bold
                  text-[#2E7D32] mt-2
                  transition-all duration-300
                "
              >
                21:00
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12">

              <button
                onClick={() => navigate("/app/historial-animo")}
                className="
                  flex-1 bg-[#2E7D32] text-white font-bold
                  py-3 md:py-4 rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  active:scale-[0.98]
                "
              >
                Confirmar dosis
              </button>

              <button
                className="
                  flex-1 border border-[#747970]
                  text-[#212121]
                  py-3 md:py-4 rounded-2xl
                  transition-all duration-300
                  hover:bg-gray-100
                  hover:-translate-y-0.5
                  active:scale-[0.98]
                "
              >
                Omitir
              </button>
            </div>
          </div>

          {/* PANEL DERECHO */}
          <div className="flex flex-col gap-4 md:gap-6">

            <div
              className="
                bg-white rounded-3xl p-5 md:p-6
                border border-gray-200 shadow-sm
                animate-[slideUp_1s_ease-out]
                transition-all duration-300
                hover:shadow-md
                hover:-translate-y-1
              "
            >
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

            <div
              className="
                bg-white rounded-3xl p-5 md:p-6
                border border-gray-200 shadow-sm
                animate-[slideUp_1.1s_ease-out]
                transition-all duration-300
                hover:shadow-md
                hover:-translate-y-1
              "
            >
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
            <h3
              className="
                text-2xl md:text-5xl font-bold
                animate-[slideUp_1.2s_ease-out]
              "
            >
              Accesos rápidos
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 md:mt-6">

            <Link
              to="/app/medicamentos"
              className="
                bg-white p-5 md:p-6 rounded-3xl
                border border-gray-200 shadow-sm
                transition-all duration-300
                hover:border-[#2E7D32]
                hover:-translate-y-2
                hover:shadow-lg
                animate-[slideUp_1.3s_ease-out]
              "
            >
              <div className="mb-4">
                <img
                  src={pastillasIcon}
                  alt="Medicamentos"
                  className="
                    w-10 h-10 md:w-12 md:h-12 object-contain
                    transition-transform duration-300
                    hover:scale-110
                  "
                />
              </div>

              <p className="font-bold text-base md:text-lg text-[#212121]">
                Medicamentos
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Ver tratamientos activos
              </p>
            </Link>

            <Link
              to="/app/recetas"
              className="
                bg-white p-5 md:p-6 rounded-3xl
                border border-gray-200 shadow-sm
                transition-all duration-300
                hover:border-[#2E7D32]
                hover:-translate-y-2
                hover:shadow-lg
                animate-[slideUp_1.4s_ease-out]
              "
            >
              <div className="mb-4">
                <img
                  src={recetaIcon}
                  alt="Recetas"
                  className="
                    w-10 h-10 md:w-12 md:h-12 object-contain
                    transition-transform duration-300
                    hover:scale-110
                  "
                />
              </div>

              <p className="font-bold text-base md:text-lg text-[#212121]">
                Recetas
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Recetario digital
              </p>
            </Link>

            <Link
              to="/app/recordatorios"
              className="
                bg-white p-5 md:p-6 rounded-3xl
                border border-gray-200 shadow-sm
                transition-all duration-300
                hover:border-[#2E7D32]
                hover:-translate-y-2
                hover:shadow-lg
                animate-[slideUp_1.5s_ease-out]
              "
            >
              <div className="mb-4">
                <img
                  src={recordatorioIcon}
                  alt="Recordatorios"
                  className="
                    w-10 h-10 md:w-12 md:h-12 object-contain
                    transition-transform duration-300
                    hover:scale-110
                  "
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

      {/* ANIMACIONES */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}