import { useEffect, useState } from "react";
import {
  obtenerMedicamentos,
  crearMedicamento,
  type MedicamentoApi,
} from "../services/api";

import "./Medicamentos.css";

interface Medicamento {
  id: number;
  nombre: string;
  dosis: string;
  horario: string;
  indicaciones: string;
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
        indicaciones: m.descripcion,
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
        horario: formData.horario,
        indicaciones: nuevo.descripcion,
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

          <button
            onClick={() => setOpen(true)}
            className="bg-[#2E7D32] text-white px-6 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:shadow-lg transition"
          >
            + Agregar medicamento
          </button>
        </div>

        {/* LISTA */}
        <div className="mt-10 flex flex-col gap-5">
          {medicamentos.map((med, index) => (
            <div
              key={med.id}
              className={`card animate-slideUp delay-${index}`}
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
                      {med.indicaciones}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="btn-green">
                    Confirmar
                  </button>

                  <button className="btn-outline">
                    Editar
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* INFO */}
        <div className="mt-10 card animate-slideUp">
          <h3 className="text-2xl font-bold text-[#2E7D32]">
            Recordatorio
          </h3>

          <p className="text-[#747970] mt-3 text-lg">
            Seguir correctamente los horarios y dosis mejora la efectividad del tratamiento.
          </p>
        </div>

      </div>

      {/* MODAL */}
      {open && (
        <div className="modal-bg animate-fadeIn">
          <div className="modal animate-modalPop">

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#2E7D32]">
                Nuevo medicamento
              </h2>

              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

              <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="dosis">Dosis</label>
                <input
                  id="dosis"
                  name="dosis"
                  value={formData.dosis}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="horario">Horario</label>
                <input
                  id="horario"
                  type="time"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="indicaciones">Indicaciones</label>
                <textarea
                  id="indicaciones"
                  name="indicaciones"
                  value={formData.indicaciones}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-outline flex-1"
                >
                  Cancelar
                </button>

                <button type="submit" className="btn-green flex-1">
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