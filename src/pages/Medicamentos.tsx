import { useEffect, useState } from "react";
import {
  obtenerMedicamentos,
  crearMedicamento,
  type MedicamentoApi,
} from "../services/api";

interface Medicamento {
  id: number;
  nombre: string;
  dosis: string;
  horario: string;
  indications: string;
}

export function Medicamentos() {
  const [open, setOpen] = useState(false);
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    dosis: "",
    horario: "",
    indicaciones: "",
  });

  useEffect(() => {
    // Dispara la animación de entrada al montar
    requestAnimationFrame(() => setVisible(true));
    cargarMedicamentos();
  }, []);

  async function cargarMedicamentos() {
    try {
      const data = await obtenerMedicamentos();
      const adaptados: Medicamento[] = data.map((m: MedicamentoApi) => ({
        id: m.idMedicamento,
        nombre: m.nombre,
        dosis: m.presentacion,
        horario: "Sin horario",
        indications: m.descripcion,
      }));
      setMedicamentos(adaptados);
    } catch (error) {
      console.error(error);
      alert("No se pudieron cargar los medicamentos");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const nuevo = await crearMedicamento({
        nombre: formData.nombre,
        descripcion: formData.indicaciones,
        presentacion: formData.dosis,
        idLaboratorio: 1,
      });

      const adaptado: Medicamento = {
        id: nuevo.idMedicamento,
        nombre: nuevo.nombre,
        dosis: nuevo.presentacion,
        horario: formData.horario || "Sin horario",
        indications: nuevo.descripcion,
      };

      setMedicamentos((prev) => [...prev, adaptado]);
      setFormData({ nombre: "", dosis: "", horario: "", indicaciones: "" });
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Error al guardar medicamento");
    }
  }

  function handleEliminar(id: number) {
    if (confirm("¿Estás seguro de que deseas eliminar este medicamento?")) {
      setMedicamentos((prev) => prev.filter((m) => m.id !== id));
    }
  }

  // Delays escalonados para las tarjetas
  const delays = [
    "delay-0",
    "delay-75",
    "delay-100",
    "delay-150",
    "delay-200",
    "delay-300",
  ];

  return (
    <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-4 py-6">
      <div
        className={`max-w-4xl mx-auto transition-all duration-500 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >

        {/* HEADER */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4
            transition-all duration-500 ease-out delay-75
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div>
            <h1 className="text-4xl font-bold text-[#2E7D32]">Medicamentos</h1>
            <p className="text-[#747970] mt-2 text-lg">
              Gestioná tu tratamiento diario fácilmente.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#2E7D32] text-white px-6 py-4 rounded-2xl font-bold
              transition-all duration-200 ease-out
              hover:-translate-y-1 hover:shadow-lg hover:bg-[#256427]
              active:translate-y-0 active:scale-95 active:shadow-none"
          >
            + Agregar medicamento
          </button>
        </div>

        {/* LISTA DE MEDICAMENTOS */}
        <div className="mt-10 flex flex-col gap-5">
          {medicamentos.map((med, index) => (
            <div
              key={med.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-md
                ${delays[index] ?? "delay-300"}
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

                <div className="flex gap-5">
                  {/* Ícono con pulso suave */}
                  <span className="text-2xl animate-pulse [animation-duration:3s]">
                    💊
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold">{med.nombre}</h2>

                    <div className="flex gap-3 mt-3 flex-wrap">
                      <span className="badge-green transition-transform duration-200 hover:scale-105">
                        {med.dosis}
                      </span>
                      <span className="badge-gray transition-transform duration-200 hover:scale-105">
                        {med.horario}
                      </span>
                    </div>

                    <p className="text-[#747970] mt-4">{med.indications}</p>
                  </div>
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="flex flex-col gap-3 justify-center">
                  <button
                    className="bg-[#2E7D32] text-white px-6 py-2.5 rounded-xl font-bold
                      transition-all duration-200 ease-out
                      hover:bg-[#1B5E20] hover:-translate-y-0.5 hover:shadow-md
                      active:translate-y-0 active:scale-95
                      w-full lg:w-32"
                  >
                    Confirmar
                  </button>

                  <button
                    onClick={() => handleEliminar(med.id)}
                    className="bg-[#D32F2F] text-white px-6 py-2.5 rounded-xl font-bold
                      transition-all duration-200 ease-out
                      hover:bg-[#C62828] hover:-translate-y-0.5 hover:shadow-md
                      active:translate-y-0 active:scale-95
                      w-full lg:w-32"
                  >
                    Eliminar
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* RECORDATORIO */}
        <div
          className={`mt-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80
            transition-all duration-500 ease-out delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h3 className="text-2xl font-bold text-[#2E7D32]">Recordatorio</h3>
          <p className="text-[#747970] mt-3 text-lg">
            Seguir correctamente los horarios y dosis mejora la efectividad del tratamiento.
          </p>
        </div>

      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4
            animate-[fadeIn_0.2s_ease_both]"
          style={{ animation: "fadeIn 0.2s ease both" }}
        >
          {/* Keyframe inline para el backdrop (solo opacity) */}
          <style>{`
            @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(16px) scale(0.97) }
                                 to   { opacity: 1; transform: translateY(0)     scale(1)    } }
          `}</style>

          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6"
            style={{ animation: "slideUp 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#2E7D32]">
                Nuevo medicamento
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-xl font-bold text-gray-400
                  transition-all duration-150
                  hover:text-gray-700 hover:rotate-90 hover:scale-110"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {[
                { id: "nombre", label: "Nombre", type: "text" },
                { id: "dosis",  label: "Dosis",  type: "text" },
                { id: "horario", label: "Horario", type: "time" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block font-medium mb-2">
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required={id !== "horario"}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3
                      transition-all duration-200
                      focus:outline-none focus:border-[#2E7D32]
                      focus:ring-2 focus:ring-[#2E7D32]/20
                      hover:border-gray-400"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="indicaciones" className="block font-medium mb-2">
                  Indicaciones
                </label>
                <textarea
                  id="indicaciones"
                  name="indicaciones"
                  value={formData.indicaciones}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3
                    transition-all duration-200
                    focus:outline-none focus:border-[#2E7D32]
                    focus:ring-2 focus:ring-[#2E7D32]/20
                    hover:border-gray-400 resize-none"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-gray-300 rounded-xl py-3 font-semibold
                    transition-all duration-200
                    hover:bg-gray-100 hover:border-gray-400
                    active:scale-95"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-[#2E7D32] text-white rounded-xl py-3 font-bold
                    transition-all duration-200
                    hover:bg-[#1B5E20] hover:shadow-md
                    active:scale-95"
                >
                  Guardar
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}