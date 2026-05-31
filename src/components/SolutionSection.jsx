const solutions = [
  {
    emoji: "📱",
    icon: "devices",
    title: "Responsive Sempurna",
    description:
      "Website otomatis menyesuaikan dengan HP, tablet, atau laptop pelanggan Anda. Tetap cantik di semua ukuran layar.",
    color: "from-blue-accent/20 to-blue-accent/10",
    borderColor: "border-blue-accent/30"
  },
  {
    emoji: "💬",
    icon: "chat",
    title: "WhatsApp Integration",
    description:
      "Pelanggan bisa langsung chat Anda dari website dengan satu klik. Jangan biarin mereka cari nomor WhatsApp.",
    color: "from-emerald/20 to-emerald/10",
    borderColor: "border-emerald/30"
  },
  {
    emoji: "🎨",
    icon: "design_services",
    title: "Desain Custom",
    description:
      "Desain modern disesuaikan dengan identitas brand dan jenis usaha Anda. Bukan template copy-paste.",
    color: "from-purple-accent/20 to-purple-accent/10",
    borderColor: "border-purple-accent/30"
  },
];

function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-lighter-gray/30 to-light-gray py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-blue-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald/15 px-4 py-2 mb-6">
            <span className="text-lg">✅</span>
            <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-emerald">
              Solusi Terbaik
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-navy-dark md:text-4xl lg:text-5xl">
            Solusi Website Modern untuk UMKM
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-slate md:text-lg">
            LokaSite membantu membuat website yang tidak hanya indah dipandang, tapi juga memudahkan pelanggan memahami bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border-2 ${solution.borderColor} bg-gradient-to-br ${solution.color} backdrop-blur-sm p-8 md:p-9 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-3`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-3xl" />

              <div className="relative">
                <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-125">
                  {solution.emoji}
                </div>

                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {solution.title}
                </h3>

                <p className="text-sm leading-relaxed text-text-slate">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;