const API_URL = "https://localhost:7243/api";

export interface MedicamentoApi {
    idMedicamento: number;
    nombre: string;
    descripcion: string;
    presentacion: string;
    idLaboratorio: number;
}

export async function obtenerMedicamentos(): Promise<MedicamentoApi[]> {
    const response = await fetch(`${API_URL}/Medicamentos`);

    if (!response.ok) {
        throw new Error("Error al obtener medicamentos");
    }

    return response.json();
}

export async function crearMedicamento(medicamento: {
    nombre: string;
    descripcion: string;
    presentacion: string;
    idLaboratorio: number;
}): Promise<MedicamentoApi> {
    const response = await fetch(`${API_URL}/Medicamentos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(medicamento),
    });

    if (!response.ok) {
        throw new Error("Error al guardar medicamento");
    }

    return response.json();
}