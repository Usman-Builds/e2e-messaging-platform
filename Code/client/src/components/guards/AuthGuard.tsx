'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";

export default function AuthGuard({
  children,
  requireAuth = true,
  requireUsername = false,
}) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    // 🔒 Not logged in
    if (requireAuth && !user) {
      router.replace("/login");
      return;
    }

    // 🚧 Username not set
    if (requireUsername && user && !user.isUsername) {
      router.replace("/username");
      return;
    }
  }, [user, loading]);

  // ⏳ Prevent flicker
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  // 🚫 Block rendering while redirecting
  if (requireAuth && !user) return null;
  if (requireUsername && user && !user.isUsername) return null;

  return children;
}