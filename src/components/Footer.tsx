"use client";

import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-violet-900 to-cyan-900 text-white relative">
      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Logo + Description */}
        <div>
          <div className="mb-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              <img src="/logo.png" alt="Agile Logo" className="h-12" />
            </Link>
          </div>
          <p className="text-white/80 text-16px leading-relaxed font-normal mt-4">
            Empowering individuals and organizations through comprehensive
            assessment, training, and coaching solutions. Transform your
            potential into performance.
          </p>
        </div>

          {/* Related Links */}
          <div>
            <h3 className="text-20px font-medium mb-4">Related Links</h3>
            <ul className="space-y-2 text-white/80 text-16px">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
              <li><Link href="/training" className="hover:text-white">Become a trainer</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-20px font-medium mb-4">Follow us</h3>
            <div className="flex space-x-5 text-white/70 w-2 h-2">
              <Link href="#" className="hover:text-white"><FiFacebook /></Link>
              <Link href="#" className="hover:text-white"><FiTwitter /></Link>
              <Link href="#" className="hover:text-white"><FiLinkedin /></Link>
              <Link href="#" className="hover:text-white"><FiYoutube /></Link>
            </div>
          </div>
        </div>

      {/* Bottom Bar */}
      <div className="max-w-3xl mx-auto border-t border-white/20 mt-8 pt-6 pb-12">
        <p className="text-center text-sm text-white/60 py-4">
          © 2025 Agile. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
