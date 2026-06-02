import { useNavigate } from "react-router-dom";

export function Perfil() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const paciente = {
    nombre: "Ricardo Gómez",
    edad: 74,
    sangre: "A+",
    rh: "RH Positivo",
    doctor: "Dr. Martínez",
    direccion: "Calle Mayor, 14, Madrid",
    emergencia: "112-345-678",
    foto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  };

  return (
    <>
      <section
        className="
          min-h-screen
          bg-[#F5F5F5]
          text-[#212121]
          px-4
          py-6
          animate-[fadeIn_.4s_ease-out]
        "
      >
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between"></div>

          {/* MOBILE */}
          <div className="lg:hidden">

            {/* PERFIL */}
            <div
              className="
                mt-10
                text-center
                animate-[slideUp_.5s_ease-out]
              "
            >
              <img
                src={paciente.foto}
                alt=""
                className="
                  w-32
                  h-32
                  rounded-[28px]
                  mx-auto
                  object-cover
                  border-4
                  border-[#2E7D32]/10
                  shadow-sm

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-md

                  animate-[profileEnter_.6s_ease-out]
                "
              />

              <div
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  bg-[#2E7D32]/10
                  text-[#2E7D32]
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                ● Activo
              </div>

              <h2 className="text-4xl font-bold tracking-tight mt-5">
                {paciente.nombre}
              </h2>

              <div className="flex justify-center gap-3 mt-4 flex-wrap">

                <span
                  className="
                    bg-white
                    border
                    border-gray-200
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    shadow-sm
                  "
                >
                  {paciente.edad} años
                </span>

                <span
                  className="
                    bg-[#2E7D32]/10
                    text-[#2E7D32]
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  Paciente registrado
                </span>

              </div>
            </div>

            {/* CARDS MOBILE */}
            <div className="space-y-5 mt-10">

              {/* SANGRE */}
              <div
                className="
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-sm font-medium">
                  Grupo sanguíneo
                </p>

                <h3 className="text-6xl font-bold tracking-tight mt-4 text-[#2E7D32]">
                  {paciente.sangre}
                </h3>

                <p className="text-[#747970] mt-3">
                  Factor {paciente.rh}
                </p>
              </div>

              {/* EMERGENCIA */}
              <div
                className="
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-sm font-medium">
                  Contacto de emergencia
                </p>

                <h3 className="text-3xl font-bold tracking-tight mt-3">
                  {paciente.emergencia}
                </h3>

                <div className="flex gap-3 mt-6">

                  <button
                    className="
                      flex-1
                      bg-[#2E7D32]
                      text-white
                      rounded-2xl
                      py-3
                      font-semibold

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-lg

                      active:scale-[0.98]
                    "
                  >
                    Llamar
                  </button>

                  <button
                    className="
                      flex-1
                      bg-[#F5F5F5]
                      border
                      border-gray-200
                      rounded-2xl
                      py-3
                      font-semibold

                      transition-all
                      duration-300

                      hover:bg-gray-100
                      hover:-translate-y-1

                      active:scale-[0.98]
                    "
                  >
                    SMS
                  </button>

                </div>
              </div>

              {/* DOCTOR */}
              <div
                className="
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-sm font-medium">
                  Médico de cabecera
                </p>

                <h3 className="text-2xl font-bold mt-4 tracking-tight">
                  {paciente.doctor}
                </h3>

                <p className="text-[#747970] mt-2">
                  Medicina Interna
                </p>
              </div>

              {/* DIRECCION */}
              <div
                className="
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-sm font-medium">
                  Dirección particular
                </p>

                <h3 className="text-2xl font-bold tracking-tight mt-4 leading-snug">
                  {paciente.direccion}
                </h3>

                <button
                  className="
                    mt-5
                    text-[#2E7D32]
                    font-semibold
                    hover:underline
                  "
                >
                  Ver en el mapa
                </button>
              </div>              {/* BOTONES MOBILE */}
              <div className="space-y-4 pt-2">

                <button
                  className="
                    w-full
                    bg-[#2E7D32]
                    text-white
                    rounded-2xl
                    py-4
                    font-bold
                    text-lg
                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-lg

                    active:scale-[0.98]
                  "
                >
                  Editar Perfil
                </button>

                <button
                  onClick={cerrarSesion}
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    py-4
                    font-semibold
                    shadow-sm

                    transition-all
                    duration-300

                    hover:bg-gray-100
                    hover:-translate-y-1
                    hover:shadow-md

                    active:scale-[0.98]
                  "
                >
                  Cerrar sesión
                </button>

              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div
            className="
              hidden
              lg:grid
              lg:grid-cols-[380px_1fr]
              gap-6
              mt-10

              animate-[slideUp_.6s_ease-out]
            "
          >

            {/* PERFIL IZQUIERDA */}
            <div
              className="
                bg-white
                rounded-[32px]
                border
                border-gray-200
                shadow-sm
                p-8
                h-fit

                transition-all
                duration-300

                hover:shadow-md
              "
            >

              <img
                src={paciente.foto}
                alt=""
                className="
                  w-44
                  h-44
                  rounded-[36px]
                  mx-auto
                  object-cover
                  border-4
                  border-[#2E7D32]/10

                  transition-all
                  duration-300

                  hover:scale-105
                "
              />

              <div className="flex justify-center mt-5">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-[#2E7D32]/10
                    text-[#2E7D32]
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  ● Activo
                </div>
              </div>

              <div className="text-center mt-6">

                <h2 className="text-5xl font-bold tracking-tight">
                  {paciente.nombre}
                </h2>

                <div className="flex justify-center gap-3 mt-5 flex-wrap">

                  <span
                    className="
                      bg-[#F5F5F5]
                      border
                      border-gray-200
                      px-4
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    {paciente.edad} años
                  </span>

                  <span
                    className="
                      bg-[#2E7D32]/10
                      text-[#2E7D32]
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    Paciente registrado
                  </span>

                </div>
              </div>

              <button
                className="
                  w-full
                  mt-10
                  bg-[#2E7D32]
                  text-white
                  rounded-2xl
                  py-4
                  font-bold
                  text-lg

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg

                  active:scale-[0.98]
                "
              >
                Editar Perfil
              </button>

              <button
                onClick={cerrarSesion}
                className="
                  w-full
                  mt-4
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  py-4
                  font-semibold
                  shadow-sm

                  transition-all
                  duration-300

                  hover:bg-gray-100
                  hover:-translate-y-1
                  hover:shadow-md

                  active:scale-[0.98]
                "
              >
                Cerrar sesión
              </button>

            </div>

            {/* GRID DERECHA */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* SANGRE */}
              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-base">
                  Grupo sanguíneo
                </p>

                <h3 className="text-8xl font-bold tracking-tight mt-6 text-[#2E7D32]">
                  {paciente.sangre}
                </h3>

                <p className="text-[#747970] mt-4 text-lg">
                  Factor {paciente.rh}
                </p>
              </div>

              {/* EMERGENCIA */}
              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-base">
                  Contacto de emergencia
                </p>

                <h3 className="text-5xl font-bold tracking-tight mt-6">
                  {paciente.emergencia}
                </h3>

                <div className="flex gap-4 mt-8">

                  <button
                    className="
                      flex-1
                      bg-[#2E7D32]
                      text-white
                      rounded-2xl
                      py-4
                      font-semibold

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-lg

                      active:scale-[0.98]
                    "
                  >
                    Llamar
                  </button>

                  <button
                    className="
                      flex-1
                      bg-[#F5F5F5]
                      border
                      border-gray-200
                      rounded-2xl
                      py-4
                      font-semibold

                      transition-all
                      duration-300

                      hover:bg-gray-100
                      hover:-translate-y-1

                      active:scale-[0.98]
                    "
                  >
                    SMS
                  </button>

                </div>
              </div>

              {/* DOCTOR */}
              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-base">
                  Médico de cabecera
                </p>

                <h3 className="text-4xl font-bold mt-6 tracking-tight">
                  {paciente.doctor}
                </h3>

                <p className="text-[#747970] mt-3 text-lg">
                  Medicina Interna
                </p>

                <div
                  className="
                    mt-6
                    inline-flex
                    bg-[#2E7D32]/10
                    text-[#2E7D32]
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  Disponible hoy
                </div>
              </div>

              {/* DIRECCION */}
              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <p className="text-[#747970] text-base">
                  Dirección particular
                </p>

                <h3 className="text-3xl font-bold tracking-tight mt-6 leading-snug">
                  {paciente.direccion}
                </h3>

                <button
                  className="
                    mt-6
                    text-[#2E7D32]
                    font-semibold
                    hover:underline
                  "
                >
                  Ver en el mapa
                </button>
              </div>

            </div>
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
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes profileEnter {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}