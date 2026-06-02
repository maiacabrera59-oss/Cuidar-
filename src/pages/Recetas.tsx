import {
  FileText,
  Pill,
  FlaskConical,
  QrCode,
  MoreVertical,
  Filter,
} from "lucide-react";

const recetas = [
  {
    id: 1,
    nombre: "Amoxicilina 500mg",
    medico: "Dr. Alejandro Rossi",
    centro: "Clínica del Sol",
    fecha: "24 Oct, 2023",
    tipo: "medicamento",
  },
  {
    id: 2,
    nombre: "Ibuprofeno 600mg",
    medico: "Dra. Martina García",
    centro: "Hospital Central",
    fecha: "20 Oct, 2023",
    tipo: "medicamento",
  },
  {
    id: 3,
    nombre: "Laboratorios de Control",
    medico: "Dr. Jorge Benítez",
    centro: "Sanatorio Privado",
    fecha: "15 Oct, 2023",
    tipo: "estudio",
  },
];

export function Recetas() {
  return (
    <>
      <section
        className="
          min-h-screen
          bg-[#F5F5F5]
          px-4
          py-6
          animate-[fadeIn_.4s_ease-out]
        "
      >
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">

            <div>
              <p className="text-[#747970] text-sm">
                Recetas digitales
              </p>

              <h1 className="text-3xl md:text-5xl font-bold mt-2">
                Mis Recetas
              </h1>
            </div>

            <button
              className="
                flex
                items-center
                gap-2
                text-[#2E7D32]
                font-medium
                text-sm
              "
            >
              <Filter size={16} />
              Filtrar
            </button>

          </div>

          {/* TABS */}
          <div className="flex gap-3 mb-8">

            <button
              className="
                px-6
                py-2
                rounded-xl
                bg-[#2E7D32]
                text-white
                font-medium
              "
            >
              Activas
            </button>

            <button
              className="
                px-6
                py-2
                rounded-xl
                bg-white
                border
                border-gray-200
                text-gray-600
              "
            >
              Historial
            </button>

          </div>

          {/* LISTADO */}
          <div className="space-y-4">

            {recetas.map((receta) => (
              <div
                key={receta.id}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-4
                  md:p-5
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <div className="flex items-center justify-between gap-4">

                  {/* INFO */}
                  <div className="flex items-center gap-4 flex-1">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-[#2E7D32]/10
                        flex
                        items-center
                        justify-center
                        text-[#2E7D32]
                      "
                    >
                      {receta.tipo === "medicamento" ? (
                        <Pill size={22} />
                      ) : (
                        <FlaskConical size={22} />
                      )}
                    </div>

                    <div>

                      <h3 className="font-bold text-lg">
                        {receta.nombre}
                      </h3>

                      <p className="text-sm text-[#747970]">
                        {receta.medico} • {receta.centro}
                      </p>

                      <div className="flex items-center gap-3 mt-2">

                        <span
                          className="
                            bg-[#E8F5E9]
                            text-[#2E7D32]
                            text-xs
                            font-bold
                            px-2
                            py-1
                            rounded-full
                          "
                        >
                          VIGENTE
                        </span>

                        <span className="text-xs text-[#747970]">
                          Emitida: {receta.fecha}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* BOTONES */}
                  <div className="flex items-center gap-2">

                    <button
                      className="
                        hidden
                        sm:flex

                        items-center
                        gap-2

                        bg-[#2E7D32]
                        text-white

                        px-5
                        py-3

                        rounded-xl
                        font-semibold

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:shadow-lg

                        active:scale-[0.98]
                      "
                    >
                      <QrCode size={18} />
                      Ver QR
                    </button>

                    <button
                      className="
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-gray-200
                        flex
                        items-center
                        justify-center

                        hover:bg-gray-100
                        transition
                      "
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>

                </div>

                {/* BOTON MOBILE */}
                <button
                  className="
                    sm:hidden

                    mt-4
                    w-full

                    bg-[#2E7D32]
                    text-white

                    py-3
                    rounded-xl
                    font-semibold

                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <QrCode size={18} />
                  Ver QR
                </button>

              </div>
            ))}
          </div>

          {/* INFO */}
          <div
            className="
              mt-8
              bg-white
              border
              border-gray-200
              rounded-3xl
              p-6
              shadow-sm

              transition-all
              duration-300

              hover:shadow-md
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-[#F5F5F5]

                  flex
                  items-center
                  justify-center
                "
              >
                <FileText
                  size={28}
                  className="text-[#2E7D32]"
                />
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  ¿Cómo funciona?
                </h3>

                <p className="text-[#747970] mt-1">
                  Presentá el código QR de tu receta digital
                  en cualquier farmacia adherida para retirar
                  medicamentos de forma rápida y segura.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}