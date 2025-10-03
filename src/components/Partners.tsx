"use client";

import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  const partners = [
    {
      name: "SAFe",
      logo: "/partners/safe-logo.png", 
      url: "https://scaledagileframework.com/",
    },
    {
      name: "Scrum Alliance",
      logo: "/partners/scrum-alliance-logo.png", 
      url: "https://www.scrumalliance.org/",
    },
    {
      name: "Scrum.org",
      logo: "/partners/scrum-org-logo.svg",
      url: "https://www.scrum.org/",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-violet-50 to-cyan-50">
      {/* Radial glow overlay */}
      
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-blue-600/70 mb-12">Our Partners</h2>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.url}
              target="_blank"
              className="w-full sm:w-72 max-w-md h-32 bg-white/10 rounded-[19.20px] outline-white/20 flex justify-center items-center hover:-translate-y-2 hover:shadow-lg transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
