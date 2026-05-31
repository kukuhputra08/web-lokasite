const reasons = [
  { icon: "🎨", text: "Desain modern & responsif" },
  { icon: "👥", text: "User-friendly untuk UMKM" },
  { icon: "⚙️", text: "Customizable sesuai bisnis" },
  { icon: "💬", text: "Direct WhatsApp integration" },
  { icon: "🚀", text: "Perfect untuk digital startup" },
];

function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lighter-gray via-white to-light-gray py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-blue-accent/10 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-80 w-80 rounded-full bg-salmon/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-salmon/15 px-4 py-2 mb-6">
              <span className="text-lg">🌟</span>
              <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                Kenapa LokaSite?
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-navy-dark md:text-4xl lg:text-5xl">
              Mengapa Memilih LokaSite?
            </h2>

            <p className="mt-7 text-base leading-relaxed text-text-slate md:text-lg">
              Kami tahu tidak semua UMKM punya latar belakang teknis. Itulah kenapa LokaSite dirancang <span className="font-semibold text-navy-dark">friendly, mudah, dan personal</span> sesuai kebutuhan bisnis Anda.
            </p>

            <p className="mt-5 text-base leading-relaxed text-text-slate md:text-lg">
              Kami tidak hanya membuat website cantik, tapi membantu UMKM punya media digital yang <span className="font-semibold text-navy-dark">profesional, jelas, dan mudah digunakan</span> pelanggan.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold text-navy-dark">Elegant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold text-navy-dark">Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <span className="font-semibold text-navy-dark">Friendly</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border-gray/50 bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-lg">
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-2xl bg-gradient-to-r from-lighter-gray/50 to-lighter-gray/25 p-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-lighter-gray to-lighter-gray hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-salmon/20 to-salmon/10 text-xl transition-all duration-300 group-hover:scale-110">
                    {reason.icon}
                  </div>

                  <span className="text-base font-semibold text-navy-dark">
                    {reason.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;