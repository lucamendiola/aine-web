import Link from "next/link";
import type { Metadata } from "next";
import { conditions } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Condiciones que atendemos",
  description:
    "Diagnosticamos y acompanamos 9 condiciones del neurodesarrollo: TEA, TDAH, Altas Capacidades, Sindrome de Down, retrasos del desarrollo, trastornos del aprendizaje, lenguaje, tics y problemas motores.",
  openGraph: {
    title: "Condiciones que atendemos | AINE",
    description:
      "Diagnosticamos y acompanamos 9 condiciones del neurodesarrollo en Monterrey.",
    url: "https://aine.mx/condiciones",
  },
};

export default function CondicionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-14 h-14 bg-cream rounded-full opacity-60 hidden lg:block" />
          <div className="absolute bottom-12 left-20 w-8 h-8 bg-salmon/20 rounded-full hidden lg:block" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal rounded-full" />
              <span className="text-sm font-medium text-teal">
                9 condiciones del neurodesarrollo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight mb-6">
              Cada mente es{" "}
              <span className="text-salmon">unica y extraordinaria</span>
            </h1>

            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Trabajamos con nueve condiciones del neurodesarrollo, ofreciendo
              diagnostico preciso y acompanamiento integral para cada una. Conoce
              mas sobre cada condicion y como podemos ayudar.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="pb-20 sm:pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/condiciones/${condition.slug}`}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-brand border border-gray/5 overflow-hidden"
              >
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1.5 rounded-t-3xl"
                  style={{ backgroundColor: condition.color }}
                />

                {/* Decorative blob */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-brand"
                  style={{ backgroundColor: condition.color }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-brand"
                    style={{ backgroundColor: `${condition.color}20` }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: condition.color }}
                    />
                  </div>

                  {/* Name */}
                  <h2 className="text-xl font-bold text-heading mb-3 group-hover:text-salmon transition-brand">
                    {condition.shortName}
                  </h2>

                  {/* Full name if different */}
                  {condition.shortName !== condition.name && (
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-3"
                      style={{ color: condition.color }}
                    >
                      {condition.name}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-body-light text-sm leading-relaxed mb-4">
                    {condition.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-salmon font-semibold text-sm group-hover:gap-3 transition-all">
                    Conoce mas
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-6">
            No tienes que tener un diagnostico{" "}
            <span className="text-salmon">para buscar ayuda</span>
          </h2>
          <p className="text-lg text-body max-w-xl mx-auto mb-10">
            Si tienes dudas sobre el desarrollo de tu hijo, nuestro equipo de
            profesionales puede orientarte. El primer paso es agendar una
            valoracion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiero-participar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-salmon text-white font-bold rounded-full hover:bg-salmon-dark transition-brand shadow-xl shadow-salmon/25 text-base"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-brand shadow-lg text-base"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
