import { Globe, Building2, Package, LayoutDashboard, Check } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Starter Site",
    description: "Website sederhana satu halaman untuk mengenalkan bisnis.",
    features: [
      "1 halaman website",
      "Profil singkat bisnis",
      "Kontak WhatsApp",
      "Google Maps",
      "Responsive design",
    ],
  },
  {
    icon: Building2,
    title: "Business Profile",
    description:
      "Website company profile untuk menampilkan profil, layanan, testimoni, dan kontak.",
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
    icon: Package,
    title: "Catalog Site",
    description:
      "Website katalog produk/menu dengan detail produk dan tombol pesan WhatsApp.",
    features: [
      "Katalog produk/menu",
      "Kategori produk",
      "Detail produk",
      "Tombol pesan WhatsApp",
      "Promo/testimoni",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Site",
    description: "Website dengan fitur khusus sesuai kebutuhan bisnis.",
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
    <section id="layanan" className="bg-surface py-20 md:py-30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-inconsolata text-sm font-semibold uppercase tracking-widest text-salmon">
            Paket Layanan
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Pilih Paket Website Sesuai Kebutuhan
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Dari starter hingga custom, kami punya solusi yang pas untuk
            mengembangkan bisnis UMKM Anda.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description, features }, index) => (
            <Reveal
              key={title}
              delay={index * 100}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-text-primary">
                <Icon strokeWidth={1.5} className="h-6 w-6" />
              </span>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>

              <ul className="mt-6 flex-grow space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <Check
                      strokeWidth={1.5}
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
