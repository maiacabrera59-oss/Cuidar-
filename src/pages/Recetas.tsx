import { useState } from "react";
import {
  FileText,
  Pill,
  FlaskConical,
  QrCode,
  MoreVertical,
  Filter,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

interface Receta {
  id: number;
  nombre: string;
  medico: string;
  centro: string;
  fecha: string;
  tipo: "medicamento" | "estudio";
}

export function Recetas() {
  const [recetas, setRecetas] = useState<Receta[]>([
    {
      id: 1,
      nombre: "Amoxicilina 500mg",
      medico: "Dr. Alejandro Rossi",
      centro: "Clínica del Sol",
      fecha: "2023-10-24",
      tipo: "medicamento",
    },
    {
      id: 2,
      nombre: "Ibuprofeno 600mg",
      medico: "Dra. Martina García",
      centro: "Hospital Central",
      fecha: "2023-10-20",
      tipo: "medicamento",
    },
    {
      id: 3,
      nombre: "Laboratorios de Control",
      medico: "Dr. Jorge Benítez",
      centro: "Sanatorio Privado",
      fecha: "2023-10-15",
      tipo: "estudio",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [menuOpen, setMenuOpen] =
    useState<number | null>(null);

  const [formData, setFormData] = useState({
    nombre: "",
    medico: "",
    centro: "",
    fecha: "",
    tipo: "medicamento" as
      | "medicamento"
      | "estudio",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleNuevaReceta() {
    setEditingId(null);

    setFormData({
      nombre: "",
      medico: "",
      centro: "",
      fecha: "",
      tipo: "medicamento",
    });

    setOpen(true);
  }

  function handleEditar(receta: Receta) {
    setEditingId(receta.id);

    setFormData({
      nombre: receta.nombre,
      medico: receta.medico,
      centro: receta.centro,
      fecha: receta.fecha,
      tipo: receta.tipo,
    });

    setMenuOpen(null);
    setOpen(true);
  }

  function handleEliminar(id: number) {
    if (!window.confirm("¿Eliminar receta?")) return;

    setRecetas(
      recetas.filter(
        (receta) => receta.id !== id
      )
    );

    setMenuOpen(null);
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (editingId) {
      setRecetas(
        recetas.map((r) =>
          r.id === editingId
            ? {
                ...r,
                ...formData,
              }
            : r
        )
      );
    } else {
      setRecetas([
        ...recetas,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
    }

    setOpen(false);

    setFormData({
      nombre: "",
      medico: "",
      centro: "",
      fecha: "",
      tipo: "medicamento",
    });
  }

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

          <div className="flex flex-wrap gap-3 mb-8">

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

            <button
              onClick={handleNuevaReceta}
              className="
                flex
                items-center
                gap-2
                px-6
                py-2
                rounded-xl
                bg-[#2E7D32]
                text-white
                font-medium
              "
            >
              <Plus size={18} />
              Agregar receta
            </button>

          </div>

          <div className="space-y-4">{recetas.map((receta) => (
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
          "
        >
          <QrCode size={18} />
          Ver QR
        </button>

        <div className="relative">

          <button
            onClick={() =>
              setMenuOpen(
                menuOpen === receta.id
                  ? null
                  : receta.id
              )
            }
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

          {menuOpen === receta.id && (
            <div
              className="
                absolute
                right-0
                top-12

                bg-white
                border
                border-gray-200

                rounded-2xl
                shadow-lg

                overflow-hidden
                min-w-[180px]

                z-50
              "
            >

              <button
                onClick={() =>
                  handleEditar(receta)
                }
                className="
                  w-full
                  px-4
                  py-3

                  flex
                  items-center
                  gap-3

                  hover:bg-gray-50
                "
              >
                <Pencil size={16} />
                Editar
              </button>

              <button
                onClick={() =>
                  handleEliminar(receta.id)
                }
                className="
                  w-full
                  px-4
                  py-3

                  flex
                  items-center
                  gap-3

                  text-red-600

                  hover:bg-red-50
                "
              >
                <Trash2 size={16} />
                Eliminar
              </button>

            </div>
          )}

        </div>

      </div>

    </div>

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
))}          </div>

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
          </div>        </div>
      </section>

      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/40

            flex
            items-center
            justify-center

            z-[999]

            px-4

            animate-[fadeIn_.25s_ease-out]
          "
        >
          <div
            className="
              bg-white

              w-full
              max-w-xl

              rounded-3xl

              p-8

              shadow-xl

              animate-[modalPop_.25s_ease-out]
            "
          >
            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-bold text-[#2E7D32]">

                {editingId
                  ? "Editar receta"
                  : "Nueva receta"}

              </h2>

              <button
                onClick={() => setOpen(false)}
                className="
                  text-2xl
                  text-gray-500

                  transition-all
                  duration-300

                  hover:text-black
                  hover:rotate-90
                "
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5"
            >

              <div>

                <label
                  htmlFor="nombre"
                  className="font-semibold"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Amoxicilina 500mg"
                  className="
                    w-full
                    mt-2

                    border
                    border-gray-300

                    rounded-2xl

                    p-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#2E7D32]
                    focus:ring-4
                    focus:ring-[#2E7D32]/10
                  "
                />

              </div>

              <div>

                <label
                  htmlFor="medico"
                  className="font-semibold"
                >
                  Médico
                </label>

                <input
                  id="medico"
                  name="medico"
                  type="text"
                  value={formData.medico}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Dr. Alejandro Rossi"
                  className="
                    w-full
                    mt-2

                    border
                    border-gray-300

                    rounded-2xl

                    p-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#2E7D32]
                    focus:ring-4
                    focus:ring-[#2E7D32]/10
                  "
                />

              </div>

              <div>

                <label
                  htmlFor="centro"
                  className="font-semibold"
                >
                  Centro médico
                </label>

                <input
                  id="centro"
                  name="centro"
                  type="text"
                  value={formData.centro}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Clínica del Sol"
                  className="
                    w-full
                    mt-2

                    border
                    border-gray-300

                    rounded-2xl

                    p-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#2E7D32]
                    focus:ring-4
                    focus:ring-[#2E7D32]/10
                  "
                />

              </div>

              <div>

                <label
                  htmlFor="fecha"
                  className="font-semibold"
                >
                  Fecha
                </label>

                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    mt-2

                    border
                    border-gray-300

                    rounded-2xl

                    p-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#2E7D32]
                    focus:ring-4
                    focus:ring-[#2E7D32]/10
                  "
                />

              </div>

              <div>

                <label
                  htmlFor="tipo"
                  className="font-semibold"
                >
                  Tipo
                </label>

                <select
                  id="tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  className="
                    w-full
                    mt-2

                    border
                    border-gray-300

                    rounded-2xl

                    p-4

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#2E7D32]
                    focus:ring-4
                    focus:ring-[#2E7D32]/10
                  "
                >
                  <option value="medicamento">
                    Medicamento
                  </option>

                  <option value="estudio">
                    Estudio
                  </option>

                </select>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    flex-1

                    border
                    border-gray-300

                    py-4
                    rounded-2xl

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="
                    flex-1

                    bg-[#2E7D32]
                    text-white

                    py-4
                    rounded-2xl

                    font-bold

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  {editingId
                    ? "Guardar cambios"
                    : "Guardar receta"}
                </button>

              </div>

            </form>

          </div>
        </div>
      )}      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pageFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(.97) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
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
        }

        .receta-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0,0,0,.06);
        }

        .receta-icon {
          transition:
            transform .25s ease;
        }

        .receta-card:hover .receta-icon {
          transform: scale(1.08);
        }

        .qr-button,
        .qr-mobile {
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

       .qr-button:hover,
.qr-mobile:hover {
  transform: scale(1.02);
}
        .menu-button {
          transition:
            transform .2s ease,
            background-color .2s ease;
        }

        .menu-button:hover {
          background: #f5f5f5;
          transform: scale(1.05);
        }

        .filter-button {
          transition:
            transform .2s ease,
            opacity .2s ease;
        }

        .filter-button:hover {
          transform: translateY(-1px);
          opacity: .85;
        }

        .tab-button {
          transition:
            transform .2s ease,
            box-shadow .2s ease;
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




