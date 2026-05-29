"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock3, BarChart3 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timeline", href: "/timeline", icon: Clock3 },
    { name: "Stats", href: "/stats", icon: BarChart3 },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-slate-900">
          KeenKeeper
        </Link>

        <div className="flex items-center gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition ${
                  active
                    ? "bg-emerald-900 text-white"
                    : "text-slate-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={15} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}