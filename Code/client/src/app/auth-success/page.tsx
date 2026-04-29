// app/auth-success/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("access_token", token);

      // optional: fetch user later if needed
      router.push("/chats");
    } else {
      router.push("/login");
    }
  }, [router]);

  return <p>Signing you in...</p>;
}