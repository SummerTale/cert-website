"use client";

import { useState } from "react";
import Link from "next/link";

const sections = {
  who: {
    title: "Who We Are",
    text: `We are a team of professionals dedicated to helping 
    organizations and individuals create value through adaptive 
    solutions for complex problems. Our approach is rooted in 
    the Scrum framework, which emphasizes collaboration, transparency, 
    and continuous improvement.`,
    moreLink: "/about#who-we-are",
  },
  what: {
    title: "What We Do",
    text: `We guide teams in implementing Scrum practices to enhance 
    productivity, foster innovation, and deliver high-quality results. 
    By focusing on iterative development and empirical decision-making, 
    we help teams and organizations achieve their goals effectively.`,
    moreLink: "/about#what-we-do",
  },
  contact: {
    title: "Contact Us",
    text: `Have questions about our training, coaching, or assessments? Our
    team is here to help.`,
    moreLink: "/contact",
  },
};

export default function AboutUs() {
  const [active, setActive] = useState<keyof typeof sections>("who");

  return (
    <section className="py-16 bg-gradient-to-r from-violet-50 to-cyan-50 text-center">
      {/* Heading */}
      <h2 className="text-base font-semibold text-blue-600/70 mb-8">About Us</h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key as keyof typeof sections)}
            className={`w-36 h-9 px-4 py-2 rounded-2xl text-sm font-medium transition 
              ${
                active === key
                  ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white"
                  : "border border-orange-300 text-orange-700 hover:bg-orange-50 hover:-translate-y-2 hover:shadow-lg"
              }`}
          >
            {sections[key as keyof typeof sections].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg font-medium text-gray-950 mb-4">{sections[active].title}</h3>
        <p className="text-base text-zinc-600 leading-relaxed">{sections[active].text}</p>
        <Link href={sections[active].moreLink} className="text-sm text-blue-600 hover:underline">
          Learn more
        </Link>
      </div>
    </section>
  );
}
