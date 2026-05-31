import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { supabase } from "../lib/supabaseClient";

import { orderStatuses } from "../data/orderStatuses";

import { formatCurrency } from "../utils/formatCurrency";
import { formatDateTime } from "../utils/formatDate";
import { getStatusClass } from "../utils/statusStyle";
import { mapOrderFromSupabase } from "../utils/orderMapper";

function AdminOrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [adminNote, setAdminNote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchOrderDetail = async () => {
    setIsLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Gagal mengambil detail order:", error);
      setErrorMessage("Data request tidak ditemukan atau gagal diambil.");
      setOrder(null);
      setIsLoading(false);
      return;
    }

    const mappedOrder = mapOrderFromSupabase(data);

    setOrder(mappedOrder);
    setAdminNote(mappedOrder.adminNote || "");
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrderDetail();
  }, [id]);

  const includedFeatures = useMemo(() => {
    return order?.includedFeatures || [];
  }, [order]);

  const additionalFeatures = useMemo(() => {
    return order?.additionalFeatures || [];
  }, [order]);

  const finalFeatures = useMemo(() => {
    if (!order) return [];

    return (
      order.finalFeatures || [
        ...(order.includedFeatures || []),
        ...(order.additionalFeatures || []),
      ]
    );
  }, [order]);

  const showSavedMessage = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 1500);
  };

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;

    const { data, error } = await supabase
      .from("orders")
      .update({
        status: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Gagal update status:", error);
      alert("Gagal mengubah status order.");
      return;
    }

    setOrder(mapOrderFromSupabase(data));
    showSavedMessage();
  };

  const handleSaveNote = async () => {
    const { data, error } = await supabase
      .from("orders")
      .update({
        admin_note: adminNote,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Gagal menyimpan catatan admin:", error);
      alert("Gagal menyimpan catatan admin.");
      return;
    }

    setOrder(mapOrderFromSupabase(data));
    showSavedMessage();
  };

  const handleDeleteOrder = async () => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus request ini?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("orders").delete().eq("id", id);

    if (error) {
      console.error("Gagal menghapus order:", error);
      alert("Gagal menghapus order.");
      return;
    }

    navigate("/admin/dashboard");
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-light-gray font-ubuntu text-text-slate">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6 pt-28 pb-16">
          <div className="rounded-3xl border border-border-gray bg-white p-8 text-center shadow-sm">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-salmon/30 border-t-salmon" />
            <p className="mt-4 font-semibold text-navy-dark">
              Mengambil detail order...
            </p>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen bg-light-gray font-ubuntu text-text-slate">
        <Navbar />

        <section className="pt-32 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <div className="rounded-3xl border border-border-gray bg-white p-8 shadow-sm md:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-salmon/10">
                <span className="material-symbols-outlined text-4xl text-salmon">
                  search_off
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold text-navy-dark">
                Request Tidak Ditemukan
              </h1>

              <p className="mt-4 leading-relaxed text-text-slate">
                {errorMessage ||
                  "Data request yang kamu cari tidak tersedia atau sudah dihapus."}
              </p>

              <Link
                to="/admin/dashboard"
                className="mt-8 inline-flex rounded-xl bg-salmon px-6 py-3 font-semibold text-white transition hover:bg-salmon-hover"
              >
                Kembali ke Dashboard
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  const orderCode = order.orderCode || "-";

  const whatsappMessage = `Halo ${order.fullName}, kami dari LokaSite ingin mengonfirmasi request konsultasi website Anda.

Order ID: ${orderCode}
Nama Bisnis: ${order.businessName}
Paket: ${order.selectedPackage}
Status Saat Ini: ${order.status}

Apakah kami bisa berdiskusi lebih lanjut terkait kebutuhan website Anda?`;

  const cleanWhatsappNumber = order.whatsapp
    ?.replace(/\D/g, "")
    .replace(/^0/, "62");

  const whatsappLink = `https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-light-gray font-ubuntu text-text-slate">
      <Navbar />

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <Link
                to="/admin/dashboard"
                className="inline-flex items-center gap-2 text-sm font-semibold text-salmon transition hover:text-salmon-hover"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
                Kembali ke Dashboard
              </Link>

              <p className="mt-6 font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                Detail Request
              </p>

              <h1 className="mt-2 text-3xl font-bold text-navy-dark md:text-4xl">
                {order.businessName}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-salmon/10 px-4 py-2 font-inconsolata text-sm font-bold text-salmon">
                  {orderCode}
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-salmon px-5 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-salmon-hover"
              >
                Chat Customer
              </a>

              <button
                type="button"
                onClick={handleDeleteOrder}
                className="rounded-xl border border-red-200 bg-white px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50"
              >
                Hapus Request
              </button>
            </div>
          </div>

          {isSaved && (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
              Perubahan berhasil disimpan.
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-8">
              <section className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-navy-dark">
                  Informasi Customer
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <InfoItem label="Nama Lengkap" value={order.fullName} />
                  <InfoItem label="Nama UMKM/Bisnis" value={order.businessName} />
                  <InfoItem label="WhatsApp" value={order.whatsapp} />
                  <InfoItem label="Email" value={order.email || "-"} />
                  <InfoItem label="Jenis Usaha" value={order.businessType} />
                  <InfoItem
                    label="Tanggal Request"
                    value={formatDateTime(order.createdAt)}
                  />
                </div>
              </section>

              <section className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-navy-dark">
                  Kebutuhan Website
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <InfoItem label="Paket Dipilih" value={order.selectedPackage} />
                  <InfoItem label="Deadline" value={order.deadline || "-"} />
                </div>

                {order.websiteGoal && (
                  <LongInfo label="Tujuan Website" value={order.websiteGoal} />
                )}

                {order.referenceWebsite && (
                  <LongInfo
                    label="Referensi Website"
                    value={order.referenceWebsite}
                    isBreakWord
                  />
                )}

                <LongInfo label="Deskripsi Kebutuhan" value={order.description} />
              </section>

              <section className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-navy-dark">
                  Fitur Website
                </h2>

                <FeatureGroup
                  title="Fitur Bawaan Paket"
                  features={includedFeatures}
                  variant="default"
                />

                {additionalFeatures.length > 0 && (
                  <FeatureGroup
                    title="Fitur Tambahan"
                    features={additionalFeatures}
                    variant="salmon"
                  />
                )}

                <FeatureGroup
                  title="Semua Fitur Final"
                  features={finalFeatures}
                  variant="outline"
                />
              </section>
            </div>

            <aside className="h-fit space-y-6 lg:sticky lg:top-28">
              <section className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm">
                <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                  Status Request
                </p>

                <h2 className="mt-2 text-2xl font-bold text-navy-dark">
                  Kelola Status
                </h2>

                <label className="mt-6 block text-sm font-semibold text-text-muted">
                  Status Saat Ini
                </label>

                <select
                  value={order.status}
                  onChange={handleStatusChange}
                  className="mt-2 w-full rounded-xl border border-border-gray px-4 py-3 font-semibold outline-none transition focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                >
                  {orderStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </section>

              <section className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm">
                <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                  Estimasi Harga
                </p>

                <h2 className="mt-2 text-2xl font-bold text-navy-dark">
                  Detail Checkout
                </h2>

                <div className="mt-6 space-y-3 border-b border-border-gray pb-5">
                  <PriceRow
                    label="Harga Paket"
                    value={formatCurrency(order.packageBasePrice)}
                  />

                  <PriceRow
                    label="Fitur Tambahan"
                    value={formatCurrency(order.additionalFeatureTotal)}
                  />
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
                    {formatCurrency(order.estimatedTotal)}
                  </p>
                </div>
              </section>

              <section className="rounded-3xl border border-border-gray bg-white p-6 shadow-sm">
                <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                  Catatan Admin
                </p>

                <h2 className="mt-2 text-2xl font-bold text-navy-dark">
                  Internal Note
                </h2>

                <textarea
                  value={adminNote}
                  onChange={(event) => setAdminNote(event.target.value)}
                  rows="6"
                  placeholder="Contoh: customer ingin desain modern, perlu follow-up estimasi timeline..."
                  className="mt-5 w-full resize-none rounded-xl border border-border-gray px-4 py-3 outline-none transition focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                />

                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="mt-4 w-full rounded-xl bg-salmon px-5 py-3 font-semibold text-white transition hover:bg-salmon-hover"
                >
                  Simpan Catatan
                </button>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm font-semibold text-text-muted">{label}</p>
      <p className="mt-1 font-semibold text-navy-dark">{value}</p>
    </div>
  );
}

function LongInfo({ label, value, isBreakWord = false }) {
  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-text-muted">{label}</p>
      <p
        className={`mt-2 leading-relaxed text-text-slate ${
          isBreakWord ? "break-words" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function FeatureGroup({ title, features, variant }) {
  const getClassName = () => {
    if (variant === "salmon") {
      return "rounded-full bg-salmon/10 px-3 py-1 text-sm font-medium text-salmon";
    }

    if (variant === "outline") {
      return "rounded-full border border-border-gray bg-white px-3 py-1 text-sm font-medium text-text-slate";
    }

    return "rounded-full bg-light-gray px-3 py-1 text-sm font-medium text-text-slate";
  };

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-text-muted">{title}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span key={feature} className={getClassName()}>
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

function PriceRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-sm text-text-slate">{label}</span>
      <span className="font-semibold text-navy-dark">{value}</span>
    </div>
  );
}

export default AdminOrderDetail;