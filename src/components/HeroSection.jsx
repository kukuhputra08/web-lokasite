import { Link } from "react-router";
import heroImage from "../assets/image_loka.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-lighter-gray via-white to-white pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-salmon/15 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-accent/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-purple-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-salmon/15 to-blue-accent/15 px-4 py-2.5 backdrop-blur-sm">
              <span className="animate-pulse text-xl">✨</span>
              <p className="font-inconsolata text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-salmon to-blue-accent bg-clip-text text-transparent">
                Solusi Website Modern
              </p>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.2] sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-navy-dark via-blue-accent to-purple-accent bg-clip-text text-transparent">
                Bangun Website
              </span>
              <br />
              <span className="bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
                Profesional untuk UMKM
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-slate md:text-lg">
              Kami ciptakan website yang <span className="font-semibold text-navy-dark">bagus, elegan, rapi, cepat, dan friendly</span>. Bantu UMKM Anda terkenal, dipercaya, dan menjangkau lebih banyak pelanggan.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/order"
                className="group rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
              >
                <span className="inline-flex items-center gap-2">
                  Konsultasi Sekarang
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <a
                href="#layanan"
                className="rounded-xl border-2 border-navy-dark/20 bg-white px-8 py-3.5 text-center font-semibold text-navy-dark transition-all duration-300 hover:border-blue-accent hover:bg-blue-accent/5"
              >
                Lihat Layanan
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-muted">
                <span className="text-lg">⚡</span> Cepat & Responsif
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-text-muted">
                <span className="text-lg">🎨</span> Desain Modern
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-text-muted">
                <span className="text-lg">🤝</span> Support Terbaik
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">
            {/* visual container */}
            <div className="relative w-full max-w-[700px] group">
              {/* Gradient shadow */}
              <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-[40px] bg-gradient-to-br from-salmon/20 via-blue-accent/10 to-transparent blur-3xl group-hover:blur-2xl transition-all duration-500" />

              {/* Main card with gradient border effect */}
              <div className="relative rounded-[40px] bg-gradient-to-br from-blue-accent/5 via-white to-salmon/5 p-8 shadow-[0_25px_50px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-sm group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)] transition-all duration-500">
                <img
                  src={heroImage}
                  alt="Mockup website UMKM LokaSite"
                  className="w-full rotate-[-3deg] object-contain drop-shadow-[0_20px_40px_rgba(15,23,42,0.15)] group-hover:rotate-[-2deg] group-hover:drop-shadow-[0_25px_50px_rgba(15,23,42,0.2)] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;