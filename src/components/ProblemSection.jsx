const problems = [
  {
    emoji: "📋",
    title: "Info bisnis tidak tersusun",
    description: "Informasi tersebar di berbagai tempat"
  },
  {
    emoji: "🙈",
    title: "Produk tenggelam di feed",
    description: "Sulit ditemukan di Instagram/WhatsApp"
  },
  {
    emoji: "❓",
    title: "Customer bertanya berkali-kali",
    description: "Sama pertanyaan yang berulang"
  },
  {
    emoji: "📦",
    title: "Terlihat kurang profesional",
    description: "Bisnis belum punya identitas digital"
  },
];

function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lighter-gray via-white to-light-gray py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-salmon/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-red-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2 mb-6">
            <span className="text-lg">⚠️</span>
            <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-red-600">
              Challenges
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-navy-dark md:text-4xl lg:text-5xl">
            Apakah UMKM Anda Menghadapi Ini?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-slate md:text-lg">
            Banyak UMKM kesulitan menampilkan bisnis mereka secara rapi dan profesional tanpa website.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border-2 border-red-300/30 bg-gradient-to-br from-red-50/50 to-red-50/25 backdrop-blur-sm p-8 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-3 hover:border-red-400/50"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

              <div className="relative">
                <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-125">
                  {problem.emoji}
                </div>

                <h3 className="text-lg font-bold leading-snug text-navy-dark mb-2">
                  {problem.title}
                </h3>

                <p className="text-sm text-text-muted">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;