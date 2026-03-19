import Link from "next/link";
import { conditions } from "@/lib/conditions";
import { AineIcon } from "@/components/AineLogo";

const impactStats = [
  { number: "500+", label: "Familias acompanadas" },
  { number: "15", label: "Servicios especializados" },
  { number: "9", label: "Condiciones atendidas" },
  { number: "6", label: "Profesionales de salud" },
];

const values = [
  {
    title: "Inclusion",
    description:
      "Cada nino merece acceso a diagnostico y atencion de calidad, sin importar su condicion o circunstancia.",
    color: "bg-salmon",
  },
  {
    title: "Innovacion",
    description:
      "Nos adaptamos continuamente a los avances cientificos y tecnologicos para ofrecer soluciones transformadoras.",
    color: "bg-teal",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con honestidad, transparencia y conducta etica en cada interaccion con las familias que nos confian a sus hijos.",
    color: "bg-blue",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-18">
        {/* Background organic shapes - animated */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-salmon/10 rounded-full blur-3xl animate-drift-right" />
          <div className="absolute top-1/3 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl animate-drift-left" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl animate-drift-up" />
          {/* Decorative circles - animated */}
          <div className="absolute top-32 right-12 w-20 h-20 bg-cream rounded-full opacity-60 hidden lg:block animate-drift-left" />
          <div className="absolute bottom-24 left-16 w-12 h-12 bg-salmon/20 rounded-full hidden lg:block animate-orbit" />
          <div className="absolute top-48 left-1/3 w-6 h-6 bg-teal/30 rounded-full hidden lg:block animate-drift-up" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-salmon/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-salmon rounded-full" />
                <span className="text-sm font-medium text-salmon">
                  Asociacion Civil en Monterrey
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight mb-6">
                Una nueva luz,{" "}
                <span className="text-salmon">un mejor futuro</span>
              </h1>

              <p className="text-lg sm:text-xl text-body leading-relaxed mb-8 max-w-lg">
                Diagnosticamos y acompanamos a ninos y jovenes con
                neurodivergencias mediante una red integral de profesionales de
                salud. Porque cada mente es unica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
                <Link
                  href="/condiciones"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-heading/20 text-heading font-semibold rounded-full hover:border-salmon hover:text-salmon transition-brand text-base"
                >
                  Conoce las condiciones
                </Link>
              </div>

              {/* WhatsApp link */}
              <div className="mt-8">
                <a
                  href="https://wa.me/528117841969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-full hover:bg-green-500/20 transition-brand font-medium text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribe por WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Visual composition - animated */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Large coral circle - pulse + scale in */}
                <div className="absolute inset-4 bg-salmon/90 rounded-full animate-fade-in-scale animate-hero-pulse" />

                {/* Floating star icon - float + subtle rotation */}
                <div className="absolute -top-4 -left-4 animate-float-spin">
                  <AineIcon className="w-24 h-24" color="#ff856c" />
                </div>

                {/* Content inside circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-12 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
                    <p className="text-6xl font-extrabold mb-2">500+</p>
                    <p className="text-lg font-medium opacity-90">
                      familias acompanadas
                    </p>
                  </div>
                </div>

                {/* Satellite circles - staggered bounce in */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal/80 rounded-full flex items-center justify-center animate-bounce-in-delay-1 hover:scale-110 transition-brand">
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-xs opacity-80">servicios</p>
                  </div>
                </div>
                <div className="absolute top-8 -right-8 w-20 h-20 bg-orange/80 rounded-full flex items-center justify-center animate-bounce-in-delay-2 hover:scale-110 transition-brand">
                  <div className="text-center text-white">
                    <p className="text-lg font-bold">9</p>
                    <p className="text-[10px] opacity-80">condiciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Las Tres "i" */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-salmon via-teal to-blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-salmon uppercase tracking-widest">
              Nuestros Valores
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Las tres <span className="text-salmon">i</span>
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Los principios que guian cada interaccion con las familias que nos
              confian a sus hijos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {values.map((value) => (
              <div key={value.title} className="relative group">
                <div className="bg-cream-light rounded-3xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5">
                  <div
                    className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand`}
                  >
                    <span className="text-2xl font-extrabold text-white">
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-salmon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal uppercase tracking-widest">
              Condiciones que atendemos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Cada mente es unica y extraordinaria
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Trabajamos con nueve condiciones del neurodesarrollo, ofreciendo
              diagnostico preciso y acompanamiento integral para cada una.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/condiciones/${condition.slug}`}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-brand border border-gray/5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-brand"
                    style={{ backgroundColor: `${condition.color}20` }}
                  >
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: condition.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading group-hover:text-salmon transition-brand">
                      {condition.shortName}
                    </h3>
                    <p className="mt-1 text-sm text-body-light leading-relaxed line-clamp-2">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/condiciones"
              className="inline-flex items-center gap-2 text-salmon font-semibold hover:gap-3 transition-all"
            >
              Conoce todas las condiciones
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-salmon relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-white/5 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Nuestro impacto
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
              Cada numero representa una familia que encontro el apoyo que necesitaba.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 font-medium text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-8 bg-teal/90 blob-shape" />
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="text-center text-white">
                    <AineIcon className="w-16 h-16 mx-auto mb-4" color="#ffffff" />
                    <p className="text-lg font-bold italic leading-relaxed">
                      &ldquo;Al igual que el sol, buscamos iluminar y guiar a
                      personas con neurodivergencia y a sus familias.&rdquo;
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
                Quienes somos
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading leading-tight">
                AINE significa{" "}
                <span className="text-salmon">resplandor</span> en gaelico
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                Somos una asociacion civil que atiende a ninos y adolescentes
                desde la infancia hasta los 18 anos. Nuestra red transdisciplinaria
                de profesionales ofrece diagnostico preciso, terapias
                especializadas y acompanamiento integral.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-salmon/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading">Mision</h3>
                    <p className="text-body text-sm mt-1">
                      Diagnosticar y apoyar a ninos y jovenes con
                      neurodivergencias mediante una red integral y
                      transdisciplinaria de profesionales de salud.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading">Vision</h3>
                    <p className="text-body text-sm mt-1">
                      Adaptarnos continuamente a avances cientificos y
                      tecnologicos para ofrecer soluciones transformadoras que
                      mejoren la calidad de vida de nuestros pacientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-heading/20 text-heading font-semibold rounded-full hover:border-salmon hover:text-salmon transition-brand"
                >
                  Conoce nuestro equipo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-salmon uppercase tracking-widest">
              Nuestros Servicios
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Atencion integral bajo un mismo techo
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              15 servicios especializados para que tu hijo reciba todo el apoyo
              que necesita sin fragmentar la atencion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Diagnostico",
              "Pediatria del desarrollo",
              "Neuropsicologia",
              "Psicologia clinica",
              "Terapia de lenguaje",
              "Terapia ocupacional",
              "Terapia fisica",
              "Terapia conductual",
              "Neurologia pediatrica",
              "Psiquiatria infantil",
              "Nutricion",
              "Psicopedagogia",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray/5 hover:shadow-md hover:border-salmon/20 transition-brand group"
              >
                <div className="w-2 h-2 bg-salmon rounded-full group-hover:scale-150 transition-brand" />
                <span className="font-medium text-heading text-sm">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-4 bg-heading text-white font-bold rounded-full hover:bg-heading/90 transition-brand shadow-lg text-base"
            >
              Ver todos los servicios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
            El primer paso es buscar ayuda.<br />
            <span className="text-salmon">Nosotros estamos listos.</span>
          </h2>
          <p className="text-lg text-body max-w-xl mx-auto mb-10">
            Si tienes dudas sobre el desarrollo de tu hijo, agenda una
            valoracion con nuestro equipo. No tienes que hacerlo solo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiero-participar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-salmon text-white font-bold rounded-full hover:bg-salmon-dark transition-brand shadow-xl shadow-salmon/25 text-base"
            >
              Agenda una valoracion
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
              Escribenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
