import { useState } from "react";
import { useNavigate } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { supabase } from "../lib/supabaseClient";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.error("Supabase login error:", error);
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    navigate("/admin/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-lighter-gray via-white to-light-gray font-ubuntu text-text-slate relative overflow-hidden">
      <Navbar />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-salmon/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-accent/15 blur-3xl" />
      </div>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-md rounded-3xl border border-border-gray/50 bg-white/80 backdrop-blur-sm p-6 shadow-lg md:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-salmon/20 to-salmon/10 text-4xl">
              🔐
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-salmon/15 px-4 py-2">
              <p className="font-inconsolata text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-salmon to-salmon-hover bg-clip-text text-transparent">
                Admin Area
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-bold text-navy-dark">
              Login Admin
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Akses dashboard untuk mengelola request konsultasi dari customer LokaSite
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="mb-3 block font-semibold text-navy-dark text-sm">
                📧 Email Admin
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@lokasite.com"
                className="w-full rounded-xl border border-border-gray/50 bg-lighter-gray px-4 py-3.5 text-sm outline-none transition focus:border-salmon focus:ring-2 focus:ring-salmon/30 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold text-navy-dark text-sm">
                🔑 Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password admin"
                className="w-full rounded-xl border border-border-gray/50 bg-lighter-gray px-4 py-3.5 text-sm outline-none transition focus:border-salmon focus:ring-2 focus:ring-salmon/30 focus:bg-white"
              />
            </div>

            {errorMessage && (
              <div className="rounded-xl border border-red-300/50 bg-red-50/80 backdrop-blur-sm px-4 py-3.5 text-sm font-semibold text-red-700">
                ⚠️ {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-6 py-3.5 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100 mt-6"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Memproses...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  Masuk Dashboard
                  <span>→</span>
                </span>
              )}
            </button>
          </form>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-accent/10 to-blue-accent/5 border border-blue-accent/20 p-5">
            <p className="flex items-center gap-2 text-xs font-bold uppercase text-blue-accent tracking-wide mb-2">
              ℹ️ Informasi Keamanan
            </p>

            <p className="text-sm leading-relaxed text-text-slate">
              Gunakan akun admin yang telah dibuat di <span className="font-semibold">Supabase Auth</span>. Credential Anda aman dan tidak disimpan di kode frontend.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default AdminLogin;
