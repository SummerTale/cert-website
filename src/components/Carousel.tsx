"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "About Us",
    subtitle: "Who we are and what we do",
    image: "/carousel/hero1.jpg",
    cta: "Collaborate",
  },
  {
    title: "Assessment",
    subtitle: "Our Assessment service helps team identify current capabilities and areas for improvement",
    image: "/carousel/hero2.jpg",
    cta: "Schedule an Assessment",
  },
  {
    title: "Courses",
    subtitle: "Our courses provide practical, hands-on learning for teams and individuals looking to implement Scrum effectively",
    image: "/carousel/hero3.jpg",
    cta: "View Courses",
  },
  {
    title: "Coaching",
    subtitle: "Our coaching supports teams and leaders in applying Scrum in real-world settings",
    image: "/carousel/hero4.jpg",
    cta: "Our Offereings",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoScroll(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoScroll(false);
  };

  return (
    <section className="relative h-[582px] bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 via-fuchsia-400/10 to-cyan-400/10" />

      <div className="relative max-w-5xl mx-auto px-10 py-18">
        {/* Card Container */}
        <div className="relative w-full h-[400px] bg-white/90 rounded-3xl shadow-[0_0_26px_rgba(139,92,246,0.46)] overflow-hidden">
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover rounded-3xl transition-opacity duration-700"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />

          {/* Text Content */}
          <div className="absolute bottom-10 left-6 text-white space-y-3">
            <h3 className="text-base font-normal leading-normal">
              {slides[current].title}
            </h3>
            <p className="text-lg opacity-90 leading-7">
              {slides[current].subtitle}
            </p>
            <button className="mt-2 w-auto h-10 px-6 bg-gradient-to-r from-white to-gray-100 text-gray-900 text-sm font-medium rounded-full">
              {slides[current].cta}
            </button>
          </div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 size-9 rounded-2xl border border-white/30 flex justify-center items-center text-white hover:bg-white/20"
          >
            ‹
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 size-9 rounded-2xl border border-white/30 flex justify-center items-center text-white hover:bg-white/20"
          >
            ›
          </button>
        </div>
        {/* Navigation Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoScroll(false);
                }}
                className={`size-3 rounded-full transition-all ${
                  index === current
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
