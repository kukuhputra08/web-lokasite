import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border-gray/20 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="relative text-2xl font-bold text-navy-dark transition-all duration-300 hover:scale-105"
          >
            <span className="bg-gradient-to-r from-navy-dark via-blue-accent to-blue-accent bg-clip-text text-transparent">
              Loka
            </span>
            <span className="bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
              Site
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-1 md:flex">
            <a
              href="#home"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-salmon transition-all duration-300 hover:bg-salmon/10"
            >
              Home
            </a>

            <a
              href="#layanan"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
            >
              Layanan
            </a>

            <a
              href="#paket"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
            >
              Paket
            </a>

            <a
              href="#alur"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
            >
              Alur
            </a>

            <a
              href="#kontak"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
            >
              Kontak
            </a>
          </div>

          <Link
            to="/order"
            className="hidden rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 md:block"
          >
            Konsultasi Gratis
          </Link>

          {/* Mobile Burger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-gray bg-lighter-gray text-navy-dark transition-all duration-300 hover:border-salmon/50 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border-gray/20 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                to="/#home"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2.5 font-semibold text-salmon transition-all duration-300 hover:bg-salmon/10"
              >
                Home
              </Link>

              <Link
                to="/#layanan"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2.5 font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
              >
                Layanan
              </Link>

              <Link
                to="/#paket"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2.5 font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
              >
                Paket
              </Link>

              <Link
                to="/#alur"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2.5 font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
              >
                Alur
              </Link>

              <Link
                to="/#kontak"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2.5 font-semibold text-text-muted transition-all duration-300 hover:bg-light-gray hover:text-navy-dark"
              >
                Kontak
              </Link>

              <Link
                to="/order"
                onClick={closeMenu}
                className="mt-3 rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-4 py-3 text-center font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
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