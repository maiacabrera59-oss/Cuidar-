export function Home() {
  return (
    <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-4 py-6">
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2E7D32]">
              Cuidar+
            </h1>

            <p className="text-sm text-[#747970] mt-1">
              Gestión inteligente de medicamentos
            </p>
          </div>

          <button className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xl hover:scale-105 transition">
            🔍
          </button>
        </header>

        {/* BIENVENIDA */}
        <section className="mt-10">
          <p className="text-[#747970] text-base md:text-lg">
            Hola, Mateo
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            Todo bajo control
          </h2>
        </section>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6 mt-10">

          {/* CARD PRINCIPAL */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">

            <span className="bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold">
              PRÓXIMA DOSIS
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 text-[#212121]">
              Atorvastatina
            </h1>

            <p className="text-[#747970] mt-3 text-lg">
              40mg • Después de la cena
            </p>

            <div className="mt-12">
              <p className="text-[#747970] text-lg">
                Programada para las
              </p>

              <h2 className="text-5xl md:text-7xl font-bold text-[#2E7D32] mt-2">
                21:00
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">

              <button className="flex-1 bg-[#2E7D32] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition">
                Confirmar dosis
              </button>

              <button className="flex-1 border border-[#747970] text-[#212121] py-4 rounded-2xl hover:bg-gray-100 transition">
                Omitir
              </button>
            </div>
          </div>

          {/* PANEL LATERAL */}
          <div className="flex flex-col gap-6">

            {/* PROGRESO */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <p className="text-[#747970]">
                Progreso del día
              </p>

              <h3 className="text-4xl font-bold mt-3 text-[#2E7D32]">
                4/6
              </h3>

              <p className="text-[#747970] mt-2">
                dosis completadas
              </p>
            </div>

            {/* ALERTAS */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <p className="text-[#747970]">
                Próximo recordatorio
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Vitamina D
              </h3>

              <p className="text-[#747970] mt-2">
                08:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* ACCESOS RÁPIDOS */}
        <section className="mt-14">

          <div className="flex justify-between items-center">
            <h3 className="text-2xl md:text-3xl font-bold">
              Accesos rápidos
            </h3>

            <button className="text-[#2E7D32] font-semibold hover:underline">
              Ver todo
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

            {/* CARD */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#2E7D32] hover:-translate-y-1 transition cursor-pointer">
              <div className="text-3xl mb-4">💊</div>

              <p className="font-bold text-lg text-[#212121]">
                Medicamentos
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Ver tratamientos activos
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#2E7D32] hover:-translate-y-1 transition cursor-pointer">
              <div className="text-3xl mb-4">📄</div>

              <p className="font-bold text-lg text-[#212121]">
                Recetas
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Recetario digital
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#2E7D32] hover:-translate-y-1 transition cursor-pointer">
              <div className="text-3xl mb-4">⏰</div>

              <p className="font-bold text-lg text-[#212121]">
                Recordatorios
              </p>

              <p className="text-sm text-[#747970] mt-2">
                Gestionar alertas y horarios
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}