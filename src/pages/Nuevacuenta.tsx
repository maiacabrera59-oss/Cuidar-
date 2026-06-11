import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearUsuario } from "../services/api";

export function Nuevacuenta() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    ciudad: "",
    dni: "",
  });

  const [guardando, setGuardando] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setGuardando(true);

      await crearUsuario({
        nombre: formData.nombre,
        apellido: formData.apellido,
        mail: formData.mail,
        ciudad: formData.ciudad,
        dni: formData.dni,
        fechaAlta: new Date().toISOString(),
        idUsuarioTipo: 1,
      });

      alert("Usuario creado correctamente");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al crear el usuario");
    } finally {
      setGuardando(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#F5F5F5] flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-[#2E7D32] text-center mb-6">
          Nueva Cuenta
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="border rounded-2xl p-3"
          />

          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="border rounded-2xl p-3"
          />

          <input
            type="email"
            name="mail"
            placeholder="Correo electrónico"
            value={formData.mail}
            onChange={handleChange}
            required
            className="border rounded-2xl p-3"
          />

          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="border rounded-2xl p-3"
          />

          <input
            type="text"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
            className="border rounded-2xl p-3"
          />

          <button
            type="submit"
            disabled={guardando}
            className="bg-[#2E7D32] text-white rounded-2xl py-3 font-bold"
          >
            {guardando
              ? "Guardando..."
              : "Crear cuenta"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="border rounded-2xl py-3"
          >
            Volver
          </button>
        </form>
      </div>
    </section>
  );
}