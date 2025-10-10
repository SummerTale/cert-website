"use client";

import { useState, useEffect } from "react";
import { LuQuote } from "react-icons/lu";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Outstanding training quality and exceptional support throughout the learning journey. Highly recommend their services.",
    name: "Lisa Thompson",
    role: "Business Analyst",
    company: "Strategic Consulting",
    avatar: "/testimonials/lisa.jpg",
  },
  {
    quote:
      "The coaching sessions were transformative. My coach helped me develop leadership skills that have significantly impacted my career progresssion.",
    name: "Michael Chen",
    role: "Engineering Director",
    company: "Innovation Labs",
    avatar: "/testimonials/michael.jpg",
  },
  {
    quote:
      "The corporate training program exceeded our expectations. Our teams productivity and collaboration improved dramatically after the sessions.",
    name: "Emily Rodriguez",
    role: "HR Director",
    company: "Global Solutions",
    avatar: "/testimonials/emily.jpg",
  },
  {
    quote:
      "The comprehensive approach to skill development and the personalized feedback made all the difference in our teams agile transformation.",
    name: "David Park",
    role: "Scrum Master",
    company: "Agile Dynamics",
    avatar: "/testimonials/david.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Optional: Auto-slide every 6s
  useEffect(() => {
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-violet-50 to-cyan-50 text-center overflow-hidden">
      {/* Section Header */}
      <h2 className="text-xl font-semibold text-blue-600/70 mb-2">
        Get Inspired!
      </h2>
      <p className="text-base text-zinc-600 mb-10">
        Hear from our learners about their transformative experiences with our
        programs.
      </p>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 33.3333}%)`,
            width: `${testimonials.length * 33.3333}%`,
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-1/3 flex-shrink-0 px-4">
              <div
                className={`bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 ${
                  i === index ? "scale-105 shadow-xl" : "scale-95 opacity-90"
                }`}
              >
                <LuQuote className="text-5xl text-gray-700 opacity-80 mx-auto mb-6" />
                <p className="text-gray-700 italic text-sm leading-relaxed max-w-sm">
                  “{t.quote}”
                </p>
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-blue-600 font-semibold text-lg">
                  {t.name}
                </h3>
                <p className="text-sm text-zinc-500">{t.role}</p>
                <p className="text-sm text-zinc-500 mb-4">{t.company}</p>
                
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-50 transition"
        >
          <HiChevronLeft className="text-gray-700 text-xl" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-50 transition"
        >
          <HiChevronRight className="text-gray-700 text-xl" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-blue-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
