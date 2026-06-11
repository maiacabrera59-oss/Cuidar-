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

  // Objeto paciente tal cual lo tenías en tu código
  const paciente = {
    nombre: "Ricardo Gómez",
    edad: 74,
    sangre: "A+",
    rh: "RH Positivo",
    doctor: "Dr. Martínez",
    direccion: "Calle Mayor, 14, Madrid",
    emergencia: "112-345-678",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  };

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
              <h3 className="text-2xl font-bold">{usuario.idGrupoSanguineo}</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500">Tipo usuario (ID)</p>
              <h3 className="text-2xl font-bold">{usuario.idUsuarioTipo}</h3>
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

      {/* ================= SECCIÓN PACIENTE (DISEÑO RESPONSIVE) ================= */}
      <section className="bg-[#F5F5F5] text-[#212121] px-4 py-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between"></div>

          {/* ================= MOBILE ================= */}
          <div className="lg:hidden">
            {/* PERFIL */}
            <div className="mt-10 text-center">
              <img
                src={paciente.foto}
                alt=""
                className="w-32 h-32 rounded-[28px] mx-auto object-cover border-4 border-[#2E7D32]/10 shadow-sm"
              />

              {/* ESTADO */}
              <div className="mt-4 inline-flex items-center gap-2 bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold">
                ● Activo
              </div>

              <h2 className="text-4xl font-bold tracking-tight mt-5">
                {paciente.nombre}
              </h2>

              <div className="flex justify-center gap-3 mt-4 flex-wrap">
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm shadow-sm">
                  {paciente.edad} años
                </span>
                <span className="bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-medium">
                  Paciente registrado
                </span>
              </div>
            </div>

            {/* CARDS MOBILE */}
            <div className="space-y-5 mt-10">
              {/* SANGRE */}
              <div className="bg-white rounded-[30px] p-6 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-sm font-medium">Grupo sanguíneo</p>
                <h3 className="text-6xl font-bold tracking-tight mt-4 text-[#2E7D32]">
                  {paciente.sangre}
                </h3>
                <p className="text-[#747970] mt-3">Factor {paciente.rh}</p>
              </div>

              {/* EMERGENCIA */}
              <div className="bg-white rounded-[30px] p-6 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-sm font-medium">Contacto de emergencia</p>
                <h3 className="text-3xl font-bold tracking-tight mt-3">{paciente.emergencia}</h3>
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-[#2E7D32] text-white rounded-2xl py-3 font-semibold">Llamar</button>
                  <button className="flex-1 bg-[#F5F5F5] border border-gray-200 rounded-2xl py-3 font-semibold">SMS</button>
                </div>
              </div>

              {/* DOCTOR */}
              <div className="bg-white rounded-[30px] p-6 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-sm font-medium">Médico de cabecera</p>
                <h3 className="text-2xl font-bold mt-4 tracking-tight">{paciente.doctor}</h3>
                <p className="text-[#747970] mt-2">Medicina Interna</p>
              </div>

              {/* DIRECCION */}
              <div className="bg-white rounded-[30px] p-6 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-sm font-medium">Dirección particular</p>
                <h3 className="text-2xl font-bold tracking-tight mt-4 leading-snug">{paciente.direccion}</h3>
                <button className="mt-5 text-[#2E7D32] font-semibold">Ver en el mapa</button>
              </div>

              {/* BOTONES MOBILE */}
              <div className="space-y-4 pt-2">
                <button className="w-full bg-[#2E7D32] hover:opacity-90 transition text-white rounded-2xl py-4 font-bold text-lg shadow-sm">
                  Editar Perfil
                </button>
                <button
                  onClick={cerrarSesion}
                  className="w-full bg-white border border-gray-200 hover:bg-gray-100 transition rounded-2xl py-4 font-semibold shadow-sm"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP / TABLET ================= */}
          <div className="hidden lg:grid lg:grid-cols-[380px_1fr] gap-6 mt-10">
            {/* PERFIL IZQUIERDA */}
            <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-8 h-fit">
              <img
                src={paciente.foto}
                alt=""
                className="w-44 h-44 rounded-[36px] mx-auto object-cover border-4 border-[#2E7D32]/10"
              />

              {/* ESTADO CENTRADO */}
              <div className="flex justify-center mt-5">
                <div className="inline-flex items-center gap-2 bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold">
                  ● Activo
                </div>
              </div>

              <div className="text-center mt-6">
                <h2 className="text-5xl font-bold tracking-tight">{paciente.nombre}</h2>
                <div className="flex justify-center gap-3 mt-5 flex-wrap">
                  <span className="bg-[#F5F5F5] border border-gray-200 px-4 py-2 rounded-full text-sm">
                    {paciente.edad} años
                  </span>
                  <span className="bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-medium">
                    Paciente registrado
                  </span>
                </div>
              </div>

              <button className="w-full mt-10 bg-[#2E7D32] hover:opacity-90 transition text-white rounded-2xl py-4 font-bold text-lg">
                Editar Perfil
              </button>

              <button
                onClick={cerrarSesion}
                className="w-full bg-white border border-gray-200 hover:bg-gray-100 transition rounded-2xl py-4 font-semibold shadow-sm mt-4"
              >
                Cerrar sesión
              </button>
            </div>

            {/* GRID DERECHA */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* SANGRE */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-base">Grupo sanguíneo</p>
                <h3 className="text-8xl font-bold tracking-tight mt-6 text-[#2E7D32]">
                  {paciente.sangre}
                </h3>
                <p className="text-[#747970] mt-4 text-lg">Factor {paciente.rh}</p>
              </div>

              {/* EMERGENCIA */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-base">Contacto de emergencia</p>
                <h3 className="text-5xl font-bold tracking-tight mt-6">{paciente.emergencia}</h3>
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 bg-[#2E7D32] text-white rounded-2xl py-4 font-semibold">Llamar</button>
                  <button className="flex-1 bg-[#F5F5F5] border border-gray-200 rounded-2xl py-4 font-semibold">SMS</button>
                </div>
              </div>

              {/* DOCTOR */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-base">Médico de cabecera</p>
                <h3 className="text-4xl font-bold mt-6 tracking-tight">{paciente.doctor}</h3>
                <p className="text-[#747970] mt-3 text-lg">Medicina Interna</p>
                <div className="mt-6 inline-flex bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-medium">
                  Disponible hoy
                </div>
              </div>

              {/* DIRECCION */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm">
                <p className="text-[#747970] text-base">Dirección particular</p>
                <h3 className="text-3xl font-bold tracking-tight mt-6 leading-snug">{paciente.direccion}</h3>
                <button className="mt-6 text-[#2E7D32] font-semibold hover:underline">Ver en el mapa</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}