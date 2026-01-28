// Datos mock para las tablas de búsqueda de antecedentes

export interface AntecedenteRiesgo {
  id: number;
  nombre: string;
  descripcion: string;
  grupo: string;
  selected: boolean;
}

export interface AntecedenteDiscapacidad {
  id: number;
  nombre: string;
  descripcion: string;
  subgrupo: string;
  selected: boolean;
}

export interface AntecedentePatologico {
  id: number;
  nombre: string;
  descripcion: string;
  clasificacion: string;
  selected: boolean;
}

export interface AntecedenteFamiliar {
  id: number;
  codigo: string;
  nombre: string;
  estructura: string;
  selected: boolean;
}

export interface AntecedenteQuirurgico {
  id: number;
  codigo: string;
  nombre: string;
  categoria: string;
  selected: boolean;
}

export const mockAntecedentes = {
  riesgos: [
    {
      id: 1,
      nombre: "Hijo de embarazo oculto o rechazado para el recién nacido",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },
    {
      id: 2,
      nombre: "Hijo de madre adolescente para el recién nacido",
      descripcion: "menor de 18 años",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },
    {
      id: 3,
      nombre: "Parto distócico para el recién nacido",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },

    
    {
      id: 4,
      nombre: "Peso al nacer menor de 2500 gramos para el recien nacido ",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },

    
    {
      id: 5,
      nombre: "Apgar bajo al minuto para el recien nacido ",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },
    
    {
      id: 6,
      nombre: "Trauma obstétrico pra el recien nacido ",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },
    
    {
      id: 7,
      nombre: "Lactancia artifial para el recien nacido ",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },

    
    {
      id: 8,
      nombre: "Curva de peso estacionaria para el recien nacido",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },
    {
      
      id: 10,
      nombre: "Antecedentes de ictero patológico para el recién nacido",
      descripcion: "(Sin observación)",
      grupo: "Riesgos en el Recién Nacido",
      selected: false,
    },
    {
  id: 11,
  nombre: "Antecedentes de distress respiratorio para el recién nacido",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el Recién Nacido",
  selected: false,
},
{
  id: 12,
  nombre: "Antecedentes de sepsis para el recién nacido",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el Recién Nacido",
  selected: false,
},
{
  id: 13,
  nombre: "Hijo de madre portadora de hepatitis B para el recién nacido",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el Recién Nacido",
  selected: false,
},
{
  id: 14,
  nombre: "Egresado por EDA para el recién nacido",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el Recién Nacido",
  selected: false,
},
{
  id: 15,
  nombre: "Hijo de embarazo oculto o rechazado para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 16,
  nombre: "Hijo de madre adolescente para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 17,
  nombre: "Parto distócico para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 18,
  nombre: "Peso al nacer menor de 2500 gramos para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 19,
  nombre: "Apgar bajo al minuto para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 20,
  nombre: "Trauma obstétrico para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},


{
  id: 21,
  nombre: "Lactancia artificial para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 22,
  nombre: "Presencia de malformaciones congénitas menores para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 23,
  nombre: "Curva de peso estacionaria para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 24,
  nombre: "Antecedentes de íctero patológico para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 25,
  nombre: "Antecedentes de distress respiratorio para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 26,
  nombre: "Antecedentes de sepsis para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 27,
  nombre: "Hijo de madre portadora de hepatitis B para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 28,
  nombre: "Egresado por EDA para lactantes",
  descripcion: "para los lactantes menores de 3 meses",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 29,
  nombre: "Madre adolescente",
  descripcion: "menor de 18 años",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 30,
  nombre: "Peso al nacer menor de 2500 gramos",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el lactante",
  selected: false,
},


{
  id: 31,
  nombre: "Curva de peso estacionaria",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 32,
  nombre: "EDA a repetición",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 33,
  nombre: "IRA a repetición",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 34,
  nombre: "Retraso del desarrollo psicomotor",
  descripcion: "(Sin observación)",
  grupo: "Riesgos en el lactante",
  selected: false,
},
{
  id: 35,
  nombre: "Riesgo materno perinatal",
  descripcion: "Durante el embarazo",
  grupo: "Riesgo materno perinatal",
  selected: false,
},
{
  id: 36,
  nombre: "Embarazo",
  descripcion: "(Sin observación)",
  grupo: "Embarazo",
  selected: false,
},
{
  id: 37,
  nombre: "Puerperio",
  descripcion: "(Sin observación)",
  grupo: "Puerperio",
  selected: false,
},
{
  id: 38,
  nombre: "Trabajadores expuestos al ruido",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 39,
  nombre: "Trabajadores expuestos a plomo",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 40,
  nombre: "Trabajadores expuestos a mercurio",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 41,
  nombre: "Trabajadores expuestos a plaguicidas",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 42,
  nombre: "Trabajadores expuestos a arena sílice",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 43,
  nombre: "Trabajadores expuestos a solventes orgánicos",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 44,
  nombre: "Trabajadores expuestos a temperaturas extremas",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 45,
  nombre: "Riesgos por contacto de enfermedades transmisibles",
  descripcion: "(Sin observación)",
  grupo: "Riesgos por contacto de enfermedades transmisibles",
  selected: false,
},
{
  id: 46,
  nombre: "Antecedentes de intentos suicidas",
  descripcion: "(Sin observación)",
  grupo: "Riesgos sociales",
  selected: false,
},
{
  id: 47,
  nombre: "Trabajadores expuestos a vibraciones",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},
{
  id: 48,
  nombre: "Trabajadores expuestos a radiaciones ultravioleta",
  descripcion: "(Sin observación)",
  grupo: "Riesgo laboral",
  selected: false,
},

{
  id: 49,
  nombre: "Alcoholismo y otras adicciones",
  descripcion: "(Sin observación)",
  grupo: "Riesgos sociales",
  selected: false,
},
{
  id: 50,
  nombre: "Deserción y retraso escolar",
  descripcion: "(Sin observación)",
  grupo: "Riesgos sociales",
  selected: false,
},
{
  id: 51,
  nombre: "Desatención familiar",
  descripcion: "(Sin observación)",
  grupo: "Riesgos sociales",
  selected: false,
},
{
  id: 52,
  nombre: "Conductas inadecuadas",
  descripcion: "(Sin observación)",
  grupo: "Riesgos sociales",
  selected: false,
},
{
  id: 53,
  nombre: "Mordedura de animal",
  descripcion: "Durante 3 meses",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 54,
  nombre: "Viajero internacional hasta el alta",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 55,
  nombre: "Portadores de fiebre tifoidea",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 56,
  nombre: "Portador de Difteria",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 57,
  nombre: "Portador de Enfermedades infecciosas con un modo de transmisión predominantemente sexual",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 58,
  nombre: "Portador de Hepatitis Viral",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 59,
  nombre: "Portador de enfermedad infecciosa debida al virus humano t-linfotrópico tipo 1",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
},
{
  id: 60,
  nombre: "Riesgo Preconcepcional",
  descripcion: "(Sin observación)",
  grupo: "Riesgo Preconcepcional",
  selected: false,
},
{
  id: 61,
  nombre: "Riesgo por consumo de drogas",
  descripcion: "(Sin observación)",
  grupo: "Riesgos sociales",
  selected: false,
},
{
  id: 62,
  nombre: "Riesgo por hábito de fumar",
  descripcion: "(Sin observación)",
  grupo: "Riesgo por hábito de fumar",
  selected: false,
},
{
  id: 63,
  nombre: "Historia personal de alergia, no debida a drogas ni a sustancias biológicas",
  descripcion: "(Sin observación)",
  grupo: "Otros factores de riesgo",
  selected: false,
}



  ] as AntecedenteRiesgo[],
  discapacidades: [
    {
      id: 1,
      nombre: "Parálisis y paresias de miembros superiores",
      descripcion: "(Sin observación)",
      subgrupo: "Parálisis y paresias de miembros superiores",
      selected: false,
    },
    {
      id: 2,
      nombre: "Parálisis y paresias de miembros inferiores",
      descripcion: "(Sin observación)",
      subgrupo: "Parálisis y paresias de miembros inferiores",
      selected: false,
    },
    {
      id: 3,
      nombre: "Enfermedad de Parkinson",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },
    {
      id: 4,
      nombre: "Parálisis cerebral",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },
    {
      id: 5,
      nombre: "Esclerosis  múltiple ",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },
    {
      id: 6,
      nombre: "Esclerosis  lateral amiotófica",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },
    {
      id: 7,
      nombre: "Corea",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },

    {
      id: 8,
      nombre: "Temblores  ",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },
    {
      id:9 ,
      nombre: "Distrofias musculares  ",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },
    {
      id: 10,
      nombre: "Atrofias Parciales   ",
      descripcion: "(Sin observación)",
      subgrupo: "Trastornos de la coordinación de movimientos y/o tono muscular",
      selected: false,
    },


    {
      id: 11,
      nombre: "Ausencia de miembros o parte de su estructura",
      descripcion: "Malformaciones congénitas o amputación",
      subgrupo: "Ausencia de miembros o parte de su estructura (malformaciones congénitas o amputación)",
      selected: false,
    },
    {
      id: 12,
      nombre: "Placenta accreta sin hemorragia",
      descripcion: "Placenta accreta sin hemorragia",
      subgrupo: "Parálisis y paresias de miembros inferiores",
      selected: false,
    },
    {
      id: 13,
      nombre: "Pérdida del habla",
      descripcion: "grave",
      subgrupo: "Sordos",
      selected: false,
    },
    {
      id: 14,
      nombre: "Marcadas deformaciones de la columna vertebral",
      descripcion: "(Sin observación)",
      subgrupo: "Marcadas deformaciones de la columna vertebral",
      selected: false,
    },
    {
      id: 15,
      nombre: "Sordos",
      descripcion: "(Sin observación)",
      subgrupo: "Sordos",
      selected: false,
    },
    {
      id: 16,
      nombre: "Hipoacúsicos",
      descripcion: "(Sin observación)",
      subgrupo: "Hipoacúsicos",
      selected: false,
    },
    {
      id: 17,
      nombre: "Ceguera",
      descripcion: "(Sin observación)",
      subgrupo: "Ceguera",
      selected: false,
    },
    {
      id: 18,
      nombre: "Baja visión",
      descripcion: "(Sin observación)",
      subgrupo: "Baja visión",
      selected: false,
    },
    {
      id: 19,
      nombre: "Retraso del desarrollo del lenguaje",
      descripcion: "(Sin observación)",
      subgrupo: "Retraso del desarrollo del lenguaje",
      selected: false,
    },
    {
      id: 20,
      nombre: "Afasias",
      descripcion: "(Sin observación)",
      subgrupo: "Afasias",
      selected: false,
    },
    {
      id: 11,
      nombre: "Ausencia de miembros o parte de su estructura",
      descripcion: "Malformaciones congénitas o amputación",
      subgrupo: "Ausencia de miembros o parte de su estructura (malformaciones congénitas o amputación)",
      selected: false,
    },
    {
      id: 12,
      nombre: "Placenta accreta sin hemorragia",
      descripcion: "Placenta accreta sin hemorragia",
      subgrupo: "Parálisis y paresias de miembros inferiores",
      selected: false,
    },
    {
      id: 13,
      nombre: "Pérdida del habla",
      descripcion: "grave",
      subgrupo: "Sordos",
      selected: false,
    },
    {
      id: 14,
      nombre: "Marcadas deformaciones de la columna vertebral",
      descripcion: "(Sin observación)",
      subgrupo: "Marcadas deformaciones de la columna vertebral",
      selected: false,
    },
    {
      id: 15,
      nombre: "Sordos",
      descripcion: "(Sin observación)",
      subgrupo: "Sordos",
      selected: false,
    },
    {
      id: 16,
      nombre: "Hipoacúsicos",
      descripcion: "(Sin observación)",
      subgrupo: "Hipoacúsicos",
      selected: false,
    },
    {
      id: 17,
      nombre: "Ceguera",
      descripcion: "(Sin observación)",
      subgrupo: "Ceguera",
      selected: false,
    },
    {
      id: 18,
      nombre: "Baja visión",
      descripcion: "(Sin observación)",
      subgrupo: "Baja visión",
      selected: false,
    },
    {
      id: 19,
      nombre: "Retraso del desarrollo del lenguaje",
      descripcion: "(Sin observación)",
      subgrupo: "Retraso del desarrollo del lenguaje",
      selected: false,
    },
    {
      id: 20,
      nombre: "Afasias",
      descripcion: "(Sin observación)",
      subgrupo: "Afasias",
      selected: false,
    },
    {
      id: 21,
      nombre: "Disartrias",
      descripcion: "(Sin observación)",
      subgrupo: "Disartrias",
      selected: false,
    },
    {
      id: 22,
      nombre: "Tartamudez",
      descripcion: "(Sin observación)",
      subgrupo: "Tartamudez",
      selected: false,
    },
    {
      id: 23,
      nombre: "Disfonías",
      descripcion: "(Sin observación)",
      subgrupo: "Disfonías",
      selected: false,
    },
    {
      id: 24,
      nombre: "Hiperrinolalias",
      descripcion: "(Sin observación)",
      subgrupo: "Hiperrinolalias",
      selected: false,
    },
    {
      id: 25,
      nombre: "Laringectomías",
      descripcion: "(Sin observación)",
      subgrupo: "Laringectomías",
      selected: false,
    },
    {
      id: 26,
      nombre: "Otras Discapacidades",
      descripcion: "(Sin observación)",
      subgrupo: "Otras Discapacidades",
      selected: false,
    },

  ] as AntecedenteDiscapacidad[],
  patologicos: [
    {
      id: 1,
      nombre: "Diabetes Mellitus no insulinodependiente",
      descripcion: "(Sin observación)",
      clasificacion: "Diabetes Mellitus",
      selected: false,
    },

    {
      id: 2,
      nombre: "Diabetes Mellitus insulinodependiente",
      descripcion: "(Sin observación)",
      clasificacion: "Diabetes Mellitus",
      selected: false,
    },


    {
      id: 3,
      nombre: "Hipertensión Arterial",
      descripcion: "(Sin observación)",
      clasificacion: "Hipertensión Arterial",
      selected: false,
    },
    {
      id: 4,
      nombre: "Asma Bronquial",
      descripcion: "(Sin observación)",
      clasificacion: "Asma Bronquial",
      selected: false,
    },
    {
      id: 5,
      nombre: "Insuficiencia renal crónica ",
      descripcion: "(Sin observación)",
      clasificacion: "Insuficiencia Renal Crónica ",
      selected: false,
    },
 {
      id: 6,
      nombre: "Hipercolesterolemia ",
      descripcion: "(Sin observación)",
      clasificacion: "Hipercolesterolemia",
      selected: false,
    },
    {
      id: 7,
      nombre: "Cardiopatïa Isquémica ",
      descripcion: "(Sin observación)",
      clasificacion: "Cardiopatïa Isquémica",
      selected: false,
    },
    {
      id: 8,
      nombre: "Enfermedades de Celebro Vasculares ",
      descripcion: "(Sin observación)",
      clasificacion: "Enfermedades de Celebro Vasculares",
      selected: false,
    },
    {
      id: 9,
      nombre: "Cardiopatïa Congénita ",
      descripcion: "(Sin observación)",
      clasificacion: "Cardiopatïa Congénita",
      selected: false,
    },

    {
      id: 10,
      nombre: "Epilepsia",
      descripcion: "(Sin observación)",
      clasificacion: "Epilepsia",
      selected: false,
    },
    

    {
      id: 11,
      nombre: "Neoplasias",
      descripcion: "(Sin observación)",
      clasificacion: "Neoplasias",
      selected: false,
    },
    {
      id: 12,
      nombre: "Ulcera Péptica Gastroduodenal",
      descripcion: "(Sin observación)",
      clasificacion: "Ulcera Péptica Gastroduodenal",
      selected: false,
    },
    {
      id: 13,
      nombre: "Sicklemia",
      descripcion: "(Sin observación)",
      clasificacion: "Sicklemia",
      selected: false,
    },
    {
      id: 14,
      nombre: "Obesidad",
      descripcion: "(Sin observación)",
      clasificacion: "Obesidad",
      selected: false,
    },
    {
      id: 15,
      nombre: "Alcohólico",
      descripcion: "(Sin observación)",
      clasificacion: "Alcohólico",
      selected: false,
    },
    {
      id: 16,
      nombre: "Malnutrición por defecto del niño",
      descripcion: "(Sin observación)",
      clasificacion: "Malnutrición por defecto del niño",
      selected: false,
    },
    {
      id: 17,
      nombre: "Trabajadores expuestos al ruido",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos al ruido",
      selected: false,
    },
    {
      id: 18,
      nombre: "Trabajadores expuestos a vibraciones",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos a vibraciones",
      selected: false,
    },
    {
      id: 19,
      nombre: "Trabajadores expuestos a radiaciones ultravioletas",
      descripcion: "Trabajadores expuestos a radiaciones ultravioletas, temperatura, corriente eléctrica, presión del aire, ambientes extremas",
      clasificacion: "Trabajadores expuestos a radiaciones ultravioletas",
      selected: false,
    },
    {
      id: 20,
      nombre: "Trabajadores expuestos a plomo",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos a plomo",
      selected: false,
    },
    {
      id: 21,
      nombre: "Trabajadores expuestos a mercurio",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos a mercurio",
      selected: false,
    },
    {
      id: 22,
      nombre: "Trabajadores expuestos a plaguicidas",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos a plaguicidas",
      selected: false,
    },
    {
      id: 23,
      nombre: "Trabajadores expuestos a arena sílice",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos a arena sílice",
      selected: false,
    },
    {
      id: 24,
      nombre: "Trabajadores expuestos a solventes orgánicos",
      descripcion: "(Sin observación)",
      clasificacion: "Trabajadores expuestos a solventes orgánicos",
      selected: false,
    },


    
  ] as AntecedentePatologico[],
  familiares: [
    {
      id: 1,
      codigo: "C00-D48",
      nombre: "Tumores [neoplasias]",
      estructura: "Capítulo",
      selected: false,
    },
    {
      id: 2,
      codigo: "B44.2",
      nombre: "Aspergilosis amigdalina",
      estructura: "Subcategoría",
      selected: false,
    },
    {
      id: 3,
      codigo: "B44.7",
      nombre: "Aspergilosis diseminada",
      estructura: "Subcategoría",
      selected: false,
    },
    {
      id: 4,
      codigo: "B45.0",
      nombre: "Criptococosis pulmonar",
      estructura: "Subcategoría",
      selected: false,
    },
  ] as AntecedenteFamiliar[],
  quirurgicos: [
    {
      id: 1,
      codigo: "01.01",
      nombre: "Punción ventricular a través de catéter previamente implantado",
      categoria: "Función craneal",
      selected: false,
    },
    {
      id: 2,
      codigo: "01.09",
      nombre: "Otra punción craneal",
      categoria: "Función craneal",
      selected: false,
    },
    {
      id: 3,
      codigo: "02.04",
      nombre: "Injerto óseo de cráneo: Injerto pericraneal (autógeno) (heterógeno)",
      categoria: "Craneoplastia",
      selected: false,
    },
    {
      id: 4,
      codigo: "02.05",
      nombre: "Colocación de placa craneal (metálica,acrílica): Sustitución de placa craneal",
      categoria: "Craneoplastia",
      selected: false,
    },
  ] as AntecedenteQuirurgico[],
  alergicos: [
    {
      id: 1,
      nombre: "Alergia a penicilina",
      descripcion: "Reacción alérgica a antibióticos betalactámicos (urticaria, dificultad para respirar)",
      clasificacion: "Medicamentos",
      selected: false,
    },
    {
      id: 2,
      nombre: "Alergia a cacahuetes",
      descripcion: "Reacción anafiláctica o local tras consumo de cacahuetes o productos con trazas",
      clasificacion: "Alimentos",
      selected: false,
    },
    {
      id: 3,
      nombre: "Rinitis alérgica estacional",
      descripcion: "Congestión nasal, estornudos y picor ocular asociados a pólenes",
      clasificacion: "Ambiental",
      selected: false,
    },
  ],
};

