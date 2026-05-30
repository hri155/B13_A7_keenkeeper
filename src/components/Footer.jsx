import Image from "next/image";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-[#1F5B47] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold">
          KeenKeeper
        </h1>

      <p className="mt-4 text-sm text-gray-200">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      <h3 className="text-lg font-semibold mt-6">Social Links</h3>

      <div className="flex justify-center gap-4 mt-6">
        <Image src={facebook} alt="" width={30} />
        <Image src={instagram} alt="" width={30} />
        <Image src={twitter} alt="" width={30} />
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
          <p className="text-center sm:text-left">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}