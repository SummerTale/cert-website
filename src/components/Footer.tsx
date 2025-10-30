"use client";

import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-violet-900 to-cyan-900 text-white relative">
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-2 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Logo + Description */}
        <div>
          <div className="mb-6">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image src="/logo-light.png" alt="Agile Logo" width={150} height={100} className="w-auto" />
            </Link>
          </div>
          <div className="max-w-[80%] md:max-w-[80%]">
            <p className="text-white/80 text-16px leading-relaxed font-normal mt-4">
              Empowering individuals and organizations through comprehensive
              assessment, training, and coaching solutions. Transform your
              potential into performance.
            </p>
          </div>
        </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20">
          {/* Related Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Related Links</h3>
            <ul className="space-y-2 text-white/80 text-16px">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
              <li><Link href="/training" className="hover:text-white">Become a trainer</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-medium mb-6">Follow us</h3>
            <div className="flex space-x-8 text-white/70 text-xl">
              <Link href="https://facebook.com" target="_blank" className="hover:text-white">
                  <FiFacebook />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                  <FiTwitter />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
                  <FiLinkedin />
                </Link>
                <Link href="https://youtube.com" target="_blank" className="hover:text-white">
                  <FiYoutube />
                </Link>
            </div>
          </div>
        </div>
        </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-white/20 mt-1 pt-4 pb-6">
        <p className="text-center text-sm text-white/60 py-4">
          © 2025 Agile. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
