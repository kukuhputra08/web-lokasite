import { MonitorSmartphone, MessageCircle, Palette } from "lucide-react";
import Reveal from "./Reveal";

const solutions = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Sempurna",
    description:
      "Website otomatis menyesuaikan dengan HP, tablet, atau laptop pelanggan Anda. Tetap cantik di semua ukuran layar.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Pelanggan bisa langsung chat Anda dari website dengan satu klik. Jangan biarin mereka cari nomor WhatsApp.",
  },
  {
    icon: Palette,
    title: "Desain Custom",
    description:
      "Desain modern disesuaikan dengan identitas brand dan jenis usaha Anda. Bukan template copy-paste.",
  },
];

function SolutionSection() {
  return (
    <section className="bg-background py-20 md:py-30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-emerald">
            Solusi Terbaik
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Solusi Website Modern untuk UMKM
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            LokaSite membantu membuat website yang tidak hanya indah dipandang,
            tapi juga memudahkan pelanggan memahami bisnis Anda.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              delay={index * 100}
              className="rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background text-text-primary">
                <Icon strokeWidth={1.5} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
