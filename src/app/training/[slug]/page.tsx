"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { coursesData } from "@/data/coursesData";
import { LuCalendar, LuClock, LuBookOpen, LuCircleCheck, LuUsers, LuStar, LuDollarSign } from "react-icons/lu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <><Header />
    <main className="bg-gradient-to-br from-violet-50 to-cyan-50 min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-violet-200/60 to-cyan-100/60 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-center md:text-left">
          
            {/* Hero Left (Image Placeholder or Logo) */}
            <div className="relative w-full md:w-[300px] h-[150px] rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0" />
                <Image
                    src={course.avatar}
                    alt="Agile Training & Coaching Logo"
                    width={150}
                    height={150}
                    className="relative z-10 object-contain opacity-90"
                />
            </div>

          {/* Hero Right */}
          <div className="md:w-3/4 space-y-3 md:pl-10">
            <span className="inline-block bg-gradient-to-r from-[#7A5DFD] to-[#5CC7FD] text-white text-xs px-3 py-1 rounded-full font-medium">
              {course.type}
            </span>
            <h1 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              {course.title}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <LuCalendar className="text-violet-600 text-xl" /> {course.date}
              </span>
              <span className="flex items-center gap-2">
                <LuClock className="text-cyan-500 text-xl" /> {course.duration}
              </span>
            </div>
            <Link href={{
              pathname: "/register",
              query: { course: course.title }
            }}>
            <button className="mt-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
              Register Now
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto mt-12 px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-ms flex items-center gap-2 mb-4
            text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              <LuBookOpen className="text-gray-800 text-2xl" /> About This Course
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This comprehensive {course.title} course provides you with the essential
              knowledge and practical skills to lead Agile teams effectively. Through
              interactive workshops and real-world scenarios, you will gain hands-on
              experience implementing Scrum principles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Level */}
                <div>
                <p className="text-gray-700 text-sm">Level</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.level}</p>
                </div>

                {/* Language */}
                <div>
                <p className="text-gray-700 text-sm">Language</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.language}</p>
                </div>

                {/* Format */}
                <div>
                <p className="text-gray-700 text-sm">Format</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.format}</p>
                </div>

                {/* Certificate */}
                <div>
                <p className="text-gray-700 text-sm">Certificate</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.certificate}</p>
                </div>

                {/* Prerequisites */}
                <div>
                <p className="text-gray-700 text-sm">Prerequisites</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.prerequisites}</p>
                </div>

                {/* Materials */}
                <div>
                <p className="text-gray-700 text-sm">Materials</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.materials}</p>
                </div>
            </div>
          </div>

          {/* What You’ll Learn */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-md flex items-center gap-2 mb-4
            text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              <LuCircleCheck className="text-gray-800 text-2xl"/> What You’ll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-gray-600">
              {course.learnings.map((item, index) => (
                <p key={index} className="flex items-start gap-1">
                  <LuCircleCheck className="flex-shrink-0 text-violet-600 text-xl mt-1" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-md flex items-center gap-2 mb-6
            text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              <LuUsers className="text-2xl text-gray-800"/> Meet The Instructors
            </h2>
            <div className="space-y-6">
              {course.instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/50 p-4"
                >
                  <Image
                    src={instructor.avatar.replace("/public", "")}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                      {instructor.name}
                    </h3>
                    <p className="text-sm text-gray-500">{instructor.title}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {instructor.certs.map((cert, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-[#EAE8FD] to-[#E2F6FC] text-[#4F46E5] text-xs px-3 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500">
                        {instructor.experience}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mt-3">{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/register">
              <button className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
                Register for This Course
              </button>
            </Link>
            </div>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="space-y-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mb-4">Course Details</h2>
            {/* Length */}
            <div className="mt-12 ml-5">
                <div className="text-violet-600 mt-1 flex items-center gap-2">
                    <LuClock className="w-5 h-5" />
                    <p className="text-gray-700 text-sm">Length</p>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 ml-7 text-md">{course.length}</p>
            </div>
            {/* Effort */}
            <div className="mt-12 ml-5">
                <div className="text-cyan-500 mt-1 flex items-center gap-2">
                    <LuBookOpen className="w-5 h-5" />
                    <p className="text-gray-700 text-sm">Effort</p>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 ml-7 text-md">{course.effort}</p>
            </div>
            {/* Price */}
            <div className="mt-12 ml-5">
                <div className="text-orange-500 mt-1 flex items-center gap-2">
                    <LuDollarSign className="w-5 h-5" />
                    <p className="text-gray-700 text-sm">Price</p>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 ml-7 text-md">{course.price}</p>
            </div>
            <div className="flex items-center gap-1 ml-3 mt-10 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <LuStar
                  key={i}
                  className={i < Math.floor(course.rating) ? "fill-orange-400" : "text-gray-300"}
                />
              ))}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 ml-2">
                {course.rating.toFixed(1)} ({course.reviews} reviews)
              </span>
            </div>
            <h2 className="text-md flex items-center gap-2 mb-6 mt-10
            text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                <LuStar className="text-gray-700 text-xl"/>Reviews
            </h2>
            {/* Scrollable list */}
            <div className="max-h-[600px] overflow-y-auto pr-1 relative">
                {/* Inline custom scrollbar styling */}
                <style jsx>{`
                    /* Always visible custom scrollbar */
                    div::-webkit-scrollbar {
                    width: 6px;
                    }

                    div::-webkit-scrollbar-track {
                    background: rgba(150, 150, 255, 0.2);
                    border-radius: 8px;
                    }

                    div::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #8b5cf6 0%, #06b6d4 100%);
                    border-radius: 8px;
                    }

                    div::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #7c3aed 0%, #0891b2 100%);
                    }
                    
                    }
                `}</style>
            {course.feedback.map((review, index) => (
            <div
                key={index}
                className="p-3 mb-5"
            >
                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mb-1">
                <Image
                    src="/default.png"
                    alt={review.name}
                    width={25}
                    height={25}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">{review.name}</p>
                    <p className="text-gray-600 text-xs">{review.title}</p>
                </div>
                </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <LuStar
                    key={i}
                    className={`w-3 h-3 ${
                      i < review.rating ? "fill-orange-400" : "text-gray-300"
                    }`}
                  />
                ))}
            </div>
                <p className="text-xs text-gray-600">{review.date}</p>
                </div>

                    {/* Comment */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                    {review.comment}
                    </p>
                </div>
                ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
    <Footer /></>
  );
}
