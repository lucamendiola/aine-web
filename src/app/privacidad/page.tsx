import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de AINE A.C. Conoce como recopilamos, usamos y protegemos tus datos personales.",
  openGraph: {
    title: "Aviso de Privacidad | AINE",
    description:
      "Aviso de privacidad de AINE A.C. conforme a la Ley Federal de Protección de Datos Personales.",
    url: "https://aine.mx/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal rounded-full" />
            <span className="text-sm font-medium text-teal">Legal</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-heading leading-tight">
            Aviso de Privacidad
          </h1>
          <p className="mt-4 text-body-light">
            Última actualizacion: marzo 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray/5 space-y-10">
            {/* Responsable */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                1. Responsable del tratamiento
              </h2>
              <p className="text-body leading-relaxed">
                <strong className="text-heading">AINE A.C.</strong> (en adelante
                &ldquo;AINE&rdquo;), con domicilio en Amatista 107, Col.
                Pedregal del Valle, C.P. 66280, Monterrey, Nuevo Leon, Mexico,
                es la responsable del tratamiento de tus datos personales
                conforme a la Ley Federal de Protección de Datos Personales en
                Posesión de los Particulares (LFPDPPP).
              </p>
            </div>

            {/* Datos que recopilamos */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                2. Datos personales que recopilamos
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Para las finalidades descritas en este aviso, AINE puede
                recopilar las siguientes categorias de datos personales:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-salmon rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    <strong className="text-heading">
                      Datos de identificacion:
                    </strong>{" "}
                    nombre completo, correo electrónico, número telefonico,
                    dirección, fecha de nacimiento.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-salmon rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    <strong className="text-heading">
                      Datos de menores de edad:
                    </strong>{" "}
                    nombre, edad, fecha de nacimiento, grado escolar e
                    información del tutor legal. Estos datos se recopilan
                    únicamente con el consentimiento expreso del padre, madre o
                    tutor legal.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-salmon rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    <strong className="text-heading">
                      Datos sensibles de salud:
                    </strong>{" "}
                    condición de neurodivergencia, historial clínico, resultados
                    de evaluaciónes neuropsicologicas, diagnósticos previos y
                    tratamientos recibidos. Estos datos se manejan con las
                    medidas de seguridad más estrictas y solo se recopilan con
                    consentimiento expreso.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-salmon rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    <strong className="text-heading">
                      Datos de navegacion:
                    </strong>{" "}
                    dirección IP, tipo de navegador, páginas visitadas y cookies
                    técnicas necesarias para el funcionamiento del sitio.
                  </span>
                </li>
              </ul>
            </div>

            {/* Uso de datos */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                3. Uso de los datos personales
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Los datos personales que recopilamos se utilizan para las
                siguientes finalidades:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    Agendar y gestionar citas y valoraciónes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    Prestacion de servicios de diagnóstico, terapia y
                    acompañamiento.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    Inscripcion y seguimiento en programás de atención.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    Comúnicacion con las familias sobre avances, citas y
                    novedades relevantes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0" />
                  <span className="text-body">
                    Generacion de estadísticas internas anonimizadas para
                    mejorar nuestros servicios.
                  </span>
                </li>
              </ul>
            </div>

            {/* No vende datos */}
            <div className="bg-cream-light rounded-2xl p-6 border border-salmon/10">
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                4. Protección de tus datos
              </h2>
              <p className="text-body leading-relaxed">
                <strong className="text-salmon">
                  AINE NO vende, renta ni comercializa datos personales
                </strong>{" "}
                bajo ninguna circunstancia. Tus datos serán tratados
                exclusivamente para los fines descritos en este aviso y no seran
                compartidos con terceros, salvo que sea requerido por autoridad
                competente conforme a la legislacion aplicable.
              </p>
            </div>

            {/* Derechos ARCO */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                5. Derechos ARCO
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Como titular de tus datos personales, tienes derecho a:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-cream-light rounded-xl p-4">
                  <p className="font-bold text-heading text-sm">Acceso</p>
                  <p className="text-body text-sm mt-1">
                    Conocer que datos personales tenemos sobre ti.
                  </p>
                </div>
                <div className="bg-cream-light rounded-xl p-4">
                  <p className="font-bold text-heading text-sm">
                    Rectificación
                  </p>
                  <p className="text-body text-sm mt-1">
                    Corregir datos inexactos o incompletos.
                  </p>
                </div>
                <div className="bg-cream-light rounded-xl p-4">
                  <p className="font-bold text-heading text-sm">Cancelación</p>
                  <p className="text-body text-sm mt-1">
                    Solicitar la eliminacion de tus datos.
                  </p>
                </div>
                <div className="bg-cream-light rounded-xl p-4">
                  <p className="font-bold text-heading text-sm">Oposición</p>
                  <p className="text-body text-sm mt-1">
                    Oponerte al tratamiento de tus datos para fines específicos.
                  </p>
                </div>
              </div>
              <p className="text-body leading-relaxed">
                Para ejercer cualquiera de estos derechos, envia un correo a{" "}
                <a
                  href="mailto:hola@aine.mx"
                  className="text-salmon font-semibold hover:underline"
                >
                  hola@aine.mx
                </a>{" "}
                con tu solicitud. AINE respondera en un plazo máximo de{" "}
                <strong className="text-heading">20 dias habiles</strong> a
                partir de la recepción de tu solicitud.
              </p>
            </div>

            {/* Seguridad */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                6. Medidas de seguridad
              </h2>
              <p className="text-body leading-relaxed">
                AINE implementa medidas de seguridad administrativas, técnicas y
                físicas para proteger tus datos personales contra dano, pérdida,
                alteración, destrucción o uso no autorizado. Estas medidas
                incluyen, entre otras: firewalls, cifrado SSL en nuestro sitio
                web, controles de acceso restringido y protocolos internos de
                manejo de información confidencial.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                7. Uso de cookies
              </h2>
              <p className="text-body leading-relaxed">
                Nuestro sitio web utiliza cookies técnicas necesarias para su
                correcto funcionamiento. Estas cookies no recopilan información
                personal identificable y se eliminan al cerrar el navegador.
              </p>
            </div>

            {/* Cambios */}
            <div>
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                8. Cambios al aviso de privacidad
              </h2>
              <p className="text-body leading-relaxed">
                AINE se reserva el derecho de modificar este aviso de privacidad
                en cualquier momento. Cualquier cambio sera publicado en esta
                misma página con la fecha de actualizacion correspondiente.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-teal/5 rounded-2xl p-6 border border-teal/10">
              <h2 className="text-2xl font-extrabold text-heading mb-4">
                9. Contacto
              </h2>
              <p className="text-body leading-relaxed">
                Para cualquier duda o solicitud relacionada con el tratamiento de
                tus datos personales, puedes contactarnos en:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-body">
                  <strong className="text-heading">Email:</strong>{" "}
                  <a
                    href="mailto:hola@aine.mx"
                    className="text-salmon font-semibold hover:underline"
                  >
                    hola@aine.mx
                  </a>
                </p>
                <p className="text-body">
                  <strong className="text-heading">Dirección:</strong> Amatista
                  107, Col. Pedregal del Valle, C.P. 66280, Monterrey, NL
                </p>
                <p className="text-body">
                  <strong className="text-heading">Teléfono:</strong>{" "}
                  <a
                    href="tel:+528117841969"
                    className="text-salmon font-semibold hover:underline"
                  >
                    +52 81 1784 1969
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
