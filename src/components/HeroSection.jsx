import { Link } from "react-router";
import { ArrowRight, Zap, Palette, Handshake } from "lucide-react";
import Reveal from "./Reveal";
import heroImage from "../assets/image_loka.png";

const trustBadges = [
  { icon: Zap, label: "Cepat & Responsif" },
  { icon: Palette, label: "Desain Modern" },
  { icon: Handshake, label: "Support Terbaik" },
];

function HeroSection() {
  return (
    <section id="home" className="bg-background pt-36 pb-20 md:pt-44 md:pb-30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Reveal delay={0}>
              <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-salmon">
                Solusi Website Modern
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Bangun Website Profesional untuk{" "}
                <span className="bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
                  UMKM
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                Kami ciptakan website yang{" "}
                <span className="font-semibold text-text-primary">
                  bagus, elegan, rapi, cepat, dan friendly
                </span>
                . Bantu UMKM Anda terkenal, dipercaya, dan menjangkau lebih
                banyak pelanggan.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                to="/order"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
              >
                Konsultasi Sekarang
                <ArrowRight
                  strokeWidth={1.5}
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-3.5 font-semibold text-text-primary transition-all duration-300 hover:border-accent"
              >
                Lihat Layanan
              </a>
            </Reveal>

            <Reveal
              delay={400}
              className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-text-secondary"
                >
                  <Icon strokeWidth={1.5} className="h-5 w-5 text-salmon" />
                  {label}
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: product visual */}
          <Reveal delay={200} className="w-full">
            <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface p-4 sm:p-6 lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <img
                src={heroImage}
                alt="Mockup website UMKM LokaSite"
                className="max-h-full w-full rounded-xl object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
