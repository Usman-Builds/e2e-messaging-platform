'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserService } from "@/src/services/user.service";

export function useAuth(options?: {
  requireAuth?: boolean;
  requireUsername?: boolean;
}) {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const me = await UserService.getMe();
        setUser(me);

        // 🔒 Not logged in
        if (options?.requireAuth && !me) {
          router.push("/login");
          return;
        }

        // 🚧 Username not set
        if (options?.requireUsername && !me.isUsername) {
          router.push("/username");
          return;
        }

      } catch (err) {
        // token invalid / expired
        if (options?.requireAuth) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { user, loading };
}