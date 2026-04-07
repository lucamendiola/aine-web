import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donativos",
  description:
    "Tu donativo transforma la vida de niños y jóvenes con neurodivergencias. AINE es una asociación civil sin fines de lucro en Monterrey.",
  openGraph: {
    title: "Donativos | AINE",
    description:
      "Apoya a familias que no pueden costear atención especializada para sus hijos con neurodivergencias.",
    url: "https://aine.mx/donativos",
  },
};

const impactLevels = [
  {
    amount: "$500 MXN",
    description: "1 sesión de terapia especializada",
    color: "bg-blue",
  },
  {
    amount: "$2,000 MXN",
    description: "Evaluación neuropsicologica completa",
    color: "bg-teal",
  },
  {
    amount: "$5,000 MXN",
    description: "1 mes de terapia integral para un nino",
    color: "bg-orange",
  },
  {
    amount: "$15,000 MXN",
    description: "Proceso diagnóstico completo para una familia",
    color: "bg-salmon",
  },
];

export default function DonativosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-80 h-80 bg-salmon/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal rounded-full" />
            <span className="text-sm font-medium text-teal">
              Asociación Civil sin fines de lucro
            </span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight">
            Tu donativo{" "}
            <span className="text-salmon">transforma vidas</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed">
            Muchas familias no pueden costear el diagnóstico ni la atención
            especializada que sus hijos necesitan. Con tu apoyo, podemos
            cambiar esa realidad.
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="text-sm font-semibold text-teal uppercase tracking-widest">
                Por qué donar
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading leading-tight">
                Cada niño merece acceso a{" "}
                <span className="text-salmon">atención de calidad</span>
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                AINE es una asociación civil que atiende a niños y jóvenes con
                neurodivergencias en Monterrey. Muchas de las familias que llegan
                a nosotros no tienen los recursos para costear evaluaciónes,
                diagnósticos ni terapias especializadas en el sector privado.
              </p>
              <p className="mt-4 text-body text-lg leading-relaxed">
                Tu donativo permite que más niños reciban la atención que
                necesitan, independientemente de su situacion económica. Cada
                peso se destina directamente a servicios clínicos, materiales
                terapéuticos y el funcionamiento de nuestro centro.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-8 bg-teal/90 blob-shape-2" />
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="text-center text-white">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <p className="text-lg font-bold italic leading-relaxed">
                      &ldquo;Dar no es solo un acto de generosidad, es un acto
                      de justicia.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-salmon/20 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal via-salmon to-orange" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-salmon uppercase tracking-widest">
              Impacto de tu donativo
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Cada aportación cuenta
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Esto es lo que tu donativo puede lograr en la vida de un niño y
              su familia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {impactLevels.map((level) => (
              <div
                key={level.amount}
                className="relative group bg-cream-light rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5 text-center"
              >
                <div
                  className={`w-14 h-14 ${level.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-brand`}
                >
                  <svg
                    className="w-7 h-7 text-white"
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
                </div>
                <p className="text-2xl font-extrabold text-heading mb-3">
                  {level.amount}
                </p>
                <p className="text-body leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-salmon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal uppercase tracking-widest">
              Cómo donar
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Es muy sencillo
            </h2>
          </div>

          <div className="space-y-6">
            {/* Bank Transfer */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray/5">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-2">
                    Transferencia bancaria
                  </h3>
                  <p className="text-body leading-relaxed">
                    Contáctanos para recibir los datos bancarios de Servicios Terapéuticos de Apoyo y Rehabilitación, A.C.
                    y realizar tu donativo via transferencia o deposito.
                  </p>
                  <a
                    href="mailto:hola@aine.mx?subject=Quiero%20donar%20a%20AINE"
                    className="inline-flex items-center gap-2 mt-4 text-salmon font-semibold hover:gap-3 transition-all"
                  >
                    Solicitar datos bancarios
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray/5">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-2">
                    Coordinar por WhatsApp
                  </h3>
                  <p className="text-body leading-relaxed">
                    Escríbenos directamente para coordinar tu donativo. Estamos
                    disponibles para resolver cualquier duda.
                  </p>
                  <a
                    href="https://wa.me/528117841969?text=Hola%2C%20quiero%20hacer%20un%20donativo%20a%20AINE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-green-600 font-semibold hover:gap-3 transition-all"
                  >
                    Escribir por WhatsApp
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray/5">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-salmon/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 text-salmon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-2">
                    Contactar por email
                  </h3>
                  <p className="text-body leading-relaxed">
                    Envíanos un correo y te compartiremos toda la información
                    necesaria para realizar tu donativo.
                  </p>
                  <a
                    href="mailto:hola@aine.mx?subject=Quiero%20donar%20a%20AINE"
                    className="inline-flex items-center gap-2 mt-4 text-salmon font-semibold hover:gap-3 transition-all"
                  >
                    hola@aine.mx
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-6">
            Transparencia y confíanza
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed mb-4">
            AINE A.C. se compromete al uso etico y transparente de todos los
            donativos recibidos. Cada peso se destina directamente a la
            atención de niños y jóvenes con neurodivergencias.
          </p>
          <p className="text-body max-w-2xl mx-auto leading-relaxed">
            Somos una asociación civil legalmente constituida y operamos bajo
            los principios de integridad, rendición de cuentas y compromiso
            con las familias que confían en nosotros.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-salmon/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-6">
            Tu generosidad hace la diferencia.
            <br />
            <span className="text-salmon">Gracias por creer en ellos.</span>
          </h2>
          <p className="text-lg text-body max-w-xl mx-auto mb-10">
            Contáctanos hoy para hacer tu donativo y transformar la vida de
            un niño y su familia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/528117841969?text=Hola%2C%20quiero%20hacer%20un%20donativo%20a%20AINE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-salmon text-white font-bold rounded-full hover:bg-salmon-dark transition-brand shadow-xl shadow-salmon/25 text-base"
            >
              Quiero donar
            </a>
            <Link
              href="/quiero-participar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-heading/20 text-heading font-semibold rounded-full hover:border-salmon hover:text-salmon transition-brand text-base"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
