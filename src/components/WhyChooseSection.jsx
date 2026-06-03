import {
  Palette,
  Users,
  Settings,
  MessageCircle,
  Rocket,
  Sparkles,
  Zap,
  Handshake,
} from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  { icon: Palette, text: "Desain modern & responsif" },
  { icon: Users, text: "User-friendly untuk UMKM" },
  { icon: Settings, text: "Customizable sesuai bisnis" },
  { icon: MessageCircle, text: "Direct WhatsApp integration" },
  { icon: Rocket, text: "Perfect untuk digital startup" },
];

const traits = [
  { icon: Sparkles, label: "Elegant" },
  { icon: Zap, label: "Fast" },
  { icon: Handshake, label: "Friendly" },
];

function WhyChooseSection() {
  return (
    <section className="bg-background py-20 md:py-30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-salmon">
              Kenapa LokaSite?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              Mengapa Memilih LokaSite?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              Kami tahu tidak semua UMKM punya latar belakang teknis. Itulah
              kenapa LokaSite dirancang{" "}
              <span className="font-semibold text-text-primary">
                friendly, mudah, dan personal
              </span>{" "}
              sesuai kebutuhan bisnis Anda.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Kami tidak hanya membuat website cantik, tapi membantu UMKM punya
              media digital yang{" "}
              <span className="font-semibold text-text-primary">
                profesional, jelas, dan mudah digunakan
              </span>{" "}
              pelanggan.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {traits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon strokeWidth={1.5} className="h-5 w-5 text-salmon" />
                  <span className="font-semibold text-text-primary">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <div className="space-y-3">
              {reasons.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors duration-300 hover:border-accent"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-text-primary">
                    <Icon strokeWidth={1.5} className="h-5 w-5" />
                  </span>
                  <span className="text-base font-medium text-text-primary">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
