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
// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface HistorialAnimoApi {
  idHistorialAnimo: number;
  fecha: string;       
  hora: string;        
  observaciones: string | null;
  idUsuario: number | null;
  idEstado: number | null;
}

export interface HistorialAnimoCrearApi {
  fecha: string;
  hora: string;
  observaciones: string | null;
  idUsuario: number | null;
  idEstado: number | null;
}



export const ESTADOS_ANIMO_IDS: Record<string, number> = {
  "Muy bien": 1,
  "Bien":     2,
  "Regular":  3,
  "Mal":      4,
  "Muy mal":  5,
};


const BASE_URL = "https://localhost:7243/api"; 

export async function obtenerHistorialesAnimo(): Promise<HistorialAnimoApi[]> {
  const response = await fetch(`${BASE_URL}/historialesanimo`);

  if (!response.ok) {
    throw new Error("Error al obtener los historiales de ánimo");
  }

  return response.json();
}

export async function crearHistorialAnimo(
  data: HistorialAnimoCrearApi
): Promise<HistorialAnimoApi> {
  const response = await fetch(`${BASE_URL}/historialesanimo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al guardar el estado de ánimo");
  }

  return response.json();
}