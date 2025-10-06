"use client";

import { useState } from "react";
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

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gradient-to-r from-violet-50 to-cyan-50 text-center">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-blue-600/70 mb-2">Get Inspired!</h2>
      <p className="text-base text-zinc-600 mb-10">
        Hear from our learners about their transformative experiences with our programs.
      </p>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        {/* Quote Icon */}
        <LuQuote className="text-5xl text-gray-700 opacity-80 mx-auto mb-6" />

        {/* Quote Text */}
        <p className="italic text-lg text-gray-900 leading-relaxed mb-8">
          &ldquo;{testimonials[index].quote}&ldquo;
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-4">
          <Image
            src={testimonials[index].avatar}
            alt={testimonials[index].name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-semibold text-gray-900">{testimonials[index].name}</h4>
            <p className="text-sm text-zinc-600">{testimonials[index].role}</p>
            <p className="text-sm text-zinc-600">{testimonials[index].company}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100"
        >
          <HiChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100"
        >
          <HiChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "transparent" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
