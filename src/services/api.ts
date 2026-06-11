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

export interface UsuarioApi {
  idUsuario: number;
  nombre: string;
  apellido: string;
  ciudad?: string;
  fechaNacimiento?: string;
  dni?: string;
  foto?: string;
  fechaAlta?: string;
  fechaBaja?: string;
  mail?: string;
  idGrupoSanguineo?: number;
  idUsuarioTipo?: number;
  idAlergia?: number;
  idCondicion?: number;
  idSeguroMedico?: number;
  idUsuarioPadre?: number;
  idParentezco?: string;
}

export interface UsuarioCrear {
  nombre: string;
  apellido: string;
  ciudad?: string;
  fechaNacimiento?: string;
  dni?: string;
  foto?: string;
  fechaAlta?: string;
  fechaBaja?: string;
  mail?: string;
  idGrupoSanguineo?: number;
  idUsuarioTipo?: number;
  idAlergia?: number;
  idCondicion?: number;
  idSeguroMedico?: number;
  idUsuarioPadre?: number;
  idParentezco?: string;
}

// =========================
// OBTENER TODOS LOS USUARIOS
// =========================

export async function obtenerUsuarios(): Promise<UsuarioApi[]> {
  const response = await fetch(`${API_URL}/Usuario`);

  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  return response.json();
}

// =========================
// BUSCAR USUARIO POR MAIL
// =========================

export async function buscarUsuarioPorMail(
  mail: string
): Promise<UsuarioApi | null> {
  const usuarios = await obtenerUsuarios();

  const usuario = usuarios.find(
    (u) => u.mail?.toLowerCase() === mail.toLowerCase()
  );

  return usuario ?? null;
}

export async function crearUsuario(
  usuario: UsuarioCrear
): Promise<UsuarioApi> {
  const response = await fetch(`${API_URL}/Usuario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `Error ${response.status}: ${error}`
    );
  }

  return response.json();
}


export async function obtenerUsuarioPorId(
  id: number
): Promise<UsuarioApi> {
  const response = await fetch(
    `${API_URL}/Usuario/${id}`
  );

  if (!response.ok) {
    throw new Error("Usuario no encontrado");
  }

  return response.json();
}


export async function actualizarUsuario(
  id: number,
  usuario: UsuarioCrear
): Promise<void> {
  const response = await fetch(
    `${API_URL}/Usuario/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    }
  );

  if (!response.ok) {
    throw new Error("Error al actualizar usuario");
  }
}

// =========================
// ELIMINAR USUARIO
// =========================

export async function eliminarUsuario(
  id: number
): Promise<void> {
  const response = await fetch(
    `${API_URL}/Usuario/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Error al eliminar usuario");
  }
}