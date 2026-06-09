import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


type Usuario = {
  idUsuario: number;
  nombre: string;
  apellido: string;
  ciudad: string;
  fechaNacimiento: string;
  dni: string;
  foto: string;
  mail: string;
  idGrupoSanguineo: number;
  idUsuarioTipo: number;
};

export function Perfil() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const userId = localStorage.getItem("idUsuario");


  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const res = await axios.get<Usuario>(
          `https://localhost:5001/api/Usuario/${userId}`
        );

        setUsuario(res.data);
      } catch (error) {
        console.error("Error cargando usuario:", error);
      }
    };

    if (userId) cargarUsuario();
  }, [userId]);


  if (!usuario) {
    return (
      <div className="p-6 text-center text-gray-500">
        Cargando perfil...
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-4 py-6">
        <div className="max-w-6xl mx-auto">

          {/* ================= PERFIL ================= */}
          <div className="text-center mt-10">
            <img
              src={usuario.foto}
              alt="perfil"
              className="w-32 h-32 rounded-[28px] mx-auto object-cover border"
            />

            <h2 className="text-4xl font-bold mt-5">
              {usuario.nombre} {usuario.apellido}
            </h2>

            <p className="text-gray-500 mt-2">{usuario.mail}</p>

            <p className="mt-2 text-sm">DNI: {usuario.dni}</p>
          </div>

          {/* ================= INFO ================= */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Ciudad</p>
              <h3 className="text-2xl font-bold">{usuario.ciudad}</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Fecha de nacimiento</p>
              <h3 className="text-2xl font-bold">
                {new Date(usuario.fechaNacimiento).toLocaleDateString()}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Grupo sanguíneo (ID)</p>
              <h3 className="text-2xl font-bold">
                {usuario.idGrupoSanguineo}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Tipo usuario (ID)</p>
              <h3 className="text-2xl font-bold">
                {usuario.idUsuarioTipo}
              </h3>
            </div>

          </div>

          {/* ================= BOTONES ================= */}
          <div className="flex gap-4 justify-center mt-10">

            <button className="bg-[#2E7D32] text-white px-6 py-3 rounded-xl">
              Editar perfil
            </button>

            <button
              onClick={cerrarSesion}
              className="bg-white border px-6 py-3 rounded-xl"
            >
              Cerrar sesión
            </button>

          </div>

        </div>
      </section>
    </>
  );
}