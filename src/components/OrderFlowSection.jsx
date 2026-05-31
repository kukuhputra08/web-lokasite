const steps = [
  {
    number: "1",
    title: "Isi Form",
    emoji: "📝",
    color: "from-blue-accent/20 to-blue-accent/10",
    borderColor: "border-blue-accent/30"
  },
  {
    number: "2",
    title: "Cerita Kebutuhan",
    emoji: "💭",
    color: "from-purple-accent/20 to-purple-accent/10",
    borderColor: "border-purple-accent/30"
  },
  {
    number: "3",
    title: "Diskusi WhatsApp",
    emoji: "💬",
    color: "from-emerald/20 to-emerald/10",
    borderColor: "border-emerald/30"
  },
  {
    number: "4",
    title: "Website Dikerjakan",
    emoji: "⚙️",
    color: "from-cyan/20 to-cyan/10",
    borderColor: "border-cyan/30"
  },
  {
    number: "5",
    title: "Revisi & Deploy",
    emoji: "✨",
    color: "from-salmon/20 to-salmon/10",
    borderColor: "border-salmon/30"
  },
];

function OrderFlowSection() {
  return (
    <section id="alur" className="relative overflow-hidden bg-gradient-to-br from-lighter-gray via-white to-light-gray py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 h-64 w-64 rounded-full bg-blue-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 h-80 w-80 rounded-full bg-salmon/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-accent/15 px-4 py-2 mb-6">
            <span className="text-lg">🎯</span>
            <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-blue-accent">
              Proses Mudah
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-navy-dark md:text-4xl lg:text-5xl">
            Cara Memesan Website
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-slate md:text-lg">
            Proses order kami dirancang sederhana dan mudah dipahami, tanpa istilah teknis yang membingungkan.
          </p>
        </div>

        <div className="relative mt-18">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[4rem] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-salmon/30 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`group flex flex-col items-center text-center rounded-3xl border-2 ${step.borderColor} bg-gradient-to-br ${step.color} backdrop-blur-sm p-7 md:p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-3 relative`}
              >
                {/* Step connection dot */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-to-br from-salmon to-salmon-hover text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                <div className="mt-8 text-5xl mb-4">
                  {step.emoji}
                </div>

                <h3 className="text-lg font-bold text-navy-dark leading-snug">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-gradient-to-r from-blue-accent/15 to-blue-accent/5 border border-blue-accent/30 p-8 md:p-10 text-center shadow-md">
          <p className="text-base leading-relaxed text-text-slate md:text-lg">
            <span className="font-bold text-navy-dark">📱 Setelah form dikirim:</span> Tim kami akan menghubungi Anda via WhatsApp untuk diskusi kebutuhan, estimasi, timeline, dan harga yang pas untuk bisnis Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderFlowSection;