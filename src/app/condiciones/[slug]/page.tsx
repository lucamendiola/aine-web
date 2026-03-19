import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { conditions } from "@/lib/conditions";

/* ------------------------------------------------------------------ */
/*  Extended content for each condition                                */
/* ------------------------------------------------------------------ */

interface ConditionContent {
  paragraphs: string[];
  keyAspects: string[];
  impact: string;
}

const conditionContent: Record<string, ConditionContent> = {
  tea: {
    paragraphs: [
      "El Trastorno del Espectro Autista (TEA) es una condicion del neurodesarrollo que se manifiesta en diferencias en la comunicacion social, la interaccion con otros y patrones de comportamiento repetitivos. Cada persona dentro del espectro es unica: algunos ninos pueden tener dificultades significativas con el lenguaje verbal, mientras que otros desarrollan un vocabulario avanzado pero enfrentan retos en la comunicacion no verbal y la comprension de contextos sociales.",
      "Las fortalezas de los ninos con TEA son notables. Muchos demuestran una memoria excepcional, una atencion al detalle fuera de lo comun, habilidades avanzadas en reconocimiento de patrones y un pensamiento sistematico que les permite sobresalir en areas especificas de interes. Tambien pueden presentar sensibilidades sensoriales, ya sea hipersensibilidad o hiposensibilidad a estimulos como sonidos, texturas o luces.",
      "La intervencion temprana es fundamental. Cuando se detecta y se acompana desde edades tempranas, los ninos con TEA logran desarrollar herramientas de comunicacion, habilidades sociales y estrategias de autorregulacion que transforman su calidad de vida. En AINE, ofrecemos una evaluacion multidisciplinaria completa y planes de terapia individualizados que respetan la identidad de cada nino.",
    ],
    keyAspects: [
      "Diferencias en comunicacion social e interaccion",
      "Patrones de comportamiento repetitivos o restringidos",
      "Sensibilidades sensoriales (hiper o hiposensibilidad)",
      "Fortalezas en memoria, atencion al detalle y patrones",
      "Espectro amplio: cada caso es unico",
      "La intervencion temprana mejora significativamente los resultados",
    ],
    impact:
      "El TEA impacta a toda la familia. Los padres a menudo enfrentan incertidumbre, estres y la necesidad de adaptar rutinas y entornos. Los hermanos tambien necesitan comprension y apoyo. En AINE, no solo trabajamos con el nino, sino con toda la familia, ofreciendo orientacion, talleres y un espacio seguro donde cada miembro encuentra las herramientas para construir un entorno que potencie el desarrollo de su hijo.",
  },
  tdah: {
    paragraphs: [
      "El Trastorno por Deficit de Atencion e Hiperactividad (TDAH) es una condicion neurobiologica que afecta la capacidad para mantener la atencion, controlar impulsos y regular los niveles de actividad. No es un problema de disciplina ni de voluntad: es una diferencia en el funcionamiento del cerebro que afecta entre el 5% y el 7% de los ninos a nivel mundial.",
      "El TDAH se presenta en tres subtipos: predominantemente inatento (dificultad para concentrarse y organizarse), predominantemente hiperactivo-impulsivo (necesidad constante de movimiento y dificultad para esperar), y combinado. Muchos ninos son diagnosticados durante la etapa escolar, cuando las demandas academicas y sociales hacen mas evidentes las dificultades.",
      "En AINE, realizamos una evaluacion integral que incluye observacion clinica, pruebas neuropsicologicas y entrevistas con la familia y la escuela. Nuestro enfoque combina terapia conductual, entrenamiento en habilidades ejecutivas, apoyo a la familia y, cuando es necesario, coordinacion con psiquiatria infantil para un manejo farmacologico responsable.",
    ],
    keyAspects: [
      "Condicion neurobiologica, no un problema de conducta",
      "Tres subtipos: inatento, hiperactivo-impulsivo y combinado",
      "Diagnostico frecuente en edad escolar",
      "Afecta funciones ejecutivas: organizacion, planificacion, memoria de trabajo",
      "Responde bien a enfoques combinados (terapia + apoyo familiar)",
      "Muchos ninos con TDAH tienen creatividad y energia excepcionales",
    ],
    impact:
      "El TDAH puede generar frustacion tanto en el nino como en su familia. Los conflictos en el hogar, las dificultades escolares y la incomprension social son comunes. Sin embargo, con el acompanamiento adecuado, los ninos con TDAH descubren que su energia, creatividad y forma diferente de pensar son verdaderas fortalezas. En AINE, ayudamos a las familias a entender la condicion, ajustar expectativas y crear estrategias que funcionen en casa y en la escuela.",
  },
  "altas-capacidades": {
    paragraphs: [
      "Las Altas Capacidades Intelectuales se refieren a un potencial cognitivo significativamente superior al promedio. Estos ninos no solo son \"inteligentes\": su forma de procesar informacion, su curiosidad intensa y su sensibilidad emocional los hacen diferentes de sus pares. Pueden aprender rapidamente, hacer conexiones inusuales entre ideas y mostrar un interes profundo por temas que van mas alla de lo esperado para su edad.",
      "Sin embargo, las altas capacidades tambien traen desafios unicos. El aburrimiento en el aula, la sensacion de no encajar, el desarrollo asincronico (donde su intelecto avanza mas rapido que su madurez emocional o social) y la frustacion cuando las cosas no salen perfectas son realidades frecuentes. Sin identificacion ni apoyo, estos ninos pueden presentar bajo rendimiento academico, ansiedad o aislamiento social.",
      "En AINE, ofrecemos evaluacion especializada para identificar altas capacidades, seguida de estrategias de enriquecimiento academico, apoyo emocional y orientacion a familias y escuelas. Nuestro objetivo es que cada nino con altas capacidades pueda desarrollar su potencial completo sin sacrificar su bienestar emocional.",
    ],
    keyAspects: [
      "Potencial intelectual significativamente superior al promedio",
      "Curiosidad intensa y aprendizaje acelerado",
      "Desarrollo asincronico: intelecto vs. madurez emocional",
      "Riesgo de aburrimiento, aislamiento y bajo rendimiento si no se detecta",
      "Sensibilidad emocional elevada",
      "Necesidad de estimulacion adecuada y enriquecimiento",
    ],
    impact:
      "Las familias de ninos con altas capacidades a menudo se sienten incomprendidas. La sociedad tiende a pensar que estos ninos \"no necesitan ayuda\", pero la realidad es diferente. Sin el acompanamiento correcto, pueden desarrollar problemas emocionales y academicos significativos. En AINE, trabajamos con la familia completa para crear un entorno donde el nino se sienta comprendido, estimulado y emocionalmente seguro.",
  },
  "sindrome-de-down": {
    paragraphs: [
      "El Sindrome de Down es una condicion genetica causada por la presencia de una copia extra del cromosoma 21 (trisomia 21). Es la alteracion cromosomica mas comun y afecta aproximadamente a 1 de cada 700 nacimientos. Cada nino con Sindrome de Down es unico: sus capacidades, personalidad y ritmo de desarrollo varian ampliamente.",
      "La intervencion temprana es uno de los factores mas importantes para maximizar el desarrollo de ninos con Sindrome de Down. Los programas de estimulacion desde los primeros meses de vida ayudan a fortalecer habilidades de comunicacion, motricidad y cognicion. Con el apoyo adecuado, los ninos con Sindrome de Down alcanzan niveles de autonomia, participacion social y calidad de vida que hace decadas eran impensables.",
      "En AINE, nuestro enfoque transdisciplinario abarca terapia de lenguaje para potenciar la comunicacion, terapia fisica y ocupacional para el desarrollo motor, neuropsicologia para fortalecer habilidades cognitivas y apoyo psicologico para la familia. Cada plan es personalizado segun las necesidades y fortalezas de cada nino.",
    ],
    keyAspects: [
      "Condicion genetica: trisomia del cromosoma 21",
      "Cada nino tiene un perfil unico de desarrollo",
      "La estimulacion temprana maximiza autonomia y habilidades",
      "Enfoque en comunicacion, motricidad y cognicion",
      "Potencial real de inclusion social y academica",
      "Acompanamiento a la familia desde el diagnostico",
    ],
    impact:
      "Recibir el diagnostico de Sindrome de Down transforma la vida de una familia. Las preguntas, los miedos y la incertidumbre son naturales. En AINE, acompanamos a las familias desde el primer momento, ofreciendo informacion clara, apoyo emocional y un plan de accion concreto. Nuestro objetivo es que cada familia vea las posibilidades reales de su hijo y cuente con las herramientas para apoyar su desarrollo al maximo.",
  },
  "retrasos-en-el-desarrollo": {
    paragraphs: [
      "Los retrasos en el desarrollo ocurren cuando un nino no alcanza los hitos del desarrollo (como caminar, hablar o interactuar socialmente) en los tiempos esperados. Estos retrasos pueden afectar una o varias areas: motricidad, lenguaje, cognicion, habilidades sociales o habilidades de la vida diaria.",
      "Las causas pueden ser diversas: factores geneticos, complicaciones durante el embarazo o parto, condiciones neurologicas, factores ambientales o causas que aun no se han identificado. Lo mas importante es que la deteccion temprana y la intervencion oportuna son fundamentales. Cuanto antes se identifique un retraso, mayores son las posibilidades de que el nino alcance su maximo potencial.",
      "En AINE, realizamos evaluaciones integrales para determinar el tipo y grado de retraso, identificar las causas subyacentes cuando es posible y crear programas de intervencion personalizados. Nuestros programas de estimulacion temprana combinan terapias especializadas con orientacion a la familia para crear un entorno que favorezca el desarrollo.",
    ],
    keyAspects: [
      "No alcanzar hitos del desarrollo en los tiempos esperados",
      "Puede afectar motricidad, lenguaje, cognicion o habilidades sociales",
      "Causas diversas: geneticas, neurologicas, ambientales",
      "La deteccion temprana es clave para mejores resultados",
      "Programas de estimulacion temprana personalizados",
      "Evaluacion integral para identificar causas y areas de intervencion",
    ],
    impact:
      "Los padres suelen ser los primeros en notar que algo es diferente en el desarrollo de su hijo. Esa intuicion es valiosa y merece atencion profesional. En AINE, validamos las preocupaciones de las familias, realizamos evaluaciones completas y ofrecemos respuestas claras. Saber que hacer y por donde empezar reduce la angustia y permite a las familias enfocarse en lo que realmente importa: apoyar a su hijo.",
  },
  "trastornos-aprendizaje": {
    paragraphs: [
      "Los trastornos del aprendizaje incluyen la dislexia (dificultad con la lectura), la disgrafia (dificultad con la escritura) y la discalculia (dificultad con las matematicas). Estas condiciones no estan relacionadas con la inteligencia: los ninos con trastornos del aprendizaje suelen tener una capacidad intelectual normal o superior, pero procesan cierto tipo de informacion de manera diferente.",
      "Estos trastornos se hacen evidentes cuando el nino comienza la etapa escolar y enfrenta demandas academicas formales. Sin diagnostico, los ninos pueden ser etiquetados como \"flojos\" o \"desobedientes\", lo que afecta profundamente su autoestima y motivacion. El diagnostico adecuado no solo explica las dificultades, sino que abre la puerta a estrategias especificas que permiten al nino aprender de la forma que funciona para el.",
      "En AINE, evaluamos las habilidades cognitivas y academicas del nino para determinar el tipo de trastorno del aprendizaje y su impacto. Trabajamos con psicopedagogia y neuropsicologia para crear estrategias de ensenanza personalizadas, y orientamos a las familias y escuelas sobre las adaptaciones necesarias para que el nino pueda tener exito academico.",
    ],
    keyAspects: [
      "Incluyen dislexia, disgrafia y discalculia",
      "No estan relacionados con el nivel de inteligencia",
      "Se manifiestan con mayor claridad en la etapa escolar",
      "El diagnostico temprano previene danos a la autoestima",
      "Estrategias personalizadas de ensenanza y aprendizaje",
      "Coordinacion con la escuela para adaptaciones necesarias",
    ],
    impact:
      "Un trastorno del aprendizaje no diagnosticado puede hacer que un nino brillante se sienta incapaz. La frustacion diaria en la escuela, la comparacion con companeros y las dificultades con las tareas afectan no solo el rendimiento academico, sino la relacion del nino con el aprendizaje en general. En AINE, ayudamos a las familias a entender que su hijo no tiene un problema de esfuerzo, sino una forma diferente de procesar informacion, y les damos las herramientas para apoyarlo.",
  },
  "trastorno-del-lenguaje": {
    paragraphs: [
      "El trastorno del lenguaje afecta la capacidad de un nino para comprender o expresarse a traves del habla. Puede manifestarse como retrasos en las primeras palabras, un vocabulario limitado para su edad, dificultad para formar oraciones complejas o problemas para seguir instrucciones de varios pasos. Algunos ninos tienen dificultades tanto expresivas como receptivas.",
      "El lenguaje es la herramienta fundamental para la comunicacion, el aprendizaje y la participacion social. Cuando un nino tiene dificultades en esta area, el impacto se extiende a su rendimiento academico, sus relaciones con pares y su autoestima. Los ninos que no pueden expresar lo que sienten o necesitan a menudo muestran frustacion a traves de conductas desafiantes.",
      "En AINE, nuestros terapeutas de lenguaje realizan una evaluacion completa de las habilidades comunicativas del nino y disenan programas de intervencion que abordan tanto la expresion como la comprension. La terapia de lenguaje, combinada con estrategias para el hogar y la escuela, abre puertas a una comunicacion efectiva y una participacion social plena.",
    ],
    keyAspects: [
      "Afecta comprension, expresion o ambas",
      "Puede incluir retrasos en primeras palabras y vocabulario limitado",
      "Dificultad con oraciones complejas e instrucciones de varios pasos",
      "Impacta rendimiento academico y relaciones sociales",
      "La terapia de lenguaje especializada produce mejoras significativas",
      "Estrategias complementarias para el hogar y la escuela",
    ],
    impact:
      "Las dificultades del lenguaje pueden aislar a un nino de su entorno. No poder pedir ayuda, participar en conversaciones o expresar emociones genera frustacion y, en muchos casos, problemas de conducta que enmascaran la dificultad real. En AINE, trabajamos para que cada nino encuentre su voz, ya sea a traves del habla, de estrategias de comunicacion alternativa o de ambas, y para que la familia cuente con las herramientas para facilitar la comunicacion en casa.",
  },
  "tics-tourette": {
    paragraphs: [
      "Los tics son movimientos o vocalizaciones involuntarios, subitos y repetitivos. Pueden ser simples (parpadeo excesivo, carraspeo) o complejos (gestos faciales elaborados, repeticion de palabras). El Sindrome de Tourette se diagnostica cuando una persona presenta tics motores y vocales durante mas de un ano. Ambas condiciones suelen aparecer en la infancia, tipicamente entre los 5 y los 10 anos.",
      "Los tics tienden a fluctuar en frecuencia e intensidad. El estres, la ansiedad, la fatiga y la emocion intensa pueden aumentar su aparicion, mientras que la concentracion en actividades de interes suele reducirlos. Es comun que los tics coexistan con otras condiciones como TDAH, ansiedad o trastorno obsesivo-compulsivo, lo que hace importante una evaluacion integral.",
      "En AINE, ofrecemos un abordaje comprensivo que incluye evaluacion neurologica, apoyo psicologico y estrategias conductuales como la terapia de reversion de habitos. Trabajamos con el nino para que comprenda su condicion sin sentirse definido por ella, y con la familia y la escuela para crear un entorno de comprension y aceptacion.",
    ],
    keyAspects: [
      "Movimientos o vocalizaciones involuntarios y repetitivos",
      "Tics simples y complejos; motores y vocales",
      "El Sindrome de Tourette incluye ambos tipos por mas de un ano",
      "Fluctuan con el estres, la fatiga y las emociones",
      "Frecuente coexistencia con TDAH, ansiedad u TOC",
      "Estrategias conductuales efectivas para el manejo",
    ],
    impact:
      "Los tics pueden generar vergenza, burlas y aislamiento social en los ninos que los presentan. Las familias a menudo enfrentan incomprension por parte de escuelas y entornos sociales. En AINE, educamos a las familias y a los entornos del nino sobre la naturaleza de los tics, proporcionamos estrategias para manejar situaciones sociales y ofrecemos apoyo emocional para que el nino construya una autoestima solida a pesar de los desafios.",
  },
  "problemas-motores": {
    paragraphs: [
      "Los problemas motores y de coordinacion abarcan dificultades en la motricidad gruesa (caminar, correr, saltar, equilibrio), la motricidad fina (escribir, abotonarse la ropa, usar tijeras) o ambas. La dispraxia, tambien conocida como trastorno del desarrollo de la coordinacion, es una de las condiciones mas comunes en esta categoria.",
      "Estos problemas pueden afectar la vida diaria del nino de maneras que no siempre son evidentes. Dificultades para vestirse, comer con cubiertos, participar en actividades deportivas o escribir de manera legible pueden generar dependencia, frustacion y evitacion de actividades. En el contexto escolar, los problemas motores finos pueden impactar directamente el rendimiento academico.",
      "En AINE, nuestros terapeutas fisicos y ocupacionales realizan una evaluacion detallada de las habilidades motoras del nino y crean programas de intervencion que mejoran la coordinacion, el equilibrio, la fuerza y la destreza manual. El objetivo es que cada nino alcance el mayor nivel posible de independencia en sus actividades cotidianas y participe plenamente en la vida escolar y social.",
    ],
    keyAspects: [
      "Dificultades en motricidad gruesa, fina o ambas",
      "Incluye condiciones como la dispraxia",
      "Afecta actividades cotidianas: vestirse, escribir, comer",
      "Impacto en participacion deportiva y escolar",
      "Terapia fisica y ocupacional personalizada",
      "Enfoque en independencia y participacion plena",
    ],
    impact:
      "Los problemas motores pueden hacer que actividades que para otros ninos son naturales se conviertan en retos diarios. La dificultad para participar en juegos, deportes y actividades escolares puede afectar la confianza del nino y su relacion con pares. En AINE, trabajamos para que cada nino desarrolle las habilidades que necesita para sentirse capaz y participar activamente en su vida cotidiana, y para que las familias tengan estrategias practicas para apoyar el desarrollo motor en casa.",
  },
};

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    return { title: "Condicion no encontrada" };
  }

  return {
    title: condition.name,
    description: condition.description,
    openGraph: {
      title: `${condition.name} | AINE`,
      description: condition.description,
      url: `https://aine.mx/condiciones/${condition.slug}`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function CondicionDetailPage({ params }: Props) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  const content = conditionContent[condition.slug];
  const currentIndex = conditions.indexOf(condition);
  const prevCondition = currentIndex > 0 ? conditions[currentIndex - 1] : null;
  const nextCondition =
    currentIndex < conditions.length - 1 ? conditions[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: condition.color }}
          />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
          <div
            className="absolute top-40 right-16 w-16 h-16 rounded-full opacity-20 hidden lg:block"
            style={{ backgroundColor: condition.color }}
          />
          <div className="absolute bottom-12 left-24 w-8 h-8 bg-cream rounded-full opacity-60 hidden lg:block" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in-up">
            <Link
              href="/condiciones"
              className="inline-flex items-center gap-2 text-body-light hover:text-salmon transition-brand text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Todas las condiciones
            </Link>
          </div>

          <div className="animate-fade-in-up">
            {/* Color badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${condition.color}15` }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: condition.color }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: condition.color }}
              >
                {condition.shortName}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
              {condition.name}
            </h1>

            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-3xl">
              {condition.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      {content && (
        <>
          {/* Detailed description */}
          <section className="pb-16 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray/5 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${condition.color}20` }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: condition.color }}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">
                    Que es {condition.shortName.toLowerCase().startsWith("el") ? "" : condition.shortName.match(/^(Tics|Problemas|Altas|Retrasos)/) ? "" : "el "}
                    {condition.shortName}
                  </h2>
                </div>

                <div className="space-y-5">
                  {content.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-body leading-relaxed text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Aspects */}
          <section className="pb-16 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-cream-light rounded-3xl p-8 sm:p-12 border border-salmon/5">
                <h2 className="text-2xl font-bold text-heading mb-8">
                  Aspectos clave
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {content.keyAspects.map((aspect, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray/5"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${condition.color}20` }}
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: condition.color }}
                        />
                      </div>
                      <p className="text-body text-sm leading-relaxed font-medium">
                        {aspect}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="pb-16 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
                style={{ backgroundColor: `${condition.color}10` }}
              >
                {/* Decorative blob */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                  style={{ backgroundColor: condition.color }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <svg
                      className="w-7 h-7"
                      style={{ color: condition.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <h2 className="text-2xl font-bold text-heading">
                      Impacto en la familia
                    </h2>
                  </div>

                  <p className="text-body leading-relaxed text-base">
                    {content.impact}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-salmon rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-white/5 rounded-full" />
            </div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                El primer paso es buscar ayuda
              </h2>
              <p className="text-white/85 text-lg max-w-lg mx-auto mb-8">
                Si sospechas que tu hijo puede tener{" "}
                {condition.shortName.toLowerCase()}, nuestro equipo esta listo
                para orientarte y acompanarte.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiero-participar"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-salmon font-bold rounded-full hover:bg-cream transition-brand shadow-lg text-base"
                >
                  Agenda una valoracion
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/528117841969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-bold rounded-full hover:bg-white/25 transition-brand text-base"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between conditions */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevCondition ? (
              <Link
                href={`/condiciones/${prevCondition.slug}`}
                className="group flex items-center gap-3 text-body-light hover:text-salmon transition-brand"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wide text-body-light">
                    Anterior
                  </span>
                  <p className="font-semibold text-heading group-hover:text-salmon transition-brand text-sm">
                    {prevCondition.shortName}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/condiciones"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-cream rounded-full text-body-light hover:text-salmon transition-brand text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Ver todas
            </Link>

            {nextCondition ? (
              <Link
                href={`/condiciones/${nextCondition.slug}`}
                className="group flex items-center gap-3 text-body-light hover:text-salmon transition-brand"
              >
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wide text-body-light">
                    Siguiente
                  </span>
                  <p className="font-semibold text-heading group-hover:text-salmon transition-brand text-sm">
                    {nextCondition.shortName}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
