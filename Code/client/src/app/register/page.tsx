'use client';

import Link from "next/link";
import { Irish_Grover } from "next/font/google";
import { FcGoogle } from "react-icons/fc";

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-black text-white px-4 sm:px-6">
      {/* Logo */}
      <h1 className={`text-4xl sm:text-5xl font-bold mb-8 ${irishGrover.className}`}>
        Privy
      </h1>

      {/* Register Form */}
      <form className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-emerald-500/80 hover:bg-emerald-500 font-semibold text-white"
        >
          Register
        </button>

        {/* Google Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold text-white mt-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-white/70 text-sm text-center mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-500 hover:text-emerald-400 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
