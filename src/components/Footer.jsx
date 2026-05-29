import Image from "next/image";
import Link from "next/link";

import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";
// import linkedin from "@/assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    
        <div>
          <h2 className="text-2xl font-bold mb-3">KeenKeeper</h2>

          <p className="text-gray-400">
            Helping you organize and manage projects efficiently.
          </p>
        </div>

  
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/projects">Projects</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            
            <a href="https://facebook.com" target="_blank">
              <Image
                src={facebook}
                alt="Facebook"
                width={30}
                height={30}
                className="hover:scale-110 transition"
              />
            </a>

            <a href="https://twitter.com" target="_blank">
              <Image
                src={twitter}
                alt="Twitter"
                width={30}
                height={30}
                className="hover:scale-110 transition"
              />
            </a>

            <a href="https://instagram.com" target="_blank">
              <Image
                src={instagram}
                alt="Instagram"
                width={30}
                height={30}
                className="hover:scale-110 transition"
              />
            </a>

            {/* <a href="https://linkedin.com" target="_blank">
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={30}
                height={30}
                className="hover:scale-110 transition"
              />
            </a> */}

          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KeenKeeper. All rights reserved.
      </div>
    </footer>
  );
}