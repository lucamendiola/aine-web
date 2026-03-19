import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Muy pronto compartiremos recursos y articulos sobre neurodivergencia, terapias y desarrollo infantil. Suscribete para no perdertelo.",
  openGraph: {
    title: "Blog | AINE",
    description:
      "Recursos y articulos sobre neurodivergencia, terapias y desarrollo infantil.",
    url: "https://aine.mx/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-salmon/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-salmon rounded-full animate-pulse" />
            <span className="text-sm font-medium text-salmon">
              Proximamente
            </span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight mb-6">
            Nuestro <span className="text-salmon">blog</span> esta en camino
          </h1>

          <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed mb-12">
            Muy pronto compartiremos recursos y articulos sobre
            neurodivergencia, terapias, desarrollo infantil y herramientas para
            familias. Suscribete para ser de los primeros en leerlo.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto mb-12">
            <form action="#" className="flex gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Tu correo electronico"
                className="flex-1 px-5 py-4 bg-white border border-gray/10 rounded-full text-heading placeholder:text-body-light focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-salmon text-white font-bold rounded-full hover:bg-salmon-dark transition-brand shadow-xl shadow-salmon/25 whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
            <p className="text-sm text-body-light mt-3">
              Sin spam. Solo contenido de valor para tu familia.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-12">
            <div className="flex-1 h-px bg-gray/10" />
            <span className="text-sm text-body-light font-medium">
              Mientras tanto
            </span>
            <div className="flex-1 h-px bg-gray/10" />
          </div>

          {/* Social CTA */}
          <p className="text-body mb-6">
            Siguenos en redes sociales para contenido sobre neurodivergencia
          </p>

          <div className="flex justify-center gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com/ainemx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-salmon/10 transition-brand group shadow-sm border border-gray/5"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 text-heading group-hover:text-salmon transition-brand"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/aine.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-salmon/10 transition-brand group shadow-sm border border-gray/5"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-heading group-hover:text-salmon transition-brand"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@ainemx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-salmon/10 transition-brand group shadow-sm border border-gray/5"
              aria-label="YouTube"
            >
              <svg
                className="w-5 h-5 text-heading group-hover:text-salmon transition-brand"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Back to home */}
          <div className="mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-body-light font-medium hover:text-salmon transition-brand"
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
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
