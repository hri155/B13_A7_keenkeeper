import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import type { ReactNode } from "react";
import { TimelineProvider } from "@/context/TimelineContext";

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
    <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <TimelineProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            richColors
          />
        </TimelineProvider>
      </body>
    </html>
  );
}