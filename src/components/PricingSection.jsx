import { Link } from "react-router";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const pricingPlans = [
  {
    name: "Starter",
    priceLabel: "Mulai dari",
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
    priceLabel: "Mulai dari",
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
    priceLabel: "Mulai dari",
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
    priceLabel: "Mulai dari",
    price: "Rp 100.000",
    description: "Cocok untuk kebutuhan fitur khusus.",
    features: [
      "Fitur sesuai kebutuhan",
      "Order/booking form",
      "Admin dashboard optional",
      "Database optional",
      "Konsultasi fitur",
    ],
    buttonText: "Konsultasi Untuk Web Impian",
    isRecommended: false,
  },
];

function PricingSection() {
  return (
    <section
      id="paket"
      className="bg-background py-20 md:py-30"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-salmon">
            Harga Terjangkau
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Paket Website untuk Semua Budget
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Pilih paket yang sesuai kebutuhan bisnis Anda. Harga dapat
            disesuaikan dengan fitur, halaman, dan kebutuhan spesifik.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 100}
              className="group relative flex h-full flex-col rounded-2xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              style={
                plan.isRecommended
                  ? { borderColor: "var(--color-salmon)" }
                  : { borderColor: "var(--color-border)" }
              }
            >
              {plan.isRecommended && (
                <span className="absolute right-6 top-8 rounded-full bg-salmon/10 px-3 py-1 font-inconsolata text-xs font-semibold uppercase tracking-wider text-salmon">
                  Populer
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-primary">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {plan.priceLabel}
                </p>
                <p className="mt-2 text-4xl font-bold leading-tight tracking-tight text-text-primary">
                  {plan.price}
                </p>
                {plan.priceSubtext && (
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {plan.priceSubtext}
                  </p>
                )}
              </div>

              <ul className="mt-8 flex-grow space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      strokeWidth={1.5}
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald"
                    />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/order"
                className={`mt-8 w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all duration-300 ${
                  plan.isRecommended
                    ? "bg-gradient-to-r from-salmon to-salmon-hover text-white shadow-sm hover:shadow-md hover:scale-[1.02]"
                    : "border border-border text-text-primary hover:border-salmon hover:text-salmon"
                }`}
              >
                {plan.buttonText}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-surface-2 p-6 text-center">
          <p className="text-sm leading-relaxed text-text-secondary">
            <span className="font-semibold text-text-primary">Catatan:</span>{" "}
            Harga dapat berubah sesuai kompleksitas, jumlah halaman, fitur
            khusus, revisi tambahan, dan integrasi yang Anda butuhkan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default PricingSection;
