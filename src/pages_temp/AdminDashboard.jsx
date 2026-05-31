import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { supabase } from "../lib/supabaseClient";

import { orderStatuses } from "../data/orderStatuses";

import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import { getStatusClass } from "../utils/statusStyle";
import { mapOrderFromSupabase } from "../utils/orderMapper";

function AdminDashboard() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua Status");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchOrders = async () => {
    setIsLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal mengambil orders:", error);
      setErrorMessage("Gagal mengambil data order dari Supabase.");
      setIsLoading(false);
      return;
    }

    const mappedOrders = data.map(mapOrderFromSupabase);

    setOrders(mappedOrders);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const keyword = searchKeyword.toLowerCase();

      const matchesSearch =
        order.orderCode?.toLowerCase().includes(keyword) ||
        order.fullName?.toLowerCase().includes(keyword) ||
        order.businessName?.toLowerCase().includes(keyword) ||
        order.selectedPackage?.toLowerCase().includes(keyword) ||
        order.businessType?.toLowerCase().includes(keyword);

      const matchesStatus =
        statusFilter === "Semua Status" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchKeyword, statusFilter]);

  const summary = useMemo(() => {
    return {
      total: orders.length,
      newOrders: orders.filter((order) => order.status === "Pesanan Baru")
        .length,
      inProgress: orders.filter((order) =>
        [
          "Sudah Dihubungi",
          "Diskusi Kebutuhan",
          "Menunggu Persetujuan",
          "Dikerjakan",
          "Revisi",
        ].includes(order.status)
      ).length,
      completed: orders.filter((order) => order.status === "Selesai").length,
    };
  }, [orders]);

  const handleStatusChange = async (orderId, newStatus) => {
    const { error } = await supabase
      .from("orders")
      .update({
        status: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId);

    if (error) {
      console.error("Gagal update status:", error);
      alert("Gagal mengubah status order.");
      return;
    }

    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );

    setOrders(updatedOrders);
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus request ini?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("orders").delete().eq("id", orderId);

    if (error) {
      console.error("Gagal menghapus order:", error);
      alert("Gagal menghapus order.");
      return;
    }

    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-lighter-gray via-white to-light-gray font-ubuntu text-text-slate">
      <Navbar />

      <section className="pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-salmon/15 px-4 py-2 mb-5">
                <span className="text-lg">📊</span>
                <p className="font-inconsolata text-sm font-bold uppercase tracking-widest text-salmon">
                  Admin Dashboard
                </p>
              </div>

              <h1 className="text-4xl font-bold text-navy-dark md:text-5xl">
                Kelola Request
              </h1>

              <p className="mt-4 max-w-2xl leading-relaxed text-text-slate">
                Pantau, kelola, dan ubah status request konsultasi website dari customer LokaSite.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={fetchOrders}
                className="rounded-xl border-2 border-navy-dark/20 bg-white px-6 py-3 font-semibold text-navy-dark transition-all duration-300 hover:border-blue-accent hover:bg-blue-accent/5 hover:scale-105"
              >
                🔄 Refresh
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl bg-gradient-to-r from-salmon to-salmon-hover px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                🚪 Logout
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-dark/5 to-navy-dark/0 border border-navy-dark/10 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-text-muted">Total Request</p>
                  <span className="text-2xl">📋</span>
                </div>
                <p className="text-4xl font-bold text-navy-dark">
                  {summary.total}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-salmon/10 to-salmon/0 border border-salmon/20 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-salmon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-text-muted">Pesanan Baru</p>
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-4xl font-bold text-salmon">
                  {summary.newOrders}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-accent/10 to-blue-accent/0 border border-blue-accent/20 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-text-muted">Sedang Proses</p>
                  <span className="text-2xl">⚙️</span>
                </div>
                <p className="text-4xl font-bold text-blue-accent">
                  {summary.inProgress}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald/10 to-emerald/0 border border-emerald/20 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-text-muted">Selesai</p>
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-4xl font-bold text-emerald">
                  {summary.completed}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-border-gray/50 bg-white/80 backdrop-blur-sm p-8 shadow-md">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-navy-dark">
                  Daftar Semua Request
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  {filteredOrders.length} request tersedia
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(event) => setSearchKeyword(event.target.value)}
                  placeholder="Cari order, nama, atau UMKM..."
                  className="w-full rounded-xl border border-border-gray/50 bg-lighter-gray px-4 py-3 text-sm outline-none transition focus:border-salmon focus:ring-2 focus:ring-salmon/20 sm:w-80"
                />

                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-xl border border-border-gray/50 bg-lighter-gray px-4 py-3 text-sm outline-none transition focus:border-salmon focus:ring-2 focus:ring-salmon/20"
                >
                  <option value="Semua Status">Semua Status</option>
                  {orderStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-8 rounded-xl border border-red-300/50 bg-red-50/80 backdrop-blur-sm px-5 py-4 text-sm font-semibold text-red-700">
                ⚠️ {errorMessage}
              </div>
            )}

            <div className="mt-8 overflow-x-auto">
              {isLoading ? (
                <div className="rounded-2xl border border-border-gray/30 bg-gradient-to-br from-lighter-gray to-light-gray p-12 text-center">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-salmon/30 border-t-salmon" />
                  <p className="mt-5 font-semibold text-navy-dark">
                    ⏳ Mengambil data order...
                  </p>
                </div>
              ) : filteredOrders.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-border-gray/40 bg-gradient-to-br from-lighter-gray/50 to-light-gray/50 p-12 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-salmon/15 text-3xl">
                    📭
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-navy-dark">
                    Tidak Ada Request
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    Request customer akan muncul di sini setelah mereka mengisi form konsultasi di website.
                  </p>
                </div>
              ) : (
                <table className="w-full min-w-[1100px] border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-left text-xs font-bold uppercase text-text-muted">
                      <th className="px-5 py-3">Order ID</th>
                      <th className="px-5 py-3">Customer</th>
                      <th className="px-5 py-3">UMKM</th>
                      <th className="px-5 py-3">Paket</th>
                      <th className="px-5 py-3">Estimasi</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Tanggal</th>
                      <th className="px-5 py-3">Aksi</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="group rounded-2xl bg-gradient-to-r from-lighter-gray/50 to-lighter-gray/25 text-sm transition-all duration-300 hover:from-lighter-gray to-lighter-gray hover:shadow-md hover:-translate-y-0.5"
                      >
                        <td className="rounded-l-2xl px-5 py-4">
                          <span className="font-inconsolata font-bold text-salmon">
                            {order.orderCode || "-"}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-semibold text-navy-dark">
                            {order.fullName}
                          </p>
                          <p className="mt-1 text-xs text-text-muted">
                            {order.whatsapp}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-semibold text-navy-dark">
                            {order.businessName}
                          </p>
                          <p className="mt-1 text-xs text-text-muted">
                            {order.businessType}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <span className="rounded-lg bg-blue-accent/10 px-3 py-1.5 font-semibold text-blue-accent">
                            {order.selectedPackage}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-bold text-navy-dark">
                            {formatCurrency(order.estimatedTotal)}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <select
                            value={order.status}
                            onChange={(event) =>
                              handleStatusChange(order.id, event.target.value)
                            }
                            className={`rounded-full px-3 py-2 text-xs font-bold outline-none transition-all duration-200 cursor-pointer ${getStatusClass(
                              order.status
                            )}`}
                          >
                            {orderStatuses.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className="px-5 py-4 text-sm">
                          {formatDate(order.createdAt)}
                        </td>

                        <td className="rounded-r-2xl px-5 py-4">
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Link
                              to={`/admin/orders/${order.id}`}
                              className="rounded-lg bg-gradient-to-r from-salmon to-salmon-hover px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:shadow-md hover:scale-105"
                            >
                              Detail
                            </Link>

                            <button
                              type="button"
                              onClick={() => handleDeleteOrder(order.id)}
                              className="rounded-lg border-2 border-red-300/50 bg-white px-4 py-2 text-xs font-bold text-red-600 transition-all duration-300 hover:bg-red-50 hover:border-red-400"
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default AdminDashboard;