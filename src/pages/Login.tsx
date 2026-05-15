export function Login() {
  return (
    <section className="min-h-screen bg-[#F4F4EE] flex justify-center items-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center">



        {/* Card */}
        <div className="w-full bg-gray-200 border border-gray-200 rounded-[35px] p-10 shadow-sm">

          {/* Título */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Bienvenido
            </h2>

            <p className="text-gray-600 text-lg">
              Ingresá para gestionar tus medicamentos
            </p>
          </div>

          {/* Formulario */}
          <form className="flex flex-col gap-5">

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none focus:border-green-700"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none focus:border-green-700"
            />

            {/* Botón login */}
            <button
              className="w-full bg-green-800 hover:bg-green-900 transition text-white rounded-2xl py-4 font-semibold text-lg mt-2"
            >
              Ingresar →
            </button>

            {/* Botón registro */}
            <button
              type="button"
              className="w-full border border-gray-400 rounded-2xl py-4 font-semibold text-gray-800 bg-transparent"
            >
              Crear cuenta
            </button>
          </form>

          {/* Texto inferior */}
          <p className="text-center text-xs text-gray-500 mt-8 leading-5">
            Al continuar, aceptas nuestras políticas de privacidad y términos
            del servicio médico.
          </p>
        </div>
      </div>
    </section>
  );
}