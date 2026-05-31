import { Link } from "react-router";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy-dark/98 to-navy-dark py-24 md:py-32 text-center text-white">
      {/* Decorative gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 h-96 w-96 rounded-full bg-salmon/20 blur-3xl" />
        <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-blue-accent/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-purple-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow/20 px-4 py-2.5 mb-8">
          <span className="text-lg">⚡</span>
          <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-yellow">
            Siap Dimulai?
          </p>
        </div>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Saatnya UMKM Anda <br />
          <span className="bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
            Tampil Digital
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Ceritakan kebutuhan bisnis Anda, dan tim kami akan membantu merekomendasikan jenis website yang paling cocok untuk mendominasi pasar digital.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/order"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-1"
          >
            <span>Mulai Konsultasi Gratis</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>

          <Link
            to="#layanan"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            <span>Lihat Semua Paket</span>
            <span>↓</span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-slate-400">
          <p>💡 <span className="text-slate-300">Konsultasi awal gratis, tanpa kewajiban apapun</span></p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;