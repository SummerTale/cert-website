"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "About Us",
    text: "Who we are | What we do",
    btn: "Collaborate",
    btnLink: "/contact",
    img: "/carousel/about.jpg",
  },
  {
    title: "Assessment",
    text: "Discover insights with assessments",
    btn: "Schedule an Assessment",
    btnLink: "/assessment",
    img: "/carousel/assessment.jpg",
  },
  {
    title: "Courses",
    text: "Explore our learning offerings",
    btn: "View Courses",
    btnLink: "/training",
    img: "/carousel/courses.jpg",
  },
  {
    title: "Coaching",
    text: "Empowering growth through coaching",
    btn: "Our Offerings",
    btnLink: "/coaching",
    img: "/carousel/coaching.jpg",
  },
];

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isManual, setIsManual] = useState(false);

  //4 seconds each slide - Autoplay effect unless buttons are clicked
  useEffect(() => {
    if (isManual) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isManual]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsManual(true);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsManual(true);
  };

  const goToSlide = (idx: number) => {
    setActiveSlide(idx);
    setIsManual(true);
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {slide.text}
            </p>
            <Link
              href={slide.btnLink}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              {slide.btn}
            </Link>
          </div>
        </div>
      ))}

      {/* Controls - always on top */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-3 w-3 rounded-full ${
              idx === activeSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}