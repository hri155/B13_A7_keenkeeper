import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import type { ReactNode } from "react";

export const metadata = {
  title: "KeenKeeper",
  description: "Friendship management app",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <Toaster
          position="top-right"
          richColors
        />
      </body>
    </html>
  );
}