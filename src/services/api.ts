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

export async function obtenerUsuarios(): Promise<UsuarioApi[]> {
  const response = await fetch(`${API_URL}/Usuario`);

  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  return response.json();
}

export async function buscarUsuarioPorMail(mail: string): Promise<UsuarioApi | null> {
  const usuarios = await obtenerUsuarios();

  const usuario = usuarios.find(
    (u) => u.mail?.toLowerCase() === mail.toLowerCase()
  );

  return usuario ?? null;
}