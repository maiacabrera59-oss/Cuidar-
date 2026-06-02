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
          recetas-page
          min-h-screen
          bg-[#F5F5F5]
          px-4
          py-6
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
                filter-button
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
                tab-button
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
                tab-button
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
                  receta-card
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-4
                  md:p-5
                  shadow-sm
                "
              >
                <div className="flex items-center justify-between gap-4">

                  {/* INFO */}
                  <div className="flex items-center gap-4 flex-1">

                    <div
                      className="
                        receta-icon
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
                        qr-button

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

                        active:scale-[0.98]
                      "
                    >
                      <QrCode size={18} />
                      Ver QR
                    </button>

                    <button
                      className="
                        menu-button
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-gray-200
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>

                </div>

                {/* BOTON MOBILE */}
                <button
                  className="
                    qr-mobile

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
              info-card

              mt-8
              bg-white
              border
              border-gray-200
              rounded-3xl
              p-6
              shadow-sm
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  info-icon

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
        @keyframes pageFade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .recetas-page {
          animation: pageFade .35s ease-out;
        }

        .receta-card {
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
          will-change: transform;
        }

        .receta-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0,0,0,.06);
        }

        .receta-icon {
          transition: transform .25s ease;
        }

        .receta-card:hover .receta-icon {
          transform: scale(1.08);
        }

        .qr-button,
        .qr-mobile {
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            opacity .25s ease;
        }

        .qr-button:hover,
        .qr-mobile:hover {
          transform: translateY(-2px);
        }

        .menu-button {
          transition:
            background-color .25s ease,
            transform .25s ease;
        }

        .menu-button:hover {
          background: #f5f5f5;
          transform: scale(1.05);
        }

        .filter-button {
          transition:
            transform .25s ease,
            opacity .25s ease;
        }

        .filter-button:hover {
          transform: translateY(-1px);
          opacity: .85;
        }

        .tab-button {
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .tab-button:hover {
          transform: translateY(-1px);
        }

        .info-card {
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,.05);
        }

        .info-icon {
          transition: transform .25s ease;
        }

        .info-card:hover .info-icon {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}