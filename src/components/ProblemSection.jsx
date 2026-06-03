import { ClipboardList, EyeOff, HelpCircle, Package } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  {
    icon: ClipboardList,
    title: "Info bisnis tidak tersusun",
    description: "Informasi tersebar di berbagai tempat",
  },
  {
    icon: EyeOff,
    title: "Produk tenggelam di feed",
    description: "Sulit ditemukan di Instagram/WhatsApp",
  },
  {
    icon: HelpCircle,
    title: "Customer bertanya berkali-kali",
    description: "Sama pertanyaan yang berulang",
  },
  {
    icon: Package,
    title: "Terlihat kurang profesional",
    description: "Bisnis belum punya identitas digital",
  },
];

function ProblemSection() {
  return (
    <section className="bg-surface py-20 md:py-30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-salmon">
            Challenges
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Apakah UMKM Anda Menghadapi Ini?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Banyak UMKM kesulitan menampilkan bisnis mereka secara rapi dan
            profesional tanpa website.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              delay={index * 100}
              className="rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-text-primary">
                <Icon strokeWidth={1.5} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
