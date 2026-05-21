import { useState } from "react";


const estadosAnimo = [
    {
        id: "muy-bien",
        texto: "Muy bien",
        icono: "😄",
        color: "bg-[#E8F5E9] border-[#2E7D32] text-[#2E7D32]",
    },
    {
        id: "bien",
        texto: "Bien",
        icono: "🙂",
        color: "bg-[#F1F8E9] border-[#7CB342] text-[#558B2F]",
    },
    {
        id: "regular",
        texto: "Regular",
        icono: "😐",
        color: "bg-[#FFF8E1] border-[#F9A825] text-[#F57F17]",
    },
    {
        id: "mal",
        texto: "Mal",
        icono: "🙁",
        color: "bg-[#FFEBEE] border-[#E57373] text-[#C62828]",
    },
    {
        id: "muy-mal",
        texto: "Muy mal",
        icono: "😞",
        color: "bg-[#FCE4EC] border-[#AD1457] text-[#AD1457]",
    },
];

export function HistorialAnimo() {
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
    const [observacion, setObservacion] = useState("");

    const guardarEstadoAnimo = () => {
        if (!estadoSeleccionado) {
            alert("Por favor, seleccioná cómo te sentís hoy.");
            return;
        }

        const registro = {
            estado: estadoSeleccionado,
            observacion,
            fecha: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
        };

        console.log("Registro de estado de ánimo:", registro);

        alert("Estado de ánimo guardado correctamente.");

        setEstadoSeleccionado("");
        setObservacion("");
    };

    return (
        <section className="min-h-screen bg-[#F5F5F5] text-[#212121] px-3 md:px-4 py-4 md:py-6">
            <div className="max-w-5xl mx-auto">

                {/* ENCABEZADO */}
                <section className="mt-4 md:mt-10">
                    <p className="text-sm md:text-lg text-[#747970]">
                        Registro diario
                    </p>

                    <h1 className="text-3xl md:text-6xl font-bold leading-tight mt-2">
                        Estado de ánimo
                    </h1>
                </section>

                {/* CARD PRINCIPAL */}
                <div className="bg-white rounded-3xl p-5 md:p-8 border border-gray-200 shadow-sm mt-6 md:mt-10">

                    <span className="bg-[#2E7D32]/10 text-[#2E7D32] px-3 py-2 rounded-full text-xs md:text-sm font-semibold">
                        BIENESTAR GENERAL
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-6 text-[#212121]">
                        ¿Cómo te sentís hoy?
                    </h2>

                    <p className="text-[#747970] mt-3 text-base md:text-lg">
                        Seleccioná una opción para registrar cómo te encontrás durante tu tratamiento.
                    </p>

                    {/* OPCIONES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                        {estadosAnimo.map((estado) => (
                            <button
                                key={estado.id}
                                onClick={() => setEstadoSeleccionado(estado.texto)}
                                className={`rounded-3xl border-2 p-5 md:p-6 text-center transition hover:-translate-y-1 hover:shadow-md ${estadoSeleccionado === estado.texto
                                    ? estado.color
                                    : "bg-white border-gray-200 text-[#212121]"
                                    }`}
                            >
                                <div className="text-5xl md:text-6xl mb-3">
                                    {estado.icono}
                                </div>

                                <p className="text-lg md:text-xl font-bold">
                                    {estado.texto}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* OBSERVACIÓN */}
                    <div className="mt-8">
                        <label className="block text-lg md:text-xl font-bold mb-3">
                            Observación opcional
                        </label>

                        <textarea
                            value={observacion}
                            onChange={(e) => setObservacion(e.target.value)}
                            placeholder="Ejemplo: Dormí mal, me siento cansado, hoy me sentí mejor..."
                            className="w-full min-h-36 rounded-3xl border border-gray-300 p-4 md:p-5 text-base md:text-lg outline-none focus:border-[#2E7D32] resize-none"
                        />
                    </div>

                    {/* BOTÓN GUARDAR */}
                    <button
                        onClick={guardarEstadoAnimo}
                        className="w-full mt-8 bg-[#2E7D32] text-white font-bold text-lg md:text-xl py-4 rounded-2xl hover:opacity-90 transition"
                    >
                        Guardar estado de ánimo
                    </button>
                </div>

                {/* TEXTO INFORMATIVO */}
                <div className="bg-white rounded-3xl p-5 md:p-6 border border-gray-200 shadow-sm mt-6 mb-8">
                    <h3 className="text-xl md:text-2xl font-bold">
                        ¿Para qué sirve este registro?
                    </h3>

                    <p className="text-[#747970] mt-3 text-base md:text-lg">
                        Este registro ayuda a acompañar tu tratamiento, permitiendo observar cómo te sentís día a día junto con tus tomas de medicación.
                    </p>
                </div>

            </div>
        </section>
    );
}