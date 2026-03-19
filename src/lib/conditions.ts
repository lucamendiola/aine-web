export interface Condition {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  icon: string;
}

export const conditions: Condition[] = [
  {
    slug: "tea",
    name: "Trastorno del Espectro Autista (TEA)",
    shortName: "Autismo",
    description:
      "Diferencias en comúnicación social e interacción, con fortalezas únicas en memoria, atención al detalle y pensamiento sistematico.",
    color: "#ff856c",
    icon: "puzzle",
  },
  {
    slug: "tdah",
    name: "Trastorno por Déficit de Atención e Hiperactividad",
    shortName: "TDAH",
    description:
      "Condición neurobiológica que afecta la atención, el control de impulsos y la actividad. Con el apoyo adecuado, se convierte en una fortaleza creativa.",
    color: "#58b1f2",
    icon: "zap",
  },
  {
    slug: "altas-capacidades",
    name: "Altas Capacidades",
    shortName: "Altas Capacidades",
    description:
      "Niños y jóvenes con un potencial intelectual excepcional que necesitan estimulación adecuada para desarrollar sus talentos.",
    color: "#fba649",
    icon: "star",
  },
  {
    slug: "síndrome-de-down",
    name: "Síndrome de Down y otros diagnósticos genéticos",
    shortName: "Síndrome de Down",
    description:
      "Acompañamiento integral para niños con condiciones genéticas, enfocado en autonomía, comúnicación y desarrollo de habilidades.",
    color: "#4a9e8e",
    icon: "heart",
  },
  {
    slug: "retrasos-en-el-desarrollo",
    name: "Retrasos en el Desarrollo",
    shortName: "Retrasos del Desarrollo",
    description:
      "Cuando los hitos del desarrollo tardan más de lo esperado. La intervención temprana es clave para maximizar el potencial.",
    color: "#f3bb65",
    icon: "clock",
  },
  {
    slug: "trastornos-aprendizaje",
    name: "Trastornos del Aprendizaje",
    shortName: "Aprendizaje",
    description:
      "Dislexia, disgrafia y discalculia. No están relacionados con la inteligencia; con estrategias adecuadas, cada niño puede brillar.",
    color: "#f56c5a",
    icon: "book",
  },
  {
    slug: "trastorno-del-lenguaje",
    name: "Trastorno del Lenguaje",
    shortName: "Lenguaje",
    description:
      "Dificultades en la expresión y comprensión del lenguaje. La terapia especializada abre puertas a la comúnicación efectiva.",
    color: "#58b1f2",
    icon: "message",
  },
  {
    slug: "tics-tourette",
    name: "Tics y Síndrome de Tourette",
    shortName: "Tics y Tourette",
    description:
      "Movimientos o vocalizaciones involuntarias. Con comprensión y apoyo emocional, los niños aprenden a manejar sus sintomas.",
    color: "#4a9e8e",
    icon: "activity",
  },
  {
    slug: "problemas-motores",
    name: "Problemás Motores y de Coordinación",
    shortName: "Problemás Motores",
    description:
      "Dificultades en motricidad fina o gruesa, incluyendo dispraxia. La terapia física y ocupacional mejora la calidad de vida.",
    color: "#fba649",
    icon: "move",
  },
];

export const services = [
  { name: "Diagnóstico", description: "Evaluación integral y diagnóstico preciso de neurodivergencias" },
  { name: "Pediatría del desarrollo", description: "Atención medica especializada en desarrollo infantil" },
  { name: "Neuropsicología", description: "Evaluación de funciones cognitivas y plan de intervención" },
  { name: "Psicología clínica", description: "Apoyo emocional y conductual para niños y familias" },
  { name: "Terapia de lenguaje", description: "Desarrollo de habilidades comúnicativas y expresión" },
  { name: "Terapia ocupacional", description: "Desarrollo de habilidades motoras y de la vida diaria" },
  { name: "Terapia física", description: "Mejora de coordinación, equilibrio y movilidad" },
  { name: "Terapia conductual", description: "Estrategias para manejar comportamientos desafiantes" },
  { name: "Terapia del neurodesarrollo", description: "Estimulacion integral del desarrollo neurológico" },
  { name: "Neurología pediátrica", description: "Atención neurológica especializada en infancia" },
  { name: "Psiquiatría infantil", description: "Manejo farmacológico cuando es necesario" },
  { name: "Nutrición", description: "Planes alimenticios adaptados a cada condicion" },
  { name: "Psicopedagogía", description: "Estrategias educativas personalizadas" },
  { name: "Asesoría a padres", description: "Orientación y herramientas para la familia" },
  { name: "Capacitaciones", description: "Talleres y formación para profesionales y familias" },
];
