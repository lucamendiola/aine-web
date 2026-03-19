"use client";

import { useState } from "react";
import Link from "next/link";
import { AineLogo } from "./AineLogo";

const navLinks = [
  { href: "/condiciones", label: "Condiciones" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-light/80 backdrop-blur-md border-b border-salmon/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <AineLogo className="h-10 w-auto" variant="salmon" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-heading font-medium text-sm tracking-wide hover:text-salmon transition-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/donativos"
              className="px-5 py-2.5 text-sm font-semibold text-salmon border-2 border-salmon rounded-full hover:bg-salmon hover:text-white transition-brand"
            >
              Donar
            </Link>
            <Link
              href="/quiero-participar"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-salmon rounded-full hover:bg-salmon-dark transition-brand shadow-lg shadow-salmon/20"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-heading"
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col gap-4 pt-4 border-t border-salmon/10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-heading font-medium text-base hover:text-salmon transition-brand"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/donativos"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 text-center text-sm font-semibold text-salmon border-2 border-salmon rounded-full hover:bg-salmon hover:text-white transition-brand"
                >
                  Donar
                </Link>
                <Link
                  href="/quiero-participar"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 text-center text-sm font-semibold text-white bg-salmon rounded-full hover:bg-salmon-dark transition-brand"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
