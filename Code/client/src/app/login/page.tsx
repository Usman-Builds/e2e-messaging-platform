"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Irish_Grover } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { AuthService } from "@/src/services/auth.service";
import PublicPageGuard from "@/src/components/guards/PublicGuard";
import { notify } from "@/src/utils/toast";

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await AuthService.login(form);

      notify.success("Welcome back!");

      if (!res.user.isUsername) {
        router.push("/username");
      } else {
        router.push("/chats");
      }
    } catch (err) {
      notify.error("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    AuthService.googleLogin();
  };

  return (
    <PublicPageGuard>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-black text-white px-4 sm:px-6">
        {/* Logo */}
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-8 ${irishGrover.className}`}
        >
          Privy
        </h1>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex flex-col gap-4"
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-emerald-500/80 hover:bg-emerald-500 font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogle}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold text-white mt-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="text-white/70 text-sm text-center mt-2">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-emerald-500 hover:text-emerald-400 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </PublicPageGuard>
  );
}
