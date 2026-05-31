import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Order from "../pages/Order";
import OrderSuccess from "../pages/OrderSuccess";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AdminOrderDetail from "../pages/AdminOrderDetail";
import ProtectedRoute from "./ProtectedRoute";
import SupabaseTest from "../pages/SupabaseTest";

function AppRoutes() {
  return (
    <Routes>
      {/* Customer Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/order" element={<Order />} />
      <Route path="/order/success" element={<OrderSuccess />} />
      <Route path="/supabase-test" element={<SupabaseTest />} />
      {/* Admin Pages */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute>
            <AdminOrderDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;