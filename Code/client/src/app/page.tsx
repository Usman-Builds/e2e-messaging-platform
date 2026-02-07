"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLock, FaComments, FaUserShield } from "react-icons/fa";
import { Irish_Grover } from "next/font/google";

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

export default function LandingPage() {
  return (
    <div
      className="relative w-screen overflow-hidden bg-black text-white"
      style={{ height: "100dvh" }} // fixes mobile viewport
    >
      {/* Animated green blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-6rem] sm:bottom-[-8rem] right-[-6rem] sm:right-[-8rem] w-64 sm:w-[28rem] h-64 sm:h-[28rem] bg-green-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-4 md:px-10 py-4 sm:py-6">
        <h1
          className={`flex-shrink-0 text-3xl sm:text-4xl font-bold tracking-wide ${irishGrover.className}`}
        >
          Privy
        </h1>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 whitespace-nowrap"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 whitespace-nowrap"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center gap-6"
        style={{ minHeight: "calc(100dvh - 80px)" }} // height minus navbar
      >
        {/* Hero */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-5"
        >
          Private. Secure. Yours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-xs sm:max-w-md md:max-w-xl text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-8"
        >
          A modern messaging platform built for people who care about privacy,
          control, and minimal design.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-12">
          <Link
            href="/register"
            className="px-5 sm:px-6 py-2 sm:py-3 rounded-xl bg-emerald-500/80 hover:bg-emerald-500 font-semibold"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-5 sm:px-6 py-2 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20"
          >
            I already have an account
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl w-full">
          {[
            {
              icon: <FaLock size={24} />,
              title: "End-to-End Privacy",
              desc: "Your messages stay strictly between you and trusted contacts.",
            },
            {
              icon: <FaComments size={24} />,
              title: "Real-Time Messaging",
              desc: "Instant delivery with a clean, modern chat experience.",
            },
            {
              icon: <FaUserShield size={24} />,
              title: "Full Control",
              desc: "Decide who can contact you and how you stay visible.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-md flex flex-col items-center text-center"
            >
              <div className="mb-2 sm:mb-3 text-emerald-400">{f.icon}</div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
