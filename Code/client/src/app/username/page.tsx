'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Irish_Grover } from "next/font/google";
import { UserService } from "@/src/services/user.service";
import AuthGuard from "@/src/components/guards/AuthGuard";
import toast from "react-hot-toast";
import { notify } from "@/src/utils/toast";

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

export default function UsernamePage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState(null);

  // 🔍 check username availability (debounced)
  useEffect(() => {
    if (username.length < 3) {
      setAvailable(null);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setChecking(true);
        const res = await UserService.checkUsername(username);
        setAvailable(res.available);
      } catch {
        setAvailable(null);
      } finally {
        setChecking(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!available) return;

    setLoading(true);

    try {
      await UserService.setUsername(username);
      toast.success("Username set successfully");
      router.push("/chats");
    } catch (err) {
      notify.error("Username already taken");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ ONLY require auth here (NOT username)
    <AuthGuard requireAuth>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-black text-white px-4 sm:px-6">
        <h1 className={`text-4xl sm:text-5xl font-bold mb-8 ${irishGrover.className}`}>
          Privy
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-center mb-2">
            Choose your username
          </h2>

          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
            className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* 🔥 Availability feedback */}
          {username.length >= 3 && (
            <p className="text-sm text-center">
              {checking && <span className="text-white/50">Checking...</span>}
              {!checking && available === true && (
                <span className="text-emerald-500">Username available</span>
              )}
              {!checking && available === false && (
                <span className="text-red-500">Username already taken</span>
              )}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !available}
            className="px-4 py-2 rounded-lg bg-emerald-500/80 hover:bg-emerald-500 font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Saving..." : "Continue"}
          </button>

          <p className="text-white/50 text-xs text-center">
            You can change this later in settings
          </p>
        </form>
      </div>
    </AuthGuard>
  );
}