import { Link } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { formatCurrency } from "../utils/formatCurrency";

function OrderSuccess() {
  const latestOrder = JSON.parse(
    localStorage.getItem("lokasite_latest_order")
  );

  if (!latestOrder) {
    return (
      <main className="min-h-screen bg-light-gray font-ubuntu text-text-slate">
        <Navbar />

        <section className="pt-32 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <div className="rounded-3xl border border-border-gray bg-white p-8 shadow-sm md:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-salmon/10">
                <span className="material-symbols-outlined text-4xl text-salmon">
                  info
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold text-navy-dark">
                Belum Ada Data Konsultasi
              </h1>

              <p className="mt-4 leading-relaxed text-text-slate">
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
    <main className="min-h-screen bg-light-gray font-ubuntu text-text-slate">
      <Navbar />

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm md:p-10">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-salmon/10">
                <span className="material-symbols-outlined text-5xl text-salmon">
                  check_circle
                </span>
              </div>

              <p className="mt-6 font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                Konsultasi Terkirim
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-navy-dark md:text-4xl">
                Terima kasih, request Anda sudah kami terima
              </h1>

              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-slate">
                Simpan Order ID berikut untuk memudahkan proses konfirmasi
                dengan admin LokaSite melalui WhatsApp.
              </p>

              <div className="mt-6 inline-flex rounded-full bg-salmon/10 px-5 py-2 font-inconsolata text-sm font-bold text-salmon">
                Order ID: {orderCode}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
              <div className="rounded-2xl border border-border-gray bg-light-gray p-6 md:p-8">
                <h2 className="text-xl font-bold text-navy-dark">
                  Ringkasan Konsultasi
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Nama Lengkap
                    </p>
                    <p className="mt-1 font-semibold text-navy-dark">
                      {latestOrder.fullName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Nama UMKM/Bisnis
                    </p>
                    <p className="mt-1 font-semibold text-navy-dark">
                      {latestOrder.businessName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      WhatsApp
                    </p>
                    <p className="mt-1 font-semibold text-navy-dark">
                      {latestOrder.whatsapp}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Email
                    </p>
                    <p className="mt-1 font-semibold text-navy-dark">
                      {latestOrder.email || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Jenis Usaha
                    </p>
                    <p className="mt-1 font-semibold text-navy-dark">
                      {latestOrder.businessType}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Status
                    </p>
                    <span className="mt-1 inline-flex rounded-full bg-yellow/30 px-3 py-1 text-sm font-bold text-navy-dark">
                      {latestOrder.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Paket yang Diminati
                    </p>
                    <p className="mt-1 font-semibold text-navy-dark">
                      {latestOrder.selectedPackage}
                    </p>
                  </div>

                  {latestOrder.deadline && (
                    <div>
                      <p className="text-sm font-semibold text-text-muted">
                        Deadline
                      </p>
                      <p className="mt-1 font-semibold text-navy-dark">
                        {latestOrder.deadline}
                      </p>
                    </div>
                  )}
                </div>

                {latestOrder.websiteGoal && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-muted">
                      Tujuan Website
                    </p>
                    <p className="mt-2 leading-relaxed text-text-slate">
                      {latestOrder.websiteGoal}
                    </p>
                  </div>
                )}

                {latestOrder.referenceWebsite && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-muted">
                      Referensi Website
                    </p>
                    <p className="mt-2 break-words leading-relaxed text-text-slate">
                      {latestOrder.referenceWebsite}
                    </p>
                  </div>
                )}

                {latestOrder.description && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-muted">
                      Deskripsi Kebutuhan
                    </p>
                    <p className="mt-2 leading-relaxed text-text-slate">
                      {latestOrder.description}
                    </p>
                  </div>
                )}
              </div>

              <aside className="h-fit rounded-2xl border border-border-gray bg-white p-6 shadow-sm">
                <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                  Estimasi Harga
                </p>

                <h2 className="mt-2 text-2xl font-bold text-navy-dark">
                  Detail Checkout
                </h2>

                <div className="mt-6 rounded-2xl bg-light-gray p-4">
                  <p className="text-sm font-semibold text-text-muted">
                    Paket
                  </p>
                  <p className="mt-1 font-bold text-navy-dark">
                    {latestOrder.selectedPackage}
                  </p>
                  <p className="mt-2 text-sm text-text-slate">
                    {latestOrder.packageDescription || "-"}
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-b border-border-gray pb-5">
                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-text-slate">
                      Harga paket
                    </span>
                    <span className="font-semibold text-navy-dark">
                      {formatCurrency(latestOrder.packageBasePrice)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-text-slate">
                      Fitur tambahan
                    </span>
                    <span className="font-semibold text-navy-dark">
                      {formatCurrency(latestOrder.additionalFeatureTotal)}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text-muted">
                      Total Estimasi
                    </p>
                    <p className="text-xs text-text-muted">
                      Akan dikonfirmasi ulang
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-salmon">
                    {formatCurrency(latestOrder.estimatedTotal)}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-text-muted">
                    Fitur Bawaan
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {includedFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-text-slate"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {additionalFeatures.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-muted">
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
                className="rounded-xl border border-border-gray bg-white px-6 py-3 text-center font-semibold text-navy-dark transition hover:bg-light-gray"
              >
                Kembali ke Home
              </Link>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-text-muted">
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