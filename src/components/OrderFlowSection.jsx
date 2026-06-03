import { FileText, MessageSquare, MessageCircle, Settings, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { number: "1", title: "Isi Form", icon: FileText },
  { number: "2", title: "Cerita Kebutuhan", icon: MessageSquare },
  { number: "3", title: "Diskusi WhatsApp", icon: MessageCircle },
  { number: "4", title: "Website Dikerjakan", icon: Settings },
  { number: "5", title: "Revisi & Deploy", icon: Sparkles },
];

function OrderFlowSection() {
  return (
    <section id="alur" className="bg-surface py-20 md:py-30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-accent">
            Proses Mudah
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Cara Memesan Website
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Proses order kami dirancang sederhana dan mudah dipahami, tanpa
            istilah teknis yang membingungkan.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ number, title, icon: Icon }, index) => (
            <Reveal
              key={number}
              delay={index * 100}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-text-primary">
                <Icon strokeWidth={1.5} className="h-6 w-6" />
              </span>
              <span className="mt-4 font-inconsolata text-xs font-semibold uppercase tracking-widest text-text-secondary">
                Step {number}
              </span>
              <h3 className="mt-1 text-base font-semibold leading-snug text-text-primary">
                {title}
              </h3>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background p-8 text-center">
          <p className="text-base leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">
              Setelah form dikirim:
            </span>{" "}
            Tim kami akan menghubungi Anda via WhatsApp untuk diskusi kebutuhan,
            estimasi, timeline, dan harga yang pas untuk bisnis Anda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default OrderFlowSection;
