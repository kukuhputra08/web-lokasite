const services = [
  {
    icon: "web",
    title: "Starter Site",
    description: "Website sederhana satu halaman untuk mengenalkan bisnis.",
    color: "from-blue-accent/10 to-blue-accent/5",
    borderColor: "border-blue-accent/30",
    iconBg: "bg-blue-accent/15",
    iconColor: "text-blue-accent",
    features: [
      "1 halaman website",
      "Profil singkat bisnis",
      "Kontak WhatsApp",
      "Google Maps",
      "Responsive design",
    ],
  },
  {
    icon: "corporate_fare",
    title: "Business Profile",
    description:
      "Website company profile untuk menampilkan profil, layanan, testimoni, dan kontak.",
    color: "from-purple-accent/10 to-purple-accent/5",
    borderColor: "border-purple-accent/30",
    iconBg: "bg-purple-accent/15",
    iconColor: "text-purple-accent",
    features: [
      "Home",
      "Tentang bisnis",
      "Layanan",
      "Keunggulan",
      "Testimoni",
      "Kontak",
    ],
  },
  {
    icon: "inventory_2",
    title: "Catalog Site",
    description:
      "Website katalog produk/menu dengan detail produk dan tombol pesan WhatsApp.",
    color: "from-emerald/10 to-emerald/5",
    borderColor: "border-emerald/30",
    iconBg: "bg-emerald/15",
    iconColor: "text-emerald",
    features: [
      "Katalog produk/menu",
      "Kategori produk",
      "Detail produk",
      "Tombol pesan WhatsApp",
      "Promo/testimoni",
    ],
  },
  {
    icon: "dashboard_customize",
    title: "Custom Site",
    description: "Website dengan fitur khusus sesuai kebutuhan bisnis.",
    color: "from-salmon/10 to-salmon/5",
    borderColor: "border-salmon/30",
    iconBg: "bg-salmon/15",
    iconColor: "text-salmon",
    features: [
      "Form order",
      "Booking form",
      "Portfolio",
      "Admin dashboard",
      "Fitur sesuai kebutuhan",
    ],
  },
];

function ServicesSection() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-gradient-to-br from-lighter-gray via-white to-light-gray py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-salmon/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-salmon/15 px-4 py-2 mb-6">
            <span className="text-lg">🎯</span>
            <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
              Paket Layanan
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-navy-dark md:text-4xl lg:text-5xl">
            Pilih Paket Website Sesuai Kebutuhan
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-slate md:text-lg">
            Dari starter hingga custom, kami punya solusi perfect untuk mengembangkan bisnis UMKM Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative flex h-full flex-col rounded-3xl border-2 ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-opacity-60`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <span className={`material-symbols-outlined text-3xl ${service.iconColor}`}>
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-dark">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-slate">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-text-slate">
                      <span className="material-symbols-outlined flex-shrink-0 text-lg text-emerald">
                        check_circle
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover button */}
                <div className="mt-8 pt-6 border-t border-black/10 group-hover:border-black/20 transition-colors duration-300">
                  <button className="w-full rounded-xl bg-gradient-to-r from-navy-dark to-blue-accent py-2.5 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;