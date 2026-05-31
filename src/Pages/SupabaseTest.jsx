import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function SupabaseTest() {
  const [status, setStatus] = useState("Belum dites");
  const [errorMessage, setErrorMessage] = useState("");

  const testConnection = async () => {
    setStatus("Mengecek koneksi...");
    setErrorMessage("");

    const { data, error } = await supabase
      .from("orders")
      .select("id, order_code")
      .limit(1);

    if (error) {
      setStatus("Gagal connect ke Supabase");
      setErrorMessage(error.message);
      console.error("Supabase error:", error);
      return;
    }

    setStatus("Berhasil connect ke Supabase");
    console.log("Supabase data:", data);
  };

  return (
    <main className="min-h-screen bg-light-gray p-8 font-ubuntu">
      <div className="mx-auto max-w-xl rounded-3xl border border-border-gray bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-navy-dark">
          Supabase Connection Test
        </h1>

        <p className="mt-4 text-text-slate">
          Klik tombol di bawah untuk mengecek apakah React sudah bisa membaca
          table orders dari Supabase.
        </p>

        <button
          onClick={testConnection}
          className="mt-6 rounded-xl bg-salmon px-6 py-3 font-bold text-white transition hover:bg-salmon-hover"
        >
          Test Supabase
        </button>

        <div className="mt-6 rounded-2xl bg-light-gray p-4">
          <p className="font-semibold text-navy-dark">Status:</p>
          <p className="mt-2 text-text-slate">{status}</p>

          {errorMessage && (
            <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default SupabaseTest;