import { useState } from "react";

interface Medicamento {
  id: number;
  nombre: string;
  dosis: string;
  horario: string;
  indicaciones: string;
}

export function Medicamentos() {

  const [open, setOpen] = useState(false);

  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([
    {
      id: 1,
      nombre: "Atorvastatina",
      dosis: "40mg",
      horario: "22:00",
      indicaciones: "Antes de dormir",
    },
    {
      id: 2,
      nombre: "Metformina",
      dosis: "500mg",
      horario: "08:00",
      indicaciones: "Con desayuno",
    },
  ]);

  const [formData, setFormData] = useState({
    nombre: "",
    dosis: "",
    horario: "",
    indicaciones: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nuevoMedicamento: Medicamento = {
      id: Date.now(),
      nombre: formData.nombre,
      dosis: formData.dosis,
      horario: formData.horario,
      indicaciones: formData.indicaciones,
    };

    setMedicamentos([...medicamentos, nuevoMedicamento]);

    setFormData({
      nombre: "",
      dosis: "",
      horario: "",
      indicaciones: "",
    });

    setOpen(false);
  }

  return (
    <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-4 py-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-4xl font-bold text-[#2E7D32]">
              Medicamentos
            </h1>

            <p className="text-[#747970] mt-2 text-lg">
              Gestioná tu tratamiento diario fácilmente.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#2E7D32] text-white px-6 py-4 rounded-2xl font-bold hover:opacity-90 transition"
          >
            + Agregar medicamento
          </button>
        </div>

        {/* LISTADO */}
        <div className="mt-10 flex flex-col gap-5">

          {medicamentos.map((medicamento) => (
            <div
              key={medicamento.id}
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                {/* INFO */}
                <div className="flex items-start gap-5">

                  {/* ICONO */}
                  <div className="w-16 h-16 rounded-2xl bg-[#2E7D32]/10 flex items-center justify-center text-3xl">
                    💊
                  </div>

                  {/* DATOS */}
                  <div>

                    <h2 className="text-2xl font-bold">
                      {medicamento.nombre}
                    </h2>

                    <div className="flex flex-wrap gap-3 mt-3">

                      <span className="bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold">
                        {medicamento.dosis}
                      </span>

                      <span className="bg-gray-100 text-[#212121] px-4 py-2 rounded-full text-sm font-semibold">
                        {medicamento.horario}
                      </span>
                    </div>

                    <p className="text-[#747970] mt-4">
                      {medicamento.indicaciones}
                    </p>
                  </div>
                </div>

                {/* ESTADO */}
                <div className="flex flex-col gap-3">

                  <button className="bg-[#2E7D32] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                    Confirmar
                  </button>

                  <button className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition">
                    Editar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INFORMACIÓN */}
        <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

          <h3 className="text-2xl font-bold text-[#2E7D32]">
            Recordatorio
          </h3>

          <p className="text-[#747970] mt-3 text-lg leading-relaxed">
            Seguir correctamente los horarios y dosis ayuda a mejorar la
            efectividad del tratamiento y mantener un mejor control de la salud.
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-xl">

            {/* HEADER MODAL */}
            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-bold text-[#2E7D32]">
                Nuevo medicamento
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5"
            >

              {/* NOMBRE */}
              <div>
                <label
                  htmlFor="nombre"
                  className="font-semibold"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Ibuprofeno"
                  required
                  className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#2E7D32]"
                />
              </div>

              {/* DOSIS */}
              <div>
                <label
                  htmlFor="dosis"
                  className="font-semibold"
                >
                  Dosis
                </label>

                <input
                  id="dosis"
                  type="text"
                  name="dosis"
                  value={formData.dosis}
                  onChange={handleChange}
                  placeholder="Ej: 600mg"
                  required
                  className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#2E7D32]"
                />
              </div>

              {/* HORARIO */}
              <div>
                <label
                  htmlFor="horario"
                  className="font-semibold"
                >
                  Horario
                </label>

                <input
                  id="horario"
                  type="time"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#2E7D32]"
                />
              </div>

              {/* INDICACIONES */}
              <div>
                <label
                  htmlFor="indicaciones"
                  className="font-semibold"
                >
                  Indicaciones
                </label>

                <textarea
                  id="indicaciones"
                  name="indicaciones"
                  value={formData.indicaciones}
                  onChange={handleChange}
                  placeholder="Ej: Después de almorzar"
                  rows={4}
                  className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#2E7D32]"
                />
              </div>

              {/* BOTONES */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-gray-300 py-4 rounded-2xl hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-[#2E7D32] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition"
                >
                  Guardar medicamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}