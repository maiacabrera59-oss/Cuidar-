import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
} from "lucide-react";

export function Login() {

  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    navigate("/app");
  }

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center p-4">

      {/* CONTENEDOR */}
      <div className="w-full max-w-[380px]">

        {/* CARD */}
        <div className="bg-[#ECECEC] rounded-[32px] px-5 py-7 shadow-md">

          {/* TITULO */}
          <div className="text-center mb-7">

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-3">
              Bienvenido
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Ingresá para gestionar tus medicamentos
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4"
          >

            {/* EMAIL */}
            <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-3">

              <Mail
                className="text-gray-500 mr-3"
                size={20}
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full outline-none text-sm sm:text-base bg-transparent"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-3">

              <Lock
                className="text-gray-500 mr-3"
                size={20}
              />

              <input
                type="password"
                placeholder="Contraseña"
                className="w-full outline-none text-sm sm:text-base bg-transparent"
              />

              <Eye
                className="text-gray-500 cursor-pointer"
                size={20}
              />
            </div>

            {/* LOGIN */}
            <button
              type="submit"
              className="w-full bg-[#067A34] hover:bg-green-900 transition text-white rounded-2xl py-3.5 font-bold text-lg mt-1"
            >
              Ingresar →
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-1">

              <div className="flex-1 h-[1px] bg-gray-300"></div>

              <span className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                o continuar con
              </span>

              <div className="flex-1 h-[1px] bg-gray-300"></div>

            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="w-full bg-white border border-gray-300 rounded-2xl py-3 px-4 flex items-center justify-center gap-3 text-sm sm:text-base font-semibold hover:bg-gray-50 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-5 h-5"
              />

              Continuar con Google
            </button>

            {/* FACEBOOK */}
            <button
              type="button"
              className="w-full bg-white border border-gray-300 rounded-2xl py-3 px-4 flex items-center justify-center gap-3 text-sm sm:text-base font-semibold hover:bg-gray-50 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="w-5 h-5"
              />

              Continuar con Facebook
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-1">

              <div className="flex-1 h-[1px] bg-gray-300"></div>

              <span className="text-gray-500 text-xs">
                o
              </span>

              <div className="flex-1 h-[1px] bg-gray-300"></div>

            </div>

            {/* REGISTRO */}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="w-full border border-gray-400 rounded-2xl py-3 font-semibold text-gray-800 bg-transparent text-base hover:bg-gray-100 transition"
            >
              Crear cuenta
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}