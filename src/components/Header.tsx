"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";


export default function Header() {
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTrainingOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setTrainingOpen(false);
    }, 1000);
  };

  return (
    <header className="shadow-sm fixed w-full top-0 z-50 bg-white/40 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-23">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          <Image src="/logo.png" alt="Agile Logo" width={120} height={48} className="h-15 w-auto" />
        </Link>

          {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-small text-gray-800">
          <Link href="/assessment"
          className={`transition-colors ${
              isActive("/assessment")
                ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold"
                : "hover:text-primary"
            }`}>
            Assessment
          </Link>
          {/* Training Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1">
              Training
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.23 3.35a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {trainingOpen && (
              <div className="absolute left-0 top-full mt-2 w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition-all">
                <Link
                  href="/training/public"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Public
                </Link>
                <Link
                  href="/training/corporate"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Corporate
                </Link>
                <Link
                  href="/training/upcoming"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-b-xl"
                >
                  Upcoming Courses
                </Link>
              </div>
            )}
          </div>

            <Link href="/coaching"
            className={`transition-colors ${
              isActive("/coaching")
                ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold"
                : "hover:text-primary"
            }`}>
            Coaching
          </Link>
          <Link href="/resources"
          className={`transition-colors ${
              isActive("/resources")
                ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 font-semibold"
                : "hover:text-primary"
            }`}>
            Resources
          </Link>
        </nav>

        {/* Hamburger button (mobile only) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* CTA */}
              <Link
                href="/courses"
                className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium opacity-90 hover:opacity-100 transition"
              >
                View Courses
              </Link>
              {/* Social Media Icons */}
              <div className="text-lg flex gap-3 text-gray-700">
                |
                <Link href="https://facebook.com" target="_blank">
                  <FiFacebook />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <FiTwitter />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <FiLinkedin />
                </Link>
                <Link href="https://youtube.com" target="_blank">
                  <FiYoutube />
                </Link>
              </div>
        </div>

        
        
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <Link href="/assessment" onClick={() => setMenuOpen(false)}>Assessments</Link>
            <Link href="/training" onClick={() => setMenuOpen(false)}>Training</Link>
            <Link href="/coaching" onClick={() => setMenuOpen(false)}>Coaching</Link>
            <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
