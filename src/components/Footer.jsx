function Footer() {
  return (
    <footer id="kontak" className="relative border-t border-navy-dark/30 bg-gradient-to-br from-navy-dark via-navy-dark/95 to-navy-dark pt-20 pb-10">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-salmon/5 via-transparent to-blue-accent/5 pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-5 md:col-span-2">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-white via-white to-salmon bg-clip-text text-transparent">
                Loka
              </span>
              <span className="bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
                Site
              </span>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-slate-400">
              Membantu UMKM tampil profesional secara digital dengan website yang modern, elegan, cepat, dan friendly.
            </p>

            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <span className="text-lg">⚡</span> Cepat
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <span className="text-lg">🎨</span> Elegan
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <span className="text-lg">🤝</span> Ramah
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-inconsolata text-xs font-bold uppercase tracking-widest text-white">
              Menu
            </h4>

            <ul className="space-y-3">
              <li>
                <a className="group text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2" href="#home">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Home
                </a>
              </li>
              <li>
                <a className="group text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2" href="#layanan">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Layanan
                </a>
              </li>
              <li>
                <a className="group text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2" href="#paket">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Paket
                </a>
              </li>
              <li>
                <a className="group text-slate-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2" href="/order">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Konsultasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-inconsolata text-xs font-bold uppercase tracking-widest text-white">
              Hubungi Kami
            </h4>

            <ul className="space-y-3">
              <li className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white cursor-pointer">
                <span className="material-symbols-outlined text-lg text-salmon">chat</span>
                <span className="text-sm font-medium">WhatsApp</span>
              </li>

              <li className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white cursor-pointer">
                <span className="material-symbols-outlined text-lg text-blue-accent">mail</span>
                <span className="text-sm font-medium">Email</span>
              </li>

              <li className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white cursor-pointer">
                <span className="material-symbols-outlined text-lg text-purple-accent">photo_camera</span>
                <span className="text-sm font-medium">Instagram</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-dark/50 pt-8 text-center md:text-left">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 LokaSite. All rights reserved. Crafted with <span className="text-salmon">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;