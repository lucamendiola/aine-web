import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AineIcon } from "@/components/AineLogo";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de AINE: profesionales de salud dedicados al diagnóstico y acompañamiento de niños y jóvenes con neurodivergencias en Monterrey.",
  openGraph: {
    title: "Nosotros | AINE",
    description:
      "El equipo transdisciplinario de AINE: pediatras, psicologos, terapeutas y más en Monterrey.",
    url: "https://aine.mx/nosotros",
  },
};

const team = [
  {
    name: "Dra. María José Delgado",
    role: "Pediatra",
    specialty: "Alta especialidad en Síndrome de Down",
    color: "#ff856c",
    photo: "/images/equipo/maria-jose-delgado.jpg",
  },
  {
    name: "Dr. Juan Francisco Lozano",
    role: "Pediatra del desarrollo",
    specialty: null,
    color: "#4a9e8e",
    photo: "/images/equipo/juan-francisco-lozano.jpg",
  },
  {
    name: "Karina Picón",
    role: "Lic. en Enfermería",
    specialty: "Encargada del centro",
    color: "#58b1f2",
    photo: "/images/equipo/karina-picon.jpg",
  },
  {
    name: "Samira Velázquez",
    role: "Neuropsicóloga",
    specialty: null,
    color: "#fba649",
    photo: "/images/equipo/samira-velazquez.jpg",
  },
  {
    name: "Alejandro Arnaud",
    role: "Psicólogo clínico",
    specialty: null,
    color: "#f3bb65",
    photo: "/images/equipo/alejandro-arnaud.jpg",
  },
  {
    name: "Edgardo Cantú",
    role: "Colaborador AINE",
    specialty: null,
    color: "#f56c5a",
    photo: "/images/equipo/edgardo-cantu.jpg",
  },
];

const boardMembers = [
  { name: "Jaime Rivero Roel", role: "Presidente" },
  { name: "Dr. Juan Francisco Lozano", role: "Miembro" },
  { name: "Raul Califa", role: "Miembro" },
  { name: "Daniela Campuzano", role: "Miembro" },
  { name: "Dra. Maria Fonseca", role: "Miembro" },
  { name: "Mauricio O'Farril", role: "Miembro" },
  { name: "Dr. Francisco Lozano Lee", role: "Miembro" },
  { name: "Luis Lauro González", role: "Miembro" },
  { name: "Claudia Ayala", role: "Miembro" },
  { name: "Denise Morales", role: "Miembro" },
  { name: "Alicia Flores", role: "Miembro" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute top-36 left-12 w-16 h-16 bg-cream rounded-full opacity-60 hidden lg:block" />
          <div className="absolute bottom-16 right-20 w-10 h-10 bg-teal/20 rounded-full hidden lg:block" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-salmon/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-salmon rounded-full" />
              <span className="text-sm font-medium text-salmon">
                Quiénes somos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight mb-6">
              Conoce a quienes hacen{" "}
              <span className="text-salmon">posible AINE</span>
            </h1>

            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Un equipo de profesionales unidos por una misión: iluminar el camino
              de las familias que navegan la neurodivergencia.
            </p>
          </div>
        </div>
      </section>

      {/* Etymology Section */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-salmon via-teal to-blue" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-8 bg-salmon/90 blob-shape" />
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="text-center text-white">
                    <AineIcon className="w-20 h-20 mx-auto mb-4" color="#ffffff" />
                    <p className="text-4xl font-extrabold mb-1">AINE</p>
                    <p className="text-lg font-medium opacity-90 italic">
                      /AH-nyeh/
                    </p>
                    <p className="text-sm opacity-80 mt-2">
                      Resplandor en gaélico
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/20 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange/20 rounded-full" />
                <div className="absolute top-1/4 -left-8 w-8 h-8 bg-blue/30 rounded-full hidden lg:block" />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <span className="text-sm font-semibold text-salmon uppercase tracking-widest">
                Nuestro nombre
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading leading-tight">
                AINE significa{" "}
                <span className="text-salmon">resplandor</span>
              </h2>
              <p className="mt-6 text-body text-lg leading-relaxed">
                En la mitología gaelica, Aine es la diosa del verano, la riqueza y
                la soberania, asociada con el sol y el brillo. Elegimos este nombre
                porque refleja nuestra misión: ser la luz que guia a las familias en
                el camino de la neurodivergencia.
              </p>
              <p className="mt-4 text-body text-lg leading-relaxed">
                Al igual que el sol ilumina sin distincion, en AINE creemos que cada
                niño merece brillar con su propia luz. Nuestro trabajo es asegurar
                que tengan las herramientas y el acompañamiento para hacerlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Visión, Philosophy */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-salmon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal uppercase tracking-widest">
              Lo que nos mueve
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Misión, Visión y Filosofía
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5">
                <div className="w-14 h-14 bg-salmon rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">Misión</h3>
                <p className="text-body leading-relaxed">
                  Diagnosticar y apoyar a niños y jóvenes con neurodivergencias
                  mediante una red integral y transdisciplinaria de profesionales
                  de salud, desde la infancia hasta los 18 años.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5">
                <div className="w-14 h-14 bg-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">Visión</h3>
                <p className="text-body leading-relaxed">
                  Adaptarnos continuamente a avances científicos y tecnológicos
                  para ofrecer soluciones transformadoras que mejoren la calidad
                  de vida de nuestros pacientes y sus familias.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5">
                <div className="w-14 h-14 bg-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">Filosofía</h3>
                <p className="text-body leading-relaxed">
                  Cada niño es unico y extraordinario. No buscamos &ldquo;arreglar&rdquo;
                  a nadie, sino entender cómo funciona cada mente para potenciar
                  sus fortalezas y dar apoyo donde más se necesita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-salmon uppercase tracking-widest">
              Nuestro Equipo
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Profesionales con vocación
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Un equipo transdisciplinario de especialistas dedicados al
              bienestar de niños y jóvenes con neurodivergencias.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-cream-light rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-brand border border-salmon/5"
              >
                {/* Photo */}
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-brand border-4"
                  style={{ borderColor: `${member.color}30` }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-heading mb-1">
                  {member.name}
                </h3>
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                {member.specialty && (
                  <p className="text-sm text-body-light">{member.specialty}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-salmon/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal uppercase tracking-widest">
              Consejo Directivo
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-heading">
              Quienes guían nuestra dirección
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Un consejo comprometido con la misión de AINE y el bienestar de las
              familias que atendemos.
            </p>
          </div>

          {/* President */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-salmon/10">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-salmon/20">
                <Image
                  src="/images/equipo/jaime-rivero.jpg"
                  alt="Jaime Rivero Roel"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-heading mb-1">
                Jaime Rivero Roel
              </h3>
              <p className="font-semibold text-salmon text-sm">Presidente</p>
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {boardMembers.slice(1).map((member, index) => {
              const colors = ["#4a9e8e", "#58b1f2", "#fba649", "#f3bb65", "#ff856c"];
              const color = colors[index % colors.length];
              const initials = member.name
                .replace(/^(Dra?\.\s)/, "")
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-brand border border-gray/5"
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <span
                      className="text-base font-bold"
                      style={{ color }}
                    >
                      {initials}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-heading leading-tight">
                    {member.name}
                  </h4>
                </div>
              );
            })}
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
            Detrás de cada servicio hay un equipo{" "}
            <span className="text-salmon">que se preocupa.</span>
          </h2>
          <p className="text-lg text-body max-w-xl mx-auto mb-10">
            Si buscas atención integral para tu hijo, estamos listos para
            acompañarte. Agenda una valoración o escribenos por WhatsApp.
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
