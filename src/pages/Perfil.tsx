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
          animate-[pageAppear_.35s_ease-out]
        "
      >
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between" />

          {/* MOBILE */}
          <div className="lg:hidden">

            <div className="mt-10 text-center">

              <img
                src={paciente.foto}
                alt=""
                className="
                  profile-avatar
                  w-32
                  h-32
                  rounded-[28px]
                  mx-auto
                  object-cover
                  border-4
                  border-[#2E7D32]/10
                  shadow-sm
                "
              />

              <div className="mt-4 flex justify-center">
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
                  <span
                    className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-[#2E7D32]
                    "
                  />
                  Activo
                </div>
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

            <div className="space-y-5 mt-10">

              <div
                className="
                  profile-card
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm
                "
              >
                <p className="text-[#747970] text-sm font-medium">
                  Grupo sanguíneo
                </p>

                <h3
                  className="
                    text-6xl
                    font-bold
                    tracking-tight
                    mt-4
                    text-[#2E7D32]
                    animate-[bloodTypeAppear_.4s_ease-out]
                  "
                >
                  {paciente.sangre}
                </h3>

                <p className="text-[#747970] mt-3">
                  Factor {paciente.rh}
                </p>
              </div>              {/* EMERGENCIA */}
              <div
                className="
                  profile-card
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm
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
                    "
                  >
                    SMS
                  </button>

                </div>
              </div>

              {/* DOCTOR */}
              <div
                className="
                  profile-card
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm
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

              {/* DIRECCIÓN */}
              <div
                className="
                  profile-card
                  bg-white
                  rounded-[30px]
                  p-6
                  border
                  border-gray-200
                  shadow-sm
                "
              >
                <p className="text-[#747970] text-sm font-medium">
                  Dirección particular
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    mt-4
                    leading-snug
                  "
                >
                  {paciente.direccion}
                </h3>

                <button
                  className="
                    mt-5
                    text-[#2E7D32]
                    font-semibold
                  "
                >
                  Ver en el mapa
                </button>
              </div>

              {/* BOTONES */}
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
                    hover:bg-gray-100
                    rounded-2xl
                    py-4
                    font-semibold
                    shadow-sm
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
            "
          >

            {/* PERFIL IZQUIERDA */}
            <div
              className="
                profile-card
                bg-white
                rounded-[32px]
                border
                border-gray-200
                shadow-sm
                p-8
                h-fit
              "
            >

              <img
                src={paciente.foto}
                alt=""
                className="
                  profile-avatar
                  w-44
                  h-44
                  rounded-[36px]
                  mx-auto
                  object-cover
                  border-4
                  border-[#2E7D32]/10
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
                  <span
                    className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-[#2E7D32]
                    "
                  />
                  Activo
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
              </div>              <button
                className="
                  w-full
                  mt-10
                  bg-[#2E7D32]
                  text-white
                  rounded-2xl
                  py-4
                  font-bold
                  text-lg
                "
              >
                Editar Perfil
              </button>

              <button
                onClick={cerrarSesion}
                className="
                  w-full
                  mt-3
                  bg-white
                  border
                  border-gray-200
                  hover:bg-gray-100
                  rounded-2xl
                  py-4
                  font-semibold
                  shadow-sm
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
                  profile-card
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm
                "
              >
                <p className="text-[#747970] text-base">
                  Grupo sanguíneo
                </p>

                <h3
                  className="
                    text-8xl
                    font-bold
                    tracking-tight
                    mt-6
                    text-[#2E7D32]
                    animate-[bloodTypeAppear_.4s_ease-out]
                  "
                >
                  {paciente.sangre}
                </h3>

                <p className="text-[#747970] mt-4 text-lg">
                  Factor {paciente.rh}
                </p>
              </div>

              {/* EMERGENCIA */}
              <div
                className="
                  profile-card
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm
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
                    "
                  >
                    SMS
                  </button>

                </div>
              </div>

              {/* DOCTOR */}
              <div
                className="
                  profile-card
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm
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

              {/* DIRECCIÓN */}
              <div
                className="
                  profile-card
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-200
                  shadow-sm
                "
              >
                <p className="text-[#747970] text-base">
                  Dirección particular
                </p>

                <h3
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    mt-6
                    leading-snug
                  "
                >
                  {paciente.direccion}
                </h3>

                <button
                  className="
                    mt-6
                    text-[#2E7D32]
                    font-semibold
                  "
                >
                  Ver en el mapa
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>      <style>{`
        @keyframes pageAppear {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bloodTypeAppear {
          from {
            opacity: 0;
            transform: scale(.96);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .profile-card {
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .profile-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,.04);
        }

        .profile-avatar {
          transition: transform .3s ease;
        }

        .profile-avatar:hover {
          transform: scale(1.02);
        }

        button {
          transition:
            transform .2s ease,
            opacity .2s ease,
            background-color .2s ease;
        }

        button:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}