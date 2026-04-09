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
      "El Trastorno del Espectro Autista (TEA) es una condición del neurodesarrollo que se manifiesta en diferencias en la comunicación social, la interacción con otros y patrones de comportamiento repetitivos. Cada persona dentro del espectro es única: algunos niños pueden tener dificultades significativas con el lenguaje verbal, mientras que otros desarrollan un vocabulario avanzado pero enfrentan retos en la comunicación no verbal y la comprensión de contextos sociales.",
      "Las fortalezas de los niños con TEA son notables. Muchos demuestran una memoria excepcional, una atención al detalle fuera de lo común, habilidades avanzadas en reconocimiento de patrones y un pensamiento sistemático que les permite sobresalir en áreas específicas de interés. También pueden presentar sensibilidades sensoriales, ya sea hipersensibilidad o hiposensibilidad a estímulos como sonidos, texturas o luces.",
      "La intervención temprana es fundamental. Cuando se detecta y se acompaña desde edades tempranas, los niños con TEA logran desarrollar herramientas de comunicación, habilidades sociales y estrategias de autorregulación que transforman su calidad de vida. En AINE, ofrecemos una evaluación multidisciplinaria completa y planes de terapia individualizados que respetan la identidad de cada niño.",
    ],
    keyAspects: [
      "Diferencias en comunicación social e interacción",
      "Patrones de comportamiento repetitivos o restringidos",
      "Sensibilidades sensoriales (hiper o hiposensibilidad)",
      "Fortalezas en memoria, atención al detalle y patrones",
      "Espectro amplio: cada caso es único",
      "La intervención temprana mejora significativamente los resultados",
    ],
    impact:
      "El TEA impacta a toda la familia. Los padres a menudo enfrentan incertidumbre, estrés y la necesidad de adaptar rutinas y entornos. Los hermanos también necesitan comprensión y apoyo. En AINE, no solo trabajamos con el niño, sino con toda la familia, ofreciendo orientación, talleres y un espacio seguro donde cada miembro encuentra las herramientas para construir un entorno que potencie el desarrollo de su hijo.",
  },
  tdah: {
    paragraphs: [
      "El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es una condición neurobiológica que afecta la capacidad para mantener la atención, controlar impulsos y regular los niveles de actividad. No es un problema de disciplina ni de voluntad: es una diferencia en el funcionamiento del cerebro que afecta entre el 5% y el 7% de los niños a nivel mundial.",
      "El TDAH se presenta en tres subtipos: predominantemente inatento (dificultad para concentrarse y organizarse), predominantemente hiperactivo-impulsivo (necesidad constante de movimiento y dificultad para esperar), y combinado. Muchos niños son diagnosticados durante la etapa escolar, cuando las demandas académicas y sociales hacen más evidentes las dificultades.",
      "En AINE, realizamos una evaluación integral que incluye observación clínica, pruebas neuropsicológicas y entrevistas con la familia y la escuela. Nuestro enfoque combina terapia conductual, entrenamiento en habilidades ejecutivas, apoyo a la familia y, cuando es necesario, coordinación con psiquiatría infantil para un manejo farmacológico responsable.",
    ],
    keyAspects: [
      "Condición neurobiológica, no un problema de conducta",
      "Tres subtipos: inatento, hiperactivo-impulsivo y combinado",
      "Diagnóstico frecuente en edad escolar",
      "Afecta funciones ejecutivas: organización, planificación, memoria de trabajo",
      "Responde bien a enfoques combinados (terapia + apoyo familiar)",
      "Muchos niños con TDAH tienen creatividad y energía excepcionales",
    ],
    impact:
      "El TDAH puede generar frustración tanto en el niño como en su familia. Los conflictos en el hogar, las dificultades escolares y la incomprensión social son comunes. Sin embargo, con el acompañamiento adecuado, los niños con TDAH descubren que su energía, creatividad y forma diferente de pensar son verdaderas fortalezas. En AINE, ayudamos a las familias a entender la condición, ajustar expectativas y crear estrategias que funcionen en casa y en la escuela.",
  },
  "altas-capacidades": {
    paragraphs: [
      "Las Altas Capacidades Intelectuales se refieren a un potencial cognitivo significativamente superior al promedio. Estos niños no solo son \"inteligentes\": su forma de procesar información, su curiosidad intensa y su sensibilidad emocional los hacen diferentes de sus pares. Pueden aprender rápidamente, hacer conexiones inusuales entre ideas y mostrar un interés profundo por temás que van más alla de lo esperado para su edad.",
      "Sin embargo, las altas capacidades también traen desafios únicos. El aburrimiento en el aula, la sensacion de no encajar, el desarrollo asincrónico (donde su intelecto avanza más rapido que su madurez emocional o social) y la frustración cuando las cosas no salen perfectas son realidades frecuentes. Sin identificación ni apoyo, estos niños pueden presentar bajo rendimiento académico, ansiedad o aislamiento social.",
      "En AINE, ofrecemos evaluación especializada para identificar altas capacidades, seguida de estrategias de enriquecimiento académico, apoyo emocional y orientación a familias y escuelas. Nuestro objetivo es que cada niño con altas capacidades pueda desarrollar su potencial completo sin sacrificar su bienestar emocional.",
    ],
    keyAspects: [
      "Potencial intelectual significativamente superior al promedio",
      "Curiosidad intensa y aprendizaje acelerado",
      "Desarrollo asincrónico: intelecto vs. madurez emocional",
      "Riesgo de aburrimiento, aislamiento y bajo rendimiento si no se detecta",
      "Sensibilidad emocional elevada",
      "Necesidad de estimulación adecuada y enriquecimiento",
    ],
    impact:
      "Las familias de niños con altas capacidades a menudo se sienten incomprendidas. La sociedad tiende a pensar que estos niños \"no necesitan ayuda\", pero la realidad es diferente. Sin el acompañamiento correcto, pueden desarrollar problemás emocionales y académicos significativos. En AINE, trabajamos con la familia completa para crear un entorno donde el niño se sienta comprendido, estimulado y emocionalmente seguro.",
  },
  "síndrome-de-down": {
    paragraphs: [
      "El Síndrome de Down es una condición genética causada por la presencia de una copia extra del cromosoma 21 (trisomía 21). Es la alteración cromosómica más comun y afecta aproximadamente a 1 de cada 700 nacimientos. Cada niño con Síndrome de Down es único: sus capacidades, personalidad y ritmo de desarrollo varian ampliamente.",
      "La intervención temprana es uno de los factores más importantes para maximizar el desarrollo de niños con Síndrome de Down. Los programás de estimulación desde los primeros meses de vida ayudan a fortalecer habilidades de comunicación, motricidad y cognición. Con el apoyo adecuado, los niños con Síndrome de Down alcanzan niveles de autonomía, participación social y calidad de vida que hace decadas eran impensables.",
      "En AINE, nuestro enfoque transdisciplinario abarca terapia de lenguaje para potenciar la comunicación, terapia física y ocupacional para el desarrollo motor, neuropsicología para fortalecer habilidades cognitivas y apoyo psicologico para la familia. Cada plan es personalizado segun las necesidades y fortalezas de cada niño.",
    ],
    keyAspects: [
      "Condición genética: trisomía del cromosoma 21",
      "Cada niño tiene un perfil único de desarrollo",
      "La estimulación temprana maximiza autonomía y habilidades",
      "Enfoque en comunicación, motricidad y cognición",
      "Potencial real de inclusión social y académica",
      "Acompañamiento a la familia desde el diagnóstico",
    ],
    impact:
      "Recibir el diagnóstico de Síndrome de Down transforma la vida de una familia. Las preguntas, los miedos y la incertidumbre son naturales. En AINE, acompañamos a las familias desde el primer momento, ofreciendo información clara, apoyo emocional y un plan de accion concreto. Nuestro objetivo es que cada familia vea las posibilidades reales de su hijo y cuente con las herramientas para apoyar su desarrollo al maximo.",
  },
  "retrasos-en-el-desarrollo": {
    paragraphs: [
      "Los retrasos en el desarrollo ocurren cuando un niño no alcanza los hitos del desarrollo (como caminar, hablar o interactuar socialmente) en los tiempos esperados. Estos retrasos pueden afectar una o varias areas: motricidad, lenguaje, cognición, habilidades sociales o habilidades de la vida diaria.",
      "Las causas pueden ser diversas: factores genéticos, complicaciones durante el embarazo o parto, condiciones neurológicas, factores ambientales o causas que aun no se han identificado. Lo más importante es que la detección temprana y la intervención oportuna son fundamentales. Cuanto antes se identifique un retraso, mayores son las posibilidades de que el niño alcance su máximo potencial.",
      "En AINE, realizamos evaluaciónes integrales para determinar el tipo y grado de retraso, identificar las causas subyacentes cuando es posible y crear programás de intervención personalizados. Nuestros programás de estimulación temprana combinan terapias especializadas con orientación a la familia para crear un entorno que favorezca el desarrollo.",
    ],
    keyAspects: [
      "No alcanzar hitos del desarrollo en los tiempos esperados",
      "Puede afectar motricidad, lenguaje, cognición o habilidades sociales",
      "Causas diversas: genéticas, neurológicas, ambientales",
      "La detección temprana es clave para mejores resultados",
      "Programás de estimulación temprana personalizados",
      "Evaluación integral para identificar causas y áreas de intervención",
    ],
    impact:
      "Los padres suelen ser los primeros en notar que algo es diferente en el desarrollo de su hijo. Esa intuicion es valiosa y merece atención profesional. En AINE, validamos las preocupaciones de las familias, realizamos evaluaciónes completas y ofrecemos respuestas claras. Saber que hacer y por donde empezar reduce la angustia y permite a las familias enfocarse en lo que realmente importa: apoyar a su hijo.",
  },
  "trastornos-aprendizaje": {
    paragraphs: [
      "Los trastornos del aprendizaje incluyen la dislexia (dificultad con la lectura), la disgrafia (dificultad con la escritura) y la discalculia (dificultad con las matemáticas). Estas condiciones no están relacionadas con la inteligencia: los niños con trastornos del aprendizaje suelen tener una capacidad intelectual normal o superior, pero procesan cierto tipo de información de manera diferente.",
      "Estos trastornos se hacen evidentes cuando el niño comienza la etapa escolar y enfrenta demandas académicas formales. Sin diagnóstico, los niños pueden ser etiquetados como \"flojos\" o \"desobedientes\", lo que afecta profundamente su autoestima y motivacion. El diagnóstico adecuado no solo explica las dificultades, sino que abre la puerta a estrategias específicas que permiten al niño aprender de la forma que funciona para el.",
      "En AINE, evaluamos las habilidades cognitivas y académicas del niño para determinar el tipo de trastorno del aprendizaje y su impacto. Trabajamos con psicopedagogía y neuropsicología para crear estrategias de enseñanza personalizadas, y orientamos a las familias y escuelas sobre las adaptaciones necesarias para que el niño pueda tener exito académico.",
    ],
    keyAspects: [
      "Incluyen dislexia, disgrafia y discalculia",
      "No están relacionados con el nivel de inteligencia",
      "Se manifiestan con mayor claridad en la etapa escolar",
      "El diagnóstico temprano previene danos a la autoestima",
      "Estrategias personalizadas de enseñanza y aprendizaje",
      "Coordinación con la escuela para adaptaciones necesarias",
    ],
    impact:
      "Un trastorno del aprendizaje no diagnosticado puede hacer que un niño brillante se sienta incapaz. La frustración diaria en la escuela, la comparacion con compañeros y las dificultades con las tareas afectan no solo el rendimiento académico, sino la relacion del niño con el aprendizaje en general. En AINE, ayudamos a las familias a entender que su hijo no tiene un problema de esfuerzo, sino una forma diferente de procesar información, y les damos las herramientas para apoyarlo.",
  },
  "trastorno-del-lenguaje": {
    paragraphs: [
      "El trastorno del lenguaje afecta la capacidad de un niño para comprender o expresarse a traves del habla. Puede manifestarse como retrasos en las primeras palabras, un vocabulario limitado para su edad, dificultad para formar oraciones complejas o problemás para seguir instrucciones de varios pasos. Algunos niños tienen dificultades tanto expresivas como receptivas.",
      "El lenguaje es la herramienta fundamental para la comunicación, el aprendizaje y la participación social. Cuando un niño tiene dificultades en está area, el impacto se extiende a su rendimiento académico, sus relaciones con pares y su autoestima. Los niños que no pueden expresar lo que sienten o necesitan a menudo muestran frustración a traves de conductas desafiantes.",
      "En AINE, nuestros terapeutas de lenguaje realizan una evaluación completa de las habilidades comúnicativas del niño y diseñan programás de intervención que abordan tanto la expresión como la comprensión. La terapia de lenguaje, combinada con estrategias para el hogar y la escuela, abre puertas a una comunicación efectiva y una participación social plena.",
    ],
    keyAspects: [
      "Afecta comprensión, expresión o ambas",
      "Puede incluir retrasos en primeras palabras y vocabulario limitado",
      "Dificultad con oraciones complejas e instrucciones de varios pasos",
      "Impacta rendimiento académico y relaciones sociales",
      "La terapia de lenguaje especializada produce mejoras significativas",
      "Estrategias complementarias para el hogar y la escuela",
    ],
    impact:
      "Las dificultades del lenguaje pueden aislar a un niño de su entorno. No poder pedir ayuda, participar en conversaciones o expresar emociones genera frustración y, en muchos casos, problemás de conducta que enmascaran la dificultad real. En AINE, trabajamos para que cada niño encuentre su voz, ya sea a traves del habla, de estrategias de comunicación alternativa o de ambas, y para que la familia cuente con las herramientas para facilitar la comunicación en casa.",
  },
  "tics-tourette": {
    paragraphs: [
      "Los tics son movimientos o vocalizaciónes involuntarios, subitos y repetitivos. Pueden ser simples (parpadeo excesivo, carraspeo) o complejos (gestos faciales elaborados, repetición de palabras). El Síndrome de Tourette se diagnostica cuando una persona presenta tics motores y vocales durante más de un ano. Ambas condiciones suelen aparecer en la infancia, típicamente entre los 5 y los 10 años.",
      "Los tics tienden a fluctuar en frecuencia e intensidad. El estrés, la ansiedad, la fatiga y la emocion intensa pueden aumentar su aparicion, mientras que la concentracion en actividades de interés suele reducirlos. Es comun que los tics coexistan con otras condiciones como TDAH, ansiedad o trastorno obsesivo-compulsivo, lo que hace importante una evaluación integral.",
      "En AINE, ofrecemos un abordaje comprensivo que incluye evaluación neurológica, apoyo psicologico y estrategias conductuales como la terapia de reversión de hábitos. Trabajamos con el niño para que comprenda su condición sin sentirse definido por ella, y con la familia y la escuela para crear un entorno de comprensión y aceptación.",
    ],
    keyAspects: [
      "Movimientos o vocalizaciónes involuntarios y repetitivos",
      "Tics simples y complejos; motores y vocales",
      "El Síndrome de Tourette incluye ambos tipos por más de un ano",
      "Fluctuan con el estrés, la fatiga y las emociones",
      "Frecuente coexistencia con TDAH, ansiedad u TOC",
      "Estrategias conductuales efectivas para el manejo",
    ],
    impact:
      "Los tics pueden generar vergenza, burlas y aislamiento social en los niños que los presentan. Las familias a menudo enfrentan incomprensión por parte de escuelas y entornos sociales. En AINE, educamos a las familias y a los entornos del niño sobre la naturaleza de los tics, proporcionamos estrategias para manejar situaciones sociales y ofrecemos apoyo emocional para que el niño construya una autoestima solida a pesar de los desafios.",
  },
  "problemas-motores": {
    paragraphs: [
      "Los problemás motores y de coordinación abarcan dificultades en la motricidad gruesa (caminar, correr, saltar, equilibrio), la motricidad fina (escribir, abotonarse la ropa, usar tijeras) o ambas. La dispraxia, también conocida como trastorno del desarrollo de la coordinación, es una de las condiciones más comunes en está categoria.",
      "Estos problemás pueden afectar la vida diaria del niño de maneras que no siempre son evidentes. Dificultades para vestirse, comer con cubiertos, participar en actividades deportivas o escribir de manera legible pueden generar dependencia, frustración y evitacion de actividades. En el contexto escolar, los problemás motores finos pueden impactar directamente el rendimiento académico.",
      "En AINE, nuestros terapeutas fisicos y ocupacionales realizan una evaluación detallada de las habilidades motoras del niño y crean programás de intervención que mejoran la coordinación, el equilibrio, la fuerza y la destreza manual. El objetivo es que cada niño alcance el mayor nivel posible de independencia en sus actividades cotidianas y participe plenamente en la vida escolar y social.",
    ],
    keyAspects: [
      "Dificultades en motricidad gruesa, fina o ambas",
      "Incluye condiciones como la dispraxia",
      "Afecta actividades cotidianas: vestirse, escribir, comer",
      "Impacto en participación deportiva y escolar",
      "Terapia física y ocupacional personalizada",
      "Enfoque en independencia y participación plena",
    ],
    impact:
      "Los problemás motores pueden hacer que actividades que para otros niños son naturales se conviertan en retos diarios. La dificultad para participar en juegos, deportes y actividades escolares puede afectar la confíanza del niño y su relacion con pares. En AINE, trabajamos para que cada niño desarrolle las habilidades que necesita para sentirse capaz y participar activamente en su vida cotidiana, y para que las familias tengan estrategias practicas para apoyar el desarrollo motor en casa.",
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
    return { title: "Condición no encontrada" };
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

  const conditionJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    alternateName: condition.shortName,
    description: condition.description,
    ...(content && {
      signOrSymptom: content.keyAspects.map((aspect) => ({
        "@type": "MedicalSignOrSymptom",
        name: aspect,
      })),
    }),
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Intervención transdisciplinaria en AINE",
      description:
        "Plan de intervención personalizado con equipo transdisciplinario de profesionales de salud.",
    },
    url: `https://aine.mx/condiciones/${condition.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionJsonLd) }}
      />
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
                    Qué es {condition.shortName.toLowerCase().startsWith("el") ? "" : condition.shortName.match(/^(Tics|Problemas|Altas|Retrasos)/) ? "" : "el "}
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
                {condition.shortName.toLowerCase()}, nuestro equipo está listo
                para orientarte y acompañarte.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiero-participar"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-salmon font-bold rounded-full hover:bg-cream transition-brand shadow-lg text-base"
                >
                  Agenda una valoración
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
