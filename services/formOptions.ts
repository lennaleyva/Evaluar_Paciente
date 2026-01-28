// Opciones para los campos select del formulario de edición

export const selectOptions = {
  estadoCivil: ["Soltero/a", "Casado/a", "Viudo/a", "Divorciado/a"],
  colorPiel: ["Blanca", "Negra", "Mestiza"],
  nacion: ["Cuba", "Otro"],
  tipoHc: ["Pediátrica", "Oficial"],
  nivelEducacional: [
    "Primario",
    "Secundario",
    "Preuniversitario",
    "Técnico",
    "Universitario",
    "Ninguno ",
  ],
  tipoPaciente: ["Nacional", "Extranjero"],
  aboRh: [
    "<Seleccione>",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ],
  grupoDispensarial: ["Grupo I", "Grupo II", "Grupo III", "Grupo IV", "No procede"],
};

export interface Occupation {
  id: string;
  nombre: string;
  categoria: string;
  selected: boolean;
}

export const occupationsData: Occupation[] = [
  {
    id: "1",
    nombre: "Abastecedor Combustible",
    categoria: "Trabajadores no calificados",
    selected: true,
  },
  {
    id: "2",
    nombre: "Abastecedor (industria manufacturera)",
    categoria: "Trabajadores no calificados",
    selected: false,
  },
  {
    id: "3",
    nombre: "Abastecedor (minería, construcción y metalurgia)",
    categoria: "Trabajadores no calificados",
    selected: false,
  },
  {
    id: "4",
    nombre: "Abridor Pecho y Cadera ",
    categoria: "Otros obreros calificados",
    selected: true,
  },

  {
    id: "5",
    nombre: "Abridor Seleccionador",
    categoria: "Otros obreros calificados",
    selected: true,
  },
  {
    id: "6",
    nombre: "Acarrador",
    categoria: "Trabajadores no calificados",
    selected: false,
  },
  {
    id: "7",
    nombre: "Acomodador (cines, teatros)",
    categoria: "Trabajadores de los servicios",
    selected: false,
  },
  {
    id: "8",
    nombre: "Acomodador: Viajeros",
    categoria: "Trabajadores de los servicios",
    selected: false,
  },
  {
    id: "9",
    nombre: "Acompañante niño Omnibus",
    categoria: "Trabajadores de los servicios",
    selected: false,
  },
  {
    id: "10",
    nombre: "Acondicionador",
    categoria: "Trabajadores no calificados",
    selected: false,
  },

  {
    id: "11",
    nombre: "Zoólogo ",
    categoria: "Profesionales cientificos e intelectuales ",
    selected: false,
  },
  {
    id: "12",
    nombre: "Zunchador  ",
    categoria: "Operativos de máquinas",
    selected: false,
  },

];

