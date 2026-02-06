"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg dark:bg-bgDark">
      <div className="w-full max-w-md p-8 bg-white dark:bg-[#111315] rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-primary dark:text-primaryDark mb-6 text-center">
          Register
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border border-border dark:border-borderDark rounded-md bg-bg dark:bg-bgDark text-text dark:text-textDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-border dark:border-borderDark rounded-md bg-bg dark:bg-bgDark text-text dark:text-textDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-border dark:border-borderDark rounded-md bg-bg dark:bg-bgDark text-text dark:text-textDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
          />
          <button
            type="submit"
            className="p-3 rounded-md bg-primary dark:bg-primaryDark text-white dark:text-black font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-textMuted dark:text-textMutedDark">
          Already have an account?{" "}
          <Link href="/login" className="text-primary dark:text-primaryDark hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
