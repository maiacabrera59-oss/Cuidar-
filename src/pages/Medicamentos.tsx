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

  const [formData, setFormData] = useState({
    nombre: "",
    dosis: "",
    horario: "",
    indicaciones: "",
  });

  useEffect(() => {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

      setFormData({
        nombre: "",
        dosis: "",
        horario: "",
        indicaciones: "",
      });

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

  return (
    <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-4 py-6">
      <div className="max-w-4xl mx-auto animate-fadeIn">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-slideUp">
          <div>
            <h1 className="text-4xl font-bold text-[#2E7D32]">
              Medicamentos
            </h1>
            <p className="text-[#747970] mt-2 text-lg">
              Gestioná tu tratamiento diario fácilmente.
            </p>
          </div>

          {/* ESTE BOTÓN DISPARA EL FORMULARIO */}
          <button
            onClick={() => setOpen(true)}
            className="bg-[#2E7D32] text-white px-6 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            + Agregar medicamento
          </button>
        </div>

        {/* LISTA DE MEDICAMENTOS */}
        <div className="mt-10 flex flex-col gap-5">
          {medicamentos.map((med, index) => (
            <div
              key={med.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 animate-slideUp delay-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

                <div className="flex gap-5">
                  <div className="icon">💊</div>

                  <div>
                    <h2 className="text-2xl font-bold">{med.nombre}</h2>

                    <div className="flex gap-3 mt-3 flex-wrap">
                      <span className="badge-green">
                        {med.dosis}
                      </span>
                      <span className="badge-gray">
                        {med.horario}
                      </span>
                    </div>

                    <p className="text-[#747970] mt-4">
                      {med.indications}
                    </p>
                  </div>
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="flex flex-col gap-3 justify-center">
                  <button className="bg-[#2E7D32] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#1B5E20] transition shadow-sm w-full lg:w-32">
                    Confirmar
                  </button>

                  <button
                    onClick={() => handleEliminar(med.id)}
                    className="bg-[#D32F2F] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#C62828] transition shadow-sm w-full lg:w-32"
                  >
                    Eliminar
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* INFO / RECORDATORIO */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 animate-slideUp">
          <h3 className="text-2xl font-bold text-[#2E7D32]">
            Recordatorio
          </h3>
          <p className="text-[#747970] mt-3 text-lg">
            Seguir correctamente los horarios y dosis mejora la efectividad del tratamiento.
          </p>
        </div>

      </div>

      {/* EL MODAL CON TU FORMULARIO SE ACTIVA ACÁ EN LA RAÍZ AL DAR CLICK EN EL BOTÓN */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#2E7D32]">
                Nuevo medicamento
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-xl font-bold hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div>
                <label htmlFor="nombre" className="block font-medium mb-2">
                  Nombre
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                />
              </div>

              <div>
                <label htmlFor="dosis" className="block font-medium mb-2">
                  Dosis
                </label>

                <input
                  id="dosis"
                  name="dosis"
                  required
                  value={formData.dosis}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                />
              </div>

              <div>
                <label htmlFor="horario" className="block font-medium mb-2">
                  Horario
                </label>

                <input
                  id="horario"
                  type="time"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                />
              </div>

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
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                />
              </div>

              <div className="flex gap-3 mt-4">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-gray-300 rounded-xl py-3 font-semibold hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-[#2E7D32] text-white rounded-xl py-3 font-bold hover:bg-[#1B5E20] transition"
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