import {
  Clock3,
  Utensils,
  Moon,
  CheckCircle2,
  Ban,
} from "lucide-react";

const recordatorios = [
  {
    id: 1,
    hora: "HOY, 08:00 AM",
    titulo: "Enalapril",
    descripcion: "Presión arterial • 10mg",
    icono: "clock",
    estado: "activo",
  },
  {
    id: 2,
    hora: "HOY, 01:00 PM",
    titulo: "Metformina",
    descripcion: "Control de glucosa • Con la comida",
    icono: "food",
    estado: "pendiente",
  },
  {
    id: 3,
    hora: "HOY, 09:00 PM",
    titulo: "Atorvastatina",
    descripcion: "Colesterol • 20mg",
    icono: "moon",
    estado: "pendiente",
  },
];

export function Recordatorios() {
  return (
    <>
      <section className="max-w-6xl mx-auto py-6 md:py-10">
        <div className="mb-10 animate-[fadeIn_.5s_ease-out]">
          <p className="text-[#747970] text-base md:text-lg">
            Gestión diaria
          </p>
        </div>

        <div className="relative">
          {/* Línea temporal */}
          <div
            className="
              absolute left-6 md:left-8 top-0 bottom-0 w-1
              bg-[#D9D9D9]
              animate-[growLine_.8s_ease-out]
              origin-top
            "
          />

          <div className="flex flex-col gap-8 md:gap-10">
            {recordatorios.map((item) => (
              <div
                key={item.id}
                className="
                  flex gap-4 md:gap-6 relative z-10
                  opacity-0
                  animate-[slideUp_.6s_ease-out_forwards]
                "
                style={{
                  animationDelay: `${item.id * 150}ms`,
                }}
              >
                {/* ICONO */}
               <div
  className={`
    relative
    min-w-12 md:min-w-16 h-12 md:h-16
    rounded-full flex items-center justify-center
    shadow-sm transition-all duration-300

    ${
      item.estado === "activo"
        ? "bg-[#2E7D32] text-white"
        : "bg-[#ECEEE8] text-[#7A7A7A]"
    }
  `}
>
  {item.estado === "activo" && (
    <div
      className="
        absolute inset-0
        rounded-full
        border-2 border-[#2E7D32]
        animate-[breatheRing_4s_ease-in-out_infinite]
      "
    />
  )}

  {item.icono === "clock" && <Clock3 size={28} />}
  {item.icono === "food" && <Utensils size={28} />}
  {item.icono === "moon" && <Moon size={28} />}
</div>

                {/* CARD */}
                <div
                  className="
                    bg-white rounded-3xl p-5 md:p-7
                    border border-gray-200 shadow-sm flex-1

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <p className="text-sm md:text-base font-bold text-[#2E7D32] uppercase">
                    {item.hora}
                  </p>

                  <h2 className="text-2xl md:text-4xl font-bold mt-3">
                    {item.titulo}
                  </h2>

                  <p className="text-[#747970] mt-2 text-base md:text-lg">
                    {item.descripcion}
                  </p>

                  {item.estado === "activo" ? (
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <button
                        className="
                          flex-1 bg-[#2E7D32]
                          text-white font-bold py-3 rounded-2xl

                          flex items-center justify-center gap-2

                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:shadow-lg
                          active:scale-[0.98]
                        "
                      >
                        <CheckCircle2 size={20} />
                        Confirmar
                      </button>

                      <button
                        className="
                          flex-1 border border-[#747970]
                          text-[#212121] py-3 rounded-2xl

                          flex items-center justify-center gap-2

                          transition-all duration-300
                          hover:bg-gray-100
                          hover:-translate-y-0.5
                          active:scale-[0.98]
                        "
                      >
                        <Ban size={20} />
                        Omitir
                      </button>
                    </div>
                  ) : (
                    <div
                      className="
                        mt-6 bg-[#F5F5F5]
                        rounded-2xl p-4
                        text-[#747970]
                        text-sm md:text-base

                        transition-all duration-300
                        hover:bg-[#ECEEE8]
                      "
                    >
                      Asegúrese de comer antes de tomar la dosis.
                    </div>
                  )}
                </div>
              </div>
            ))}
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growLine {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
@keyframes breatheRing {
  0% {
    transform: scale(1);
    opacity: 0.45;
  }

  50% {
    transform: scale(1.18);
    opacity: 0.15;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
      `}</style>
    </>
  );
}
