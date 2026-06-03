import { Link } from "react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import Reveal from "./Reveal";

function CTASection() {
  return (
    <section className="bg-navy-dark py-24 text-center text-white md:py-30">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-salmon">
            Siap Dimulai?
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Saatnya UMKM Anda <br />
            <span className="bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
              Tampil Digital
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Ceritakan kebutuhan bisnis Anda, dan tim kami akan membantu
            merekomendasikan jenis website yang paling cocok untuk mendominasi
            pasar digital.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/order"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            >
              Mulai Konsultasi Gratis
              <ArrowRight
                strokeWidth={1.5}
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-white/50"
            >
              Lihat Semua Paket
              <ArrowDown strokeWidth={1.5} className="h-5 w-5" />
            </a>
          </div>

          <p className="mx-auto mt-10 border-t border-white/10 pt-8 text-sm text-slate-400">
            Konsultasi awal gratis, tanpa kewajiban apapun.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
