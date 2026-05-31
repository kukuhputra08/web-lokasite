import { useEffect, useState } from "react";
import { Navigate } from "react-router";

import { supabase } from "../lib/supabaseClient";

function ProtectedRoute({ children }) {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      setSession(data.session);
      setIsCheckingSession(false);
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setIsCheckingSession(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (isCheckingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-light-gray font-ubuntu">
        <div className="rounded-3xl border border-border-gray bg-white p-8 text-center shadow-sm">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-salmon/30 border-t-salmon" />
          <p className="mt-4 font-semibold text-navy-dark">
            Mengecek sesi admin...
          </p>
        </div>
      </main>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;