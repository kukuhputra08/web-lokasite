import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

import { packageOptions } from "../data/packageOptions";
import { businessTypes } from "../data/businessTypes";
import { additionalFeatures } from "../data/additionalFeatures";

import { formatCurrency } from "../utils/formatCurrency";
import { generateOrderCode } from "../utils/orderCode";
import { mapOrderToSupabase } from "../utils/orderMapper";

import { supabase } from "../lib/supabaseClient";

function Order() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    whatsapp: "",
    email: "",
    businessType: "",
    selectedPackage: "",
    websiteGoal: "",
    additionalFeatures: [],
    deadline: "",
    referenceWebsite: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const selectedPackageData = useMemo(() => {
    return packageOptions.find(
      (item) => item.name === formData.selectedPackage,
    );
  }, [formData.selectedPackage]);

  const additionalFeatureTotal = useMemo(() => {
    return formData.additionalFeatures.reduce((total, featureName) => {
      const feature = additionalFeatures.find(
        (item) => item.name === featureName,
      );
      return total + (feature?.price || 0);
    }, 0);
  }, [formData.additionalFeatures]);

  const estimatedTotal = useMemo(() => {
    return (selectedPackageData?.basePrice || 0) + additionalFeatureTotal;
  }, [selectedPackageData, additionalFeatureTotal]);

  const finalFeatures = useMemo(() => {
    if (!selectedPackageData) return [];

    return [
      ...selectedPackageData.includedFeatures,
      ...formData.additionalFeatures,
    ];
  }, [selectedPackageData, formData.additionalFeatures]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "selectedPackage" ? { additionalFeatures: [] } : {}),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleAdditionalFeatureChange = (featureName) => {
    setFormData((prevData) => {
      const isSelected = prevData.additionalFeatures.includes(featureName);

      return {
        ...prevData,
        additionalFeatures: isSelected
          ? prevData.additionalFeatures.filter((item) => item !== featureName)
          : [...prevData.additionalFeatures, featureName],
      };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi.";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Nama UMKM/bisnis wajib diisi.";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Jenis usaha wajib dipilih.";
    }

    if (!formData.selectedPackage) {
      newErrors.selectedPackage = "Paket website wajib dipilih.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Deskripsi kebutuhan wajib diisi.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);
  setSubmitError("");

  const newOrder = {
    id: crypto.randomUUID(),
    orderCode: generateOrderCode(),
    ...formData,
    packageBasePrice: selectedPackageData.basePrice,
    packageDescription: selectedPackageData.description,
    includedFeatures: selectedPackageData.includedFeatures,
    finalFeatures,
    additionalFeatureTotal,
    estimatedTotal,
    status: "Pesanan Baru",
    adminNote: "",
    createdAt: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("orders")
    .insert(mapOrderToSupabase(newOrder));

  if (error) {
    console.error("Gagal menyimpan order:", error);
    setSubmitError(error.message);
    setIsSubmitting(false);
    return;
  }

  localStorage.setItem("lokasite_latest_order", JSON.stringify(newOrder));

  setIsSubmitting(false);
  navigate("/order/success");
};

  return (
    <main className="min-h-screen bg-background font-sans text-text-primary">
      <div className="fixed bottom-8 left-8 z-40 flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-full bg-salmon px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-salmon-hover hover:scale-105"
        >
          <ArrowLeft strokeWidth={1.5} className="h-5 w-5" />
          Kembali ke Home
        </button>
        <ThemeToggle className="h-12 w-12 shadow-lg" />
      </div>

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
              Form Konsultasi
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              Ceritakan Kebutuhan Website UMKM Anda
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
              Pilih paket yang sesuai, lalu sistem akan otomatis menghitung
              estimasi harga berdasarkan fitur yang dipilih.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]"
          >
            <div className="rounded-3xl border border-border bg-surface p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Nama Lengkap <span className="text-salmon">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Contoh: Kukuh Putra"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-salmon">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Nama UMKM/Bisnis <span className="text-salmon">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Contoh: Dapur Nusa"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                  {errors.businessName && (
                    <p className="mt-2 text-sm text-salmon">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Nomor WhatsApp <span className="text-salmon">*</span>
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                  {errors.whatsapp && (
                    <p className="mt-2 text-sm text-salmon">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Contoh: nama@email.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Jenis Usaha <span className="text-salmon">*</span>
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  >
                    <option value="">Pilih jenis usaha</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="mt-2 text-sm text-salmon">
                      {errors.businessType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Paket yang Diminati <span className="text-salmon">*</span>
                  </label>
                  <select
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  >
                    <option value="">Pilih paket website</option>
                    {packageOptions.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name} - mulai {formatCurrency(item.basePrice)}
                      </option>
                    ))}
                  </select>
                  {errors.selectedPackage && (
                    <p className="mt-2 text-sm text-salmon">
                      {errors.selectedPackage}
                    </p>
                  )}
                </div>

                {selectedPackageData && (
                  <div className="md:col-span-2 rounded-2xl border border-border bg-surface-2 p-5">
                    <p className="font-semibold text-text-primary">
                      Fitur bawaan paket {selectedPackageData.name}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedPackageData.includedFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-text-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="md:col-span-2">
                  <label className="mb-2 block font-semibold text-text-primary">
                    Tujuan Website
                  </label>
                  <input
                    type="text"
                    name="websiteGoal"
                    value={formData.websiteGoal}
                    onChange={handleChange}
                    placeholder="Contoh: ingin menampilkan katalog produk dan menerima pesanan via WhatsApp"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-3 block font-semibold text-text-primary">
                    Tambahan Fitur Opsional
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {additionalFeatures.map((feature) => (
                      <label
                        key={feature.name}
                        className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                          formData.additionalFeatures.includes(feature.name)
                            ? "border-salmon bg-salmon/10 text-text-primary"
                            : "border-border bg-background text-text-secondary hover:border-accent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.additionalFeatures.includes(
                              feature.name,
                            )}
                            onChange={() =>
                              handleAdditionalFeatureChange(feature.name)
                            }
                            className="h-4 w-4 accent-salmon"
                          />
                          <span className="text-sm font-medium">
                            {feature.name}
                          </span>
                        </div>

                        <span className="text-sm font-semibold text-salmon">
                          +{formatCurrency(feature.price)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-text-primary">
                    Referensi Website
                  </label>
                  <input
                    type="text"
                    name="referenceWebsite"
                    value={formData.referenceWebsite}
                    onChange={handleChange}
                    placeholder="Masukkan link website referensi jika ada"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block font-semibold text-text-primary">
                    Deskripsi Kebutuhan <span className="text-salmon">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Ceritakan kebutuhan website Anda."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-salmon">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <aside className="h-fit rounded-3xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-28">
              <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                Ringkasan Pesanan
              </p>

              <h2 className="mt-2 text-2xl font-bold text-text-primary">
                Estimasi Checkout
              </h2>

              {!selectedPackageData ? (
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  Pilih paket website terlebih dahulu untuk melihat estimasi
                  harga.
                </p>
              ) : (
                <>
                  <div className="mt-6 rounded-2xl bg-surface-2 p-4">
                    <p className="text-sm font-semibold text-text-secondary">
                      Paket Dipilih
                    </p>
                    <p className="mt-1 font-bold text-text-primary">
                      {selectedPackageData.name}
                    </p>
                    <p className="mt-2 text-sm text-text-secondary">
                      {selectedPackageData.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 border-b border-border pb-5">
                    <div className="flex justify-between gap-4">
                      <span className="text-sm text-text-secondary">
                        Harga paket
                      </span>
                      <span className="font-semibold text-text-primary">
                        {formatCurrency(selectedPackageData.basePrice)}
                      </span>
                    </div>

                    {formData.additionalFeatures.map((featureName) => {
                      const feature = additionalFeatures.find(
                        (item) => item.name === featureName,
                      );

                      return (
                        <div
                          key={featureName}
                          className="flex justify-between gap-4"
                        >
                          <span className="text-sm text-text-secondary">
                            {featureName}
                          </span>
                          <span className="font-semibold text-text-primary">
                            {formatCurrency(feature.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-text-secondary">
                        Total Estimasi
                      </p>
                      <p className="text-xs text-text-secondary">
                        Belum termasuk biaya tambahan khusus
                      </p>
                    </div>

                    <p className="text-2xl font-bold text-salmon">
                      {formatCurrency(estimatedTotal)}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-text-secondary">
                      Fitur Final
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {finalFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-text-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {submitError && (
                <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-500">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-salmon px-8 py-3 font-bold text-white shadow-sm transition hover:bg-salmon-hover disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!selectedPackageData || isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Konsultasi"}
              </button>

              <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                Harga bersifat estimasi. Tim LokaSite akan mengonfirmasi kembali
                setelah diskusi kebutuhan melalui WhatsApp.
              </p>
            </aside>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Order;
