import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#paket", label: "Paket" },
  { href: "#alur", label: "Alur" },
  { href: "#kontak", label: "Kontak" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-[10px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight text-text-primary transition-colors"
          >
            Loka<span className="text-salmon">Site</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-text-primary ${
                  idx === 0 ? "text-salmon" : "text-text-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              to="/order"
              className="rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="relative z-10 flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface text-text-primary transition-colors duration-300 hover:border-accent"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X strokeWidth={1.5} className="pointer-events-none h-5 w-5" />
              ) : (
                <Menu strokeWidth={1.5} className="pointer-events-none h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border bg-background py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-2.5 font-medium transition-colors duration-200 hover:text-text-primary ${
                    idx === 0 ? "text-salmon" : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/order"
                onClick={closeMenu}
                className="mt-3 rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-4 py-3 text-center font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
