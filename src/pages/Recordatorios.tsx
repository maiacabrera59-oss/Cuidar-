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
    <section className="max-w-6xl mx-auto py-6 md:py-10">
      <div className="mb-10">
        <p className="text-[#747970] text-base md:text-lg">
          Gestión diaria
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
          Próximos Recordatorios
        </h1>

        <p className="text-[#747970] mt-4 text-base md:text-lg">
          Mantenga el control de su salud con calma.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-[#D9D9D9]" />

        <div className="flex flex-col gap-8 md:gap-10">
          {recordatorios.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 md:gap-6 relative z-10"
            >
              <div
                className={`min-w-12 md:min-w-16 h-12 md:h-16 rounded-full flex items-center justify-center shadow-sm ${
                  item.estado === "activo"
                    ? "bg-[#2E7D32] text-white"
                    : "bg-[#ECEEE8] text-[#7A7A7A]"
                }`}
              >
                {item.icono === "clock" && (
                  <Clock3 size={28} />
                )}

                {item.icono === "food" && (
                  <Utensils size={28} />
                )}

                {item.icono === "moon" && (
                  <Moon size={28} />
                )}
              </div>

              <div className="bg-white rounded-3xl p-5 md:p-7 border border-gray-200 shadow-sm flex-1">
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
                    <button className="flex-1 bg-[#2E7D32] text-white font-bold py-3 rounded-2xl hover:opacity-90 transition flex items-center justify-center gap-2">
                      <CheckCircle2 size={20} />
                      Confirmar
                    </button>

                    <button className="flex-1 border border-[#747970] text-[#212121] py-3 rounded-2xl hover:bg-gray-100 transition flex items-center justify-center gap-2">
                      <Ban size={20} />
                      Omitir
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 bg-[#F5F5F5] rounded-2xl p-4 text-[#747970] text-sm md:text-base">
                    Asegúrese de comer antes de tomar la dosis.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}