import { Link } from "react-router";

const pricingPlans = [
  {
    name: "Starter",
    price: "Rp500K",
    description: "Cocok untuk UMKM yang ingin website sederhana.",
    features: [
      "1 halaman website",
      "Profil bisnis",
      "Kontak WhatsApp",
      "Google Maps",
      "Responsive mobile",
    ],
    buttonText: "Konsultasi Starter",
    isRecommended: false,
  },
  {
    name: "Business",
    price: "Rp1Jt",
    description: "Cocok untuk UMKM yang ingin company profile lengkap.",
    features: [
      "3-5 halaman",
      "Tentang bisnis",
      "Layanan",
      "Galeri",
      "Testimoni",
      "Kontak",
    ],
    buttonText: "Konsultasi Business",
    isRecommended: true,
  },
  {
    name: "Catalog",
    price: "Rp1.5Jt",
    description: "Cocok untuk UMKM makanan, fashion, dan produk lokal.",
    features: [
      "Katalog produk/menu",
      "Kategori produk",
      "Detail produk",
      "WhatsApp order",
      "Testimoni",
    ],
    buttonText: "Konsultasi Catalog",
    isRecommended: false,
  },
  {
    name: "Custom",
    price: "Rp2.5Jt",
    description: "Cocok untuk kebutuhan fitur khusus.",
    features: [
      "Fitur sesuai kebutuhan",
      "Order/booking form",
      "Admin dashboard optional",
      "Database optional",
      "Konsultasi fitur",
    ],
    buttonText: "Konsultasi Custom",
    isRecommended: false,
  },
];

function PricingSection() {
  return (
    <section id="paket" className="relative overflow-hidden bg-gradient-to-br from-white via-lighter-gray/50 to-light-gray py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-salmon/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-salmon/15 px-4 py-2 mb-6">
            <span className="text-lg">💰</span>
            <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
              Harga Terjangkau
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-navy-dark md:text-4xl lg:text-5xl">
            Paket Website untuk Semua Budget
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-slate md:text-lg">
            Pilih paket yang sesuai kebutuhan bisnis Anda. Harga dapat disesuaikan dengan fitur, halaman, dan kebutuhan spesifik.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={plan.isRecommended ? "relative pt-8" : ""}>
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="rounded-full bg-gradient-to-r from-yellow to-orange-300 px-6 py-2 font-inconsolata text-xs font-bold text-navy-dark shadow-lg whitespace-nowrap">
                    ⭐ Populer
                  </div>
                </div>
              )}

              <div
                className={`group relative flex h-full flex-col rounded-3xl transition-all duration-300 overflow-hidden ${
                  plan.isRecommended
                    ? "border-2 border-salmon bg-gradient-to-br from-salmon/5 to-salmon/2 shadow-xl md:-translate-y-5 scale-105 md:scale-100"
                    : "border border-border-gray/50 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-2"
                } p-8 md:p-9`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                <div>
                  <h3 className="text-2xl font-bold text-navy-dark">
                    {plan.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-slate">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Mulai dari
                  </p>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-navy-dark to-blue-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <ul className="mt-10 flex-grow space-y-3.5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0 shrink-0 text-lg text-emerald">
                        check_circle
                      </span>
                      <span className="text-sm font-medium text-text-slate">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/order"
                  className={`mt-10 w-full rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 text-sm ${
                    plan.isRecommended
                      ? "bg-gradient-to-r from-salmon to-salmon-hover text-white shadow-lg hover:shadow-xl hover:scale-105"
                      : "border-2 border-navy-dark/20 text-navy-dark bg-white hover:border-salmon hover:bg-salmon hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-r from-blue-accent/10 to-blue-accent/5 border border-blue-accent/20 p-6 text-center">
          <p className="text-sm leading-relaxed text-text-slate">
            <span className="font-bold text-navy-dark">💡 Catatan:</span> Harga dapat berubah sesuai kompleksitas, jumlah halaman, fitur khusus, revisi tambahan, dan integrasi yang Anda butuhkan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;