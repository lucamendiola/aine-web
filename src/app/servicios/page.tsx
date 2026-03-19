import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/conditions";
import { AineIcon } from "@/components/AineLogo";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "15 servicios especializados para niños y jóvenes con neurodivergencias. Diagnóstico, terapias, neurología pediátrica y más bajo un mismo techo en Monterrey.",
  openGraph: {
    title: "Servicios | AINE",
    description:
      "Atención integral con 15 servicios especializados para neurodivergencias en Monterrey.",
    url: "https://aine.mx/servicios",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  Diagnóstico: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Pediatría del desarrollo": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Neuropsicología: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  "Psicología clínica": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Terapia de lenguaje": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  "Terapia ocupacional": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  ),
  "Terapia física": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "Terapia conductual": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "Terapia del neurodesarrollo": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  "Neurología pediátrica": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "Psiquiatría infantil": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Nutrición: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  Psicopedagogía: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  "Asesoría a padres": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Capacitaciones: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const serviceColors = [
  "#ff856c", "#4a9e8e", "#58b1f2", "#fba649", "#f3bb65",
  "#f56c5a", "#4a9e8e", "#58b1f2", "#ff856c", "#fba649",
  "#f3bb65", "#4a9e8e", "#58b1f2", "#ff856c", "#f56c5a",
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute top-32 right-16 w-16 h-16 bg-cream rounded-full opacity-60 hidden lg:block" />
          <div className="absolute bottom-20 left-20 w-10 h-10 bg-salmon/20 rounded-full hidden lg:block" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal rounded-full" />
              <span className="text-sm font-medium text-teal">
                15 especialidades bajo un mismo techo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight mb-6">
              Atención integral{" "}
              <span className="text-salmon">bajo un mismo techo</span>
            </h1>

            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Nuestro equipo transdisciplinario ofrece 15 servicios especializados
              para que tu hijo reciba todo el apoyo que necesita sin fragmentar la
              atención.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-salmon via-teal to-blue" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service, index) => {
              const color = serviceColors[index % serviceColors.length];
              const icon = serviceIcons[service.name];

              return (
                <div
                  key={service.name}
                  className="group relative bg-cream-light rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-brand"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <div style={{ color }}>
                      {icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-heading mb-2 group-hover:text-salmon transition-brand">
                    {service.name}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative dot */}
                  <div
                    className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-brand"
                    style={{ backgroundColor: color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transdisciplinary Approach */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-salmon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-8 bg-teal/90 blob-shape-2" />
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="text-center text-white">
                    <AineIcon className="w-16 h-16 mx-auto mb-4" color="#ffffff" />
                    <p className="text-lg font-bold italic leading-relaxed">
                      &ldquo;No tratamos condiciones. Acompañamos personas
                      completas.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-salmon/20 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue/20 rounded-full" />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <span className="text-sm font-semibold text-teal uppercase tracking-widest">
                Nuestro Enfoque
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading leading-tight">
                Un enfoque{" "}
                <span className="text-salmon">transdisciplinario</span>
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                En AINE, nuestros profesionales no trabajan de forma aislada. Cada
                niño es evaluado por un equipo que colabora y se comúnica
                constantemente para crear un plan de intervención unificado.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-salmon/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading">Evaluación integral</h3>
                    <p className="text-body text-sm mt-1">
                      Cada caso es revisado por múltiples especialistas que cruzan
                      observaciones para un diagnóstico preciso y completo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading">Comúnicacion continua</h3>
                    <p className="text-body text-sm mt-1">
                      Terapeutas, médicos y psicólogos comparten avances y ajustan
                      estrategias en conjunto, no en silos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading">La familia como centro</h3>
                    <p className="text-body text-sm mt-1">
                      La asesoría a padres y las capacitaciones aseguran que el
                      progreso en consultorio se refuerce en casa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-salmon relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-white/5 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Cómo funciona
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
              Un proceso claro y humano, de principio a fin.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Contacto", desc: "Nos escribes por WhatsApp o llenas el formulario de valoración." },
              { step: "02", title: "Valoracion", desc: "Nuestro equipo realiza una evaluación integral de tu hijo." },
              { step: "03", title: "Plan de intervención", desc: "Diseñamos un plan personalizado con los servicios que necesita." },
              { step: "04", title: "Acompañamiento", desc: "Terapias, seguimiento y ajustes continuos hasta alcanzar los objetivos." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AineIcon className="w-16 h-16 mx-auto mb-6" color="#ff856c" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-6">
            Tu hijo merece atención completa,{" "}
            <span className="text-salmon">no fragmentada.</span>
          </h2>
          <p className="text-lg text-body max-w-xl mx-auto mb-10">
            Agenda una valoración con nuestro equipo transdisciplinario. El primer
            paso es buscar ayuda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiero-participar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-salmon text-white font-bold rounded-full hover:bg-salmon-dark transition-brand shadow-xl shadow-salmon/25 text-base"
            >
              Agenda una valoración
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/528117841969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-brand shadow-lg text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
