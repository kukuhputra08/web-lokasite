import { Link } from "react-router";
import { Info, CheckCircle2 } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { formatCurrency } from "../utils/formatCurrency";

function OrderSuccess() {
  const latestOrder = JSON.parse(
    localStorage.getItem("lokasite_latest_order")
  );

  if (!latestOrder) {
    return (
      <main className="min-h-screen bg-background font-sans text-text-primary">
        <Navbar />

        <section className="pt-32 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm md:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-salmon/10">
                <Info strokeWidth={1.5} className="h-8 w-8 text-salmon" />
              </div>

              <h1 className="mt-6 text-3xl font-bold text-text-primary">
                Belum Ada Data Konsultasi
              </h1>

              <p className="mt-4 leading-relaxed text-text-secondary">
                Kamu belum mengirim form konsultasi. Silakan isi form terlebih
                dahulu agar tim LokaSite dapat memahami kebutuhan website UMKM
                Anda.
              </p>

              <Link
                to="/order"
                className="mt-8 inline-flex rounded-xl bg-salmon px-6 py-3 font-semibold text-white transition hover:bg-salmon-hover"
              >
                Isi Form Konsultasi
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  const orderCode = latestOrder.orderCode || "Belum tersedia";

  const includedFeatures = latestOrder.includedFeatures || [];
  const additionalFeatures = latestOrder.additionalFeatures || [];
  const finalFeatures =
    latestOrder.finalFeatures || [...includedFeatures, ...additionalFeatures];

  const whatsappMessage = `Halo LokaSite, saya ${latestOrder.fullName} dari ${latestOrder.businessName}. Saya sudah mengirim form konsultasi website.

Order ID: ${orderCode}
Paket: ${latestOrder.selectedPackage}
Jenis Usaha: ${latestOrder.businessType}
Total Estimasi: ${formatCurrency(latestOrder.estimatedTotal)}

Fitur yang dipilih:
${finalFeatures.map((feature) => `- ${feature}`).join("\n")}

Mohon dibantu konfirmasi pesanan saya ya.`;

  const whatsappLink = `https://wa.me/6285233133572?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-background font-sans text-text-primary">
      <Navbar />

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-10">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-salmon/10">
                <CheckCircle2 strokeWidth={1.5} className="h-10 w-10 text-salmon" />
              </div>

              <p className="mt-6 font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                Konsultasi Terkirim
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-text-primary md:text-4xl">
                Terima kasih, request Anda sudah kami terima
              </h1>

              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-secondary">
                Simpan Order ID berikut untuk memudahkan proses konfirmasi
                dengan admin LokaSite melalui WhatsApp.
              </p>

              <div className="mt-6 inline-flex rounded-full bg-salmon/10 px-5 py-2 font-inconsolata text-sm font-bold text-salmon">
                Order ID: {orderCode}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
              <div className="rounded-2xl border border-border bg-surface-2 p-6 md:p-8">
                <h2 className="text-xl font-bold text-text-primary">
                  Ringkasan Konsultasi
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Nama Lengkap
                    </p>
                    <p className="mt-1 font-semibold text-text-primary">
                      {latestOrder.fullName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Nama UMKM/Bisnis
                    </p>
                    <p className="mt-1 font-semibold text-text-primary">
                      {latestOrder.businessName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      WhatsApp
                    </p>
                    <p className="mt-1 font-semibold text-text-primary">
                      {latestOrder.whatsapp}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Email
                    </p>
                    <p className="mt-1 font-semibold text-text-primary">
                      {latestOrder.email || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Jenis Usaha
                    </p>
                    <p className="mt-1 font-semibold text-text-primary">
                      {latestOrder.businessType}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Status
                    </p>
                    <span className="mt-1 inline-flex rounded-full bg-yellow/20 px-3 py-1 text-sm font-bold text-yellow-600 dark:text-yellow-400">
                      {latestOrder.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Paket yang Diminati
                    </p>
                    <p className="mt-1 font-semibold text-text-primary">
                      {latestOrder.selectedPackage}
                    </p>
                  </div>

                  {latestOrder.deadline && (
                    <div>
                      <p className="text-sm font-semibold text-text-secondary">
                        Deadline
                      </p>
                      <p className="mt-1 font-semibold text-text-primary">
                        {latestOrder.deadline}
                      </p>
                    </div>
                  )}
                </div>

                {latestOrder.websiteGoal && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-secondary">
                      Tujuan Website
                    </p>
                    <p className="mt-2 leading-relaxed text-text-secondary">
                      {latestOrder.websiteGoal}
                    </p>
                  </div>
                )}

                {latestOrder.referenceWebsite && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-secondary">
                      Referensi Website
                    </p>
                    <p className="mt-2 break-words leading-relaxed text-text-secondary">
                      {latestOrder.referenceWebsite}
                    </p>
                  </div>
                )}

                {latestOrder.description && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-secondary">
                      Deskripsi Kebutuhan
                    </p>
                    <p className="mt-2 leading-relaxed text-text-secondary">
                      {latestOrder.description}
                    </p>
                  </div>
                )}
              </div>

              <aside className="h-fit rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                  Estimasi Harga
                </p>

                <h2 className="mt-2 text-2xl font-bold text-text-primary">
                  Detail Checkout
                </h2>

                <div className="mt-6 rounded-2xl bg-surface-2 p-4">
                  <p className="text-sm font-semibold text-text-secondary">
                    Paket
                  </p>
                  <p className="mt-1 font-bold text-text-primary">
                    {latestOrder.selectedPackage}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {latestOrder.packageDescription || "-"}
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-b border-border pb-5">
                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-text-secondary">
                      Harga paket
                    </span>
                    <span className="font-semibold text-text-primary">
                      {formatCurrency(latestOrder.packageBasePrice)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-text-secondary">
                      Fitur tambahan
                    </span>
                    <span className="font-semibold text-text-primary">
                      {formatCurrency(latestOrder.additionalFeatureTotal)}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text-secondary">
                      Total Estimasi
                    </p>
                    <p className="text-xs text-text-secondary">
                      Akan dikonfirmasi ulang
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-salmon">
                    {formatCurrency(latestOrder.estimatedTotal)}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-text-secondary">
                    Fitur Bawaan
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {includedFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-text-secondary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {additionalFeatures.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-secondary">
                      Fitur Tambahan
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {additionalFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-salmon/10 px-3 py-1 text-xs font-medium text-salmon"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-salmon px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-salmon-hover"
              >
                Chat Admin dengan Order ID
              </a>

              <Link
                to="/"
                className="rounded-xl border border-border bg-surface px-6 py-3 text-center font-semibold text-text-primary transition hover:bg-surface-2"
              >
                Kembali ke Home
              </Link>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-text-secondary">
              Pastikan Order ID dicantumkan saat menghubungi admin agar proses
              konfirmasi lebih cepat.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default OrderSuccess;