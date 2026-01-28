export interface PatientRecord {
  id: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  identidad: string;
  nacimiento: string;
  sexo: "M" | "F";
}

export interface PatientDetailData {
  id: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  identidad: string;
  nacimiento: string;
  sexo: "M" | "F";
  estadoCivil: string;
  colorPiel: string;
  nacion: string;
  hc: string;
  tipoHc: string;
  nivelEducacional: string;
  tipoPaciente: string;
  aboRh: string;
  grupoDispensarial: string;
  // Datos adicionales para PatientGeneralData
  edad?: string;
  provincia?: string;
  municipio?: string;
  direccion?: string;
  telefonoFijo?: string;
  telefonoCelular?: string;
  correoElectronico?: string;
}

const patientsData: PatientRecord[] = [
  {
    id: "87041225482",
    nombre: "Persona",
    primerApellido: "NuevaAPS",
    segundoApellido: "AntecedentesCDADos",
    identidad: "87041225482",
    nacimiento: "12/04/1987",
    sexo: "M",
  },
  {
    id: "25071761812",
    nombre: "Eve",
    primerApellido: "Adm segundo",
    segundoApellido: "-",
    identidad: "25071761812",
    nacimiento: "17/07/2025",
    sexo: "F",
  },
  {
    id: "25071261812",
    nombre: "Eve",
    primerApellido: "Adm",
    segundoApellido: "-",
    identidad: "25071261812",
    nacimiento: "12/07/2025",
    sexo: "F",
  },
  {
    id: "87011025548",
    nombre: "Persona",
    primerApellido: "NuevaAPS",
    segundoApellido: "AntecedentesCDAUNO",
    identidad: "87011025548",
    nacimiento: "10/01/1987",
    sexo: "M",
  },
  {
    id: "87112025526",
    nombre: "Persona",
    primerApellido: "NuevaAPS",
    segundoApellido: "AntecedentesCDA",
    identidad: "87112025526",
    nacimiento: "20/11/1987",
    sexo: "M",
  },
];

// Datos de detalle específicos - en producción vendrían de la API
const patientDetailsMap: Record<string, Partial<PatientDetailData>> = {
  "87041225482": {
    estadoCivil: "Soltero",
    colorPiel: "Blanco",
    nacion: "Cubana",
    tipoHc: "Normal",
    nivelEducacional: "Universitario",
    tipoPaciente: "Ambulatorio",
    aboRh: "O+",
    grupoDispensarial: "I",
  },
  "25071761812": {
    estadoCivil: "Casada",
    colorPiel: "Mestizo",
    nacion: "Cubana",
    tipoHc: "Normal",
    nivelEducacional: "Técnico Medio",
    tipoPaciente: "Ambulatorio",
    aboRh: "A+",
    grupoDispensarial: "II",
  },
  "25071261812": {
    estadoCivil: "Soltera",
    colorPiel: "Blanco",
    nacion: "Cubana",
    tipoHc: "Normal",
    nivelEducacional: "Preuniversitario",
    tipoPaciente: "Ambulatorio",
    aboRh: "B+",
    grupoDispensarial: "III",
  },
  "87011025548": {
    estadoCivil: "Casado",
    colorPiel: "Mestizo",
    nacion: "Cubana",
    tipoHc: "Normal",
    nivelEducacional: "Universitario",
    tipoPaciente: "Ambulatorio",
    aboRh: "AB+",
    grupoDispensarial: "I",
  },
  "87112025526": {
    estadoCivil: "Soltero",
    colorPiel: "Negro",
    nacion: "Cubana",
    tipoHc: "Normal",
    nivelEducacional: "Técnico Medio",
    tipoPaciente: "Ambulatorio",
    aboRh: "O-",
    grupoDispensarial: "II",
  },
};

// Función auxiliar para generar datos de detalle por defecto
function generateDefaultDetail(patient: PatientRecord): PatientDetailData {
  const specificData = patientDetailsMap[patient.id] || {};
  
  // Valores por defecto basados en el paciente
  const defaultEstadoCivil = patient.sexo === "M" ? "Soltero" : "Soltera";
  const defaultColorPiel = "Mestizo";
  const defaultNacion = "Cubana";
  const defaultTipoHc = "Normal";
  const defaultNivelEducacional = "Técnico Medio";
  const defaultTipoPaciente = "Ambulatorio";
  const defaultAboRh = "O+";
  const defaultGrupoDispensarial = "II";

  return {
    id: patient.id,
    nombre: patient.nombre,
    primerApellido: patient.primerApellido,
    segundoApellido: patient.segundoApellido,
    identidad: patient.identidad,
    nacimiento: patient.nacimiento,
    sexo: patient.sexo,
    hc: patient.id,
    estadoCivil: specificData.estadoCivil || defaultEstadoCivil,
    colorPiel: specificData.colorPiel || defaultColorPiel,
    nacion: specificData.nacion || defaultNacion,
    tipoHc: specificData.tipoHc || defaultTipoHc,
    nivelEducacional: specificData.nivelEducacional || defaultNivelEducacional,
    tipoPaciente: specificData.tipoPaciente || defaultTipoPaciente,
    aboRh: specificData.aboRh || defaultAboRh,
    grupoDispensarial: specificData.grupoDispensarial || defaultGrupoDispensarial,
    // Datos adicionales
    edad: "18 Años",
    provincia: "Artemisa",
    municipio: "Artemisa",
    direccion: "Calle/Ave: 34, Entre calles: 1 y 2",
    telefonoFijo: "34556",
    telefonoCelular: "-",
    correoElectronico: "-",
  };
}

export const patientService = {
  async list(): Promise<PatientRecord[]> {
    return Promise.resolve(patientsData);
  },
  async getDetail(id: string): Promise<PatientDetailData | null> {
    // Buscar el paciente en la lista
    const patient = patientsData.find((p) => p.id === id);
    if (!patient) {
      return null;
    }
    
    // Generar datos de detalle (combinando datos específicos con valores por defecto)
    const detailData = generateDefaultDetail(patient);
    return Promise.resolve(detailData);
  },
};

export type PatientService = typeof patientService;

