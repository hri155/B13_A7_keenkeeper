"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7F6] px-6 py-20 text-slate-900">
      <div className="max-w-xl w-full rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-900 mb-4">
          Page Not Found
        </p>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-slate-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
