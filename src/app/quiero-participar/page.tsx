import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quiero Participar",
  description:
    "Contacta a AINE para agendar una valoración, conocer nuestros servicios o participar como voluntario. Estamos en Monterrey, NL.",
  openGraph: {
    title: "Quiero Participar | AINE",
    description:
      "Contacta a AINE para agendar una valoración o conocer nuestros servicios de atención a neurodivergencias en Monterrey.",
    url: "https://aine.mx/quiero-participar",
  },
};

export default function QuieroParticiparPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-salmon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-salmon/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-salmon rounded-full" />
            <span className="text-sm font-medium text-salmon">Contacto</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight">
            Se parte de <span className="text-salmon">AINE!</span>
          </h1>
          <p className="mt-6 text-lg text-body max-w-2xl mx-auto">
            Ya sea que busques atención para tu hijo, quieras colaborar con
            nosotros o tengas alguna pregunta, estamos aqui para ayudarte.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray/5">
                <h2 className="text-2xl font-extrabold text-heading mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-body mb-8">
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </p>

                <form action="#" className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-semibold text-heading mb-2"
                      >
                        Nombre completo <span className="text-salmon">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 bg-cream-light border border-gray/10 rounded-xl text-heading placeholder:text-body-light focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-heading mb-2"
                      >
                        Email <span className="text-salmon">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 bg-cream-light border border-gray/10 rounded-xl text-heading placeholder:text-body-light focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Teléfono */}
                    <div>
                      <label
                        htmlFor="teléfono"
                        className="block text-sm font-semibold text-heading mb-2"
                      >
                        Teléfono <span className="text-salmon">*</span>
                      </label>
                      <input
                        type="tel"
                        id="teléfono"
                        name="teléfono"
                        required
                        placeholder="+52 81 1234 5678"
                        className="w-full px-4 py-3 bg-cream-light border border-gray/10 rounded-xl text-heading placeholder:text-body-light focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand"
                      />
                    </div>

                    {/* Ubicación */}
                    <div>
                      <label
                        htmlFor="ubicación"
                        className="block text-sm font-semibold text-heading mb-2"
                      >
                        Ubicación <span className="text-salmon">*</span>
                      </label>
                      <select
                        id="ubicación"
                        name="ubicación"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 bg-cream-light border border-gray/10 rounded-xl text-heading focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand"
                      >
                        <option value="" disabled>
                          Selecciona tu ubicación
                        </option>
                        <option value="monterrey">Monterrey</option>
                        <option value="san-pedro">San Pedro</option>
                        <option value="area-metropolitana">
                          Area metropolitana
                        </option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  {/* Cómo te enteraste */}
                  <div>
                    <label
                      htmlFor="referencia"
                      className="block text-sm font-semibold text-heading mb-2"
                    >
                      Cómo te enteraste de nosotros?
                    </label>
                    <select
                      id="referencia"
                      name="referencia"
                      defaultValue=""
                      className="w-full px-4 py-3 bg-cream-light border border-gray/10 rounded-xl text-heading focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="redes-sociales">Redes sociales</option>
                      <option value="google">Google</option>
                      <option value="recomendacion">Recomendacion</option>
                      <option value="gobierno">Gobierno</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-semibold text-heading mb-2"
                    >
                      Mensaje{" "}
                      <span className="text-body-light font-normal">
                        (opciónal)
                      </span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      placeholder="Cuentanos cómo podemos ayudarte..."
                      className="w-full px-4 py-3 bg-cream-light border border-gray/10 rounded-xl text-heading placeholder:text-body-light focus:outline-none focus:ring-2 focus:ring-salmon/30 focus:border-salmon transition-brand resize-none"
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      required
                      className="mt-1 w-4 h-4 rounded border-gray/20 text-salmon focus:ring-salmon/30"
                    />
                    <label
                      htmlFor="privacidad"
                      className="text-sm text-body leading-relaxed"
                    >
                      He leido y acepto el{" "}
                      <Link
                        href="/privacidad"
                        className="text-salmon font-semibold hover:underline"
                      >
                        Aviso de Privacidad
                      </Link>{" "}
                      de AINE A.C.
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-salmon text-white font-bold rounded-full hover:bg-salmon-dark transition-brand shadow-xl shadow-salmon/25 text-base"
                  >
                    Enviar mensaje
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
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray/5">
                <div className="w-12 h-12 bg-salmon/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-salmon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-heading mb-2">Dirección</h3>
                <p className="text-body text-sm leading-relaxed">
                  Amatista 107, Col. Pedregal del Valle,
                  <br />
                  C.P. 66280, Monterrey, NL
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray/5">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-teal"
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
                <h3 className="font-bold text-heading mb-2">Email</h3>
                <a
                  href="mailto:hola@aine.mx"
                  className="text-salmon font-medium hover:underline text-sm"
                >
                  hola@aine.mx
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray/5">
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-heading mb-2">Teléfono</h3>
                <a
                  href="tel:+528117841969"
                  className="text-body font-medium text-sm"
                >
                  +52 81 1784 1969
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/528117841969"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-brand shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbenos por WhatsApp
              </a>

              {/* Social Links */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray/5">
                <h3 className="font-bold text-heading mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com/ainemx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center hover:bg-salmon/10 transition-brand group"
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
                    className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center hover:bg-salmon/10 transition-brand group"
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
                    className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center hover:bg-salmon/10 transition-brand group"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
