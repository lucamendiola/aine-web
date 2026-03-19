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
      "Diferencias en comunicacion social e interaccion, con fortalezas unicas en memoria, atencion al detalle y pensamiento sistematico.",
    color: "#ff856c",
    icon: "puzzle",
  },
  {
    slug: "tdah",
    name: "Trastorno por Deficit de Atencion e Hiperactividad",
    shortName: "TDAH",
    description:
      "Condicion neurobiologica que afecta la atencion, el control de impulsos y la actividad. Con el apoyo adecuado, se convierte en una fortaleza creativa.",
    color: "#58b1f2",
    icon: "zap",
  },
  {
    slug: "altas-capacidades",
    name: "Altas Capacidades",
    shortName: "Altas Capacidades",
    description:
      "Ninos y jovenes con un potencial intelectual excepcional que necesitan estimulacion adecuada para desarrollar sus talentos.",
    color: "#fba649",
    icon: "star",
  },
  {
    slug: "sindrome-de-down",
    name: "Sindrome de Down y otros diagnosticos geneticos",
    shortName: "Sindrome de Down",
    description:
      "Acompanamiento integral para ninos con condiciones geneticas, enfocado en autonomia, comunicacion y desarrollo de habilidades.",
    color: "#4a9e8e",
    icon: "heart",
  },
  {
    slug: "retrasos-en-el-desarrollo",
    name: "Retrasos en el Desarrollo",
    shortName: "Retrasos del Desarrollo",
    description:
      "Cuando los hitos del desarrollo tardan mas de lo esperado. La intervencion temprana es clave para maximizar el potencial.",
    color: "#f3bb65",
    icon: "clock",
  },
  {
    slug: "trastornos-aprendizaje",
    name: "Trastornos del Aprendizaje",
    shortName: "Aprendizaje",
    description:
      "Dislexia, disgrafia y discalculia. No estan relacionados con la inteligencia; con estrategias adecuadas, cada nino puede brillar.",
    color: "#f56c5a",
    icon: "book",
  },
  {
    slug: "trastorno-del-lenguaje",
    name: "Trastorno del Lenguaje",
    shortName: "Lenguaje",
    description:
      "Dificultades en la expresion y comprension del lenguaje. La terapia especializada abre puertas a la comunicacion efectiva.",
    color: "#58b1f2",
    icon: "message",
  },
  {
    slug: "tics-tourette",
    name: "Tics y Sindrome de Tourette",
    shortName: "Tics y Tourette",
    description:
      "Movimientos o vocalizaciones involuntarias. Con comprension y apoyo emocional, los ninos aprenden a manejar sus sintomas.",
    color: "#4a9e8e",
    icon: "activity",
  },
  {
    slug: "problemas-motores",
    name: "Problemas Motores y de Coordinacion",
    shortName: "Problemas Motores",
    description:
      "Dificultades en motricidad fina o gruesa, incluyendo dispraxia. La terapia fisica y ocupacional mejora la calidad de vida.",
    color: "#fba649",
    icon: "move",
  },
];

export const services = [
  { name: "Diagnostico", description: "Evaluacion integral y diagnostico preciso de neurodivergencias" },
  { name: "Pediatria del desarrollo", description: "Atencion medica especializada en desarrollo infantil" },
  { name: "Neuropsicologia", description: "Evaluacion de funciones cognitivas y plan de intervencion" },
  { name: "Psicologia clinica", description: "Apoyo emocional y conductual para ninos y familias" },
  { name: "Terapia de lenguaje", description: "Desarrollo de habilidades comunicativas y expresion" },
  { name: "Terapia ocupacional", description: "Desarrollo de habilidades motoras y de la vida diaria" },
  { name: "Terapia fisica", description: "Mejora de coordinacion, equilibrio y movilidad" },
  { name: "Terapia conductual", description: "Estrategias para manejar comportamientos desafiantes" },
  { name: "Terapia del neurodesarrollo", description: "Estimulacion integral del desarrollo neurologico" },
  { name: "Neurologia pediatrica", description: "Atencion neurologica especializada en infancia" },
  { name: "Psiquiatria infantil", description: "Manejo farmacologico cuando es necesario" },
  { name: "Nutricion", description: "Planes alimenticios adaptados a cada condicion" },
  { name: "Psicopedagogia", description: "Estrategias educativas personalizadas" },
  { name: "Asesoria a padres", description: "Orientacion y herramientas para la familia" },
  { name: "Capacitaciones", description: "Talleres y formacion para profesionales y familias" },
];
