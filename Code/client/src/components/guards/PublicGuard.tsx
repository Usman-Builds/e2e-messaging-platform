'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";

export default function PublicPageGuard({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    // 🔓 Not logged in → allow access
    if (!user) return;

    // 🚧 Logged in but no username → onboarding
    if (user && !user.isUsername) {
      router.replace("/username");
      return;
    }

    // ✅ Fully logged in → chats
    if (user && user.isUsername) {
      router.replace("/chats");
      return;
    }
  }, [user, loading]);

  // ⏳ prevent flicker
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  // 🚫 block UI while redirecting
  if (user) return null;

  return children;
}