/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { coursesData } from "@/data/coursesData";
import { LuCalendar, LuUser, LuMapPin, LuFilter } from "react-icons/lu";

export const dynamic = "force-static";

export default function UpcomingPage() {
  // filtering state
  const [courseType, setCourseType] = useState<"All Courses" | "Public" | "Corporate">(
    "All Courses"
  );
  const [country, setCountry] = useState<"All Countries" | "USA" | "Online">("All Countries");
  const [city, setCity] = useState<
    "All Cities" | "Boston" | "New York" | "San Francisco" | "Chicago" | "Online"
  >("All Cities");
  const [trainer, setTrainer] = useState<"All Trainers" | "Raj Heda" >(
    "All Trainers"
  );
  const [partner, setPartner] = useState<
    "All Partners" | "Scrum Alliance" | "Scrum.org" | "Scaled Agile" | "PMI"
  >("All Partners");

  const upcomingDesignList = [
    {
      titleMatch: "CSM – Certified ScrumMaster®",
      date: "2025-11-09",
      dateLabel: "Nov 9, 2025 – Nov 10, 2025",
      city: "Online",
      country: "Online",
      trainer: "Raj Heda",
      partner: "Scrum Alliance",
      type: "Public" as const,
      roleTag: "Scrum Master",
    },
    {
      titleMatch: "CSPO – Certified Scrum Product Owner",
      date: "2025-11-14",
      dateLabel: "Nov 14, 2025 – Nov 15, 2025",
      city: "Boston, MA",
      country: "USA",
      trainer: "Raj Heda",
      partner: "Scrum Alliance",
      type: "Public" as const,
      roleTag: "Product Owner",
    },
    {
      titleMatch: "Certified SAFe® Scrum Master",
      date: "2025-11-19",
      dateLabel: "Nov 19, 2025 – Nov 20, 2025",
      city: "Online",
      country: "Online",
      trainer: "Raj Heda",
      partner: "Scaled Agile",
      type: "Public" as const,
      roleTag: "Scrum Master",
    },
    {
      titleMatch: "Professional Scrum Master Training",
      date: "2025-12-04",
      dateLabel: "Dec 4, 2025 – Dec 5, 2025",
      city: "New York, NY",
      country: "USA",
      trainer: "Raj Heda",
      partner: "Scrum.org",
      type: "Public" as const,
      roleTag: "Scrum Master",
    },
    {
      titleMatch: "CSM – Certified ScrumMaster®",
      date: "2025-12-11",
      dateLabel: "Dec 11, 2025 – Dec 12, 2025",
      city: "San Francisco, CA",
      country: "USA",
      trainer: "Raj Heda",
      partner: "Scrum Alliance",
      type: "Public" as const,
      roleTag: "Scrum Master",
    },
    {
      titleMatch: "Certified SAFe® Product Owner / Product Manager",
      date: "2025-12-17",
      dateLabel: "Dec 17, 2025 – Dec 18, 2025",
      city: "Online",
      country: "Online",
      trainer: "Raj Heda",
      partner: "Scaled Agile",
      type: "Public" as const,
      roleTag: "Product Owner",
    },
    {
      // placeholder for A-CSM until you add it to dataset
      titleMatch: "CSD – Certified Scrum Developer",
      date: "2025-12-24",
      dateLabel: "Dec 24, 2025 – Dec 25, 2025",
      city: "Chicago, IL",
      country: "USA",
      trainer: "Raj Heda",
      partner: "Scrum Alliance",
      type: "Public" as const,
      roleTag: "Developer",
    },
    {
      titleMatch: "CSM – Certified ScrumMaster®",
      date: "2026-01-07",
      dateLabel: "Jan 7, 2026 – Jan 8, 2026",
      city: "Online",
      country: "Online",
      trainer: "Raj Heda",
      partner: "Scrum Alliance",
      type: "Public" as const,
      roleTag: "Scrum Master",
    },
  ];

  const upcomingCourses = upcomingDesignList
    .map((item) => {
      const course = coursesData.find((c) => c.title === item.titleMatch);
      if (!course) return null;
      return { ...item, course };
    })
    .filter(Boolean) as Array<
    (typeof upcomingDesignList)[number] & {
      course: (typeof coursesData)[number];
    }
  >;

  // apply filters
  const filteredUpcoming = useMemo(() => {
    return upcomingCourses.filter((u) => {
      const matchType = courseType === "All Courses" || u.type === courseType;
      const matchCountry = country === "All Countries" || u.country === country;
      const matchCity =
        city === "All Cities" ||
        u.city.toLowerCase().includes(city.toLowerCase()) ||
        (city === "Online" && u.country === "Online");
      const matchTrainer = trainer === "All Trainers" || u.trainer === trainer;
      const matchPartner = partner === "All Partners" || u.partner === partner;
      return matchType && matchCountry && matchCity && matchTrainer && matchPartner;
    });
  }, [upcomingCourses, courseType, country, city, trainer, partner]);

  // grouped by month
  const grouped: Record<string, typeof filteredUpcoming> = {};
  filteredUpcoming.forEach((u) => {
    const d = new Date(u.date);
    const k = `${d.toLocaleString("en-US", { month: "long" })} ${d.getFullYear()}`;
    if (!grouped[k]) grouped[k] = [];
    grouped[k].push(u);
  });

  const monthKeys = Object.keys(grouped).sort((a, b) => {
    const da = new Date(grouped[a][0].date).getTime();
    const db = new Date(grouped[b][0].date).getTime();
    return da - db;
  });

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/training-hero.png"
          alt="Training Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800/70 via-violet-700/60 to-cyan-700/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-lg mb-3">Upcoming Courses</h1>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Join our upcoming training courses and advance your Agile career
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main className="bg-gradient-to-r from-violet-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
          {/* SIDEBAR */}
          <aside className="w-full md:w-64 self-start sticky top-28 bg-white/70 backdrop-blur-lg rounded-3xl p-5 border border-violet-100">
            <div className="flex items-center gap-2 mb-5">
              <LuFilter size={20} className="text-violet-500" />
              <h2 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                Filter Events
              </h2>
            </div>

            {/* course type */}
            <label className="text-sm text-gray-700 mb-1 block">Course Type</label>
            <select
              value={courseType}
              onChange={(e) => setCourseType(e.target.value as any)}
              className="w-full mb-4 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-violet-400 outline-none"
            >
              <option>All Courses</option>
              <option value="Public">Public</option>
              <option value="Corporate">Corporate</option>
            </select>

            {/* country */}
            <label className="text-sm text-gray-700 mb-1 block">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value as any)}
              className="w-full mb-4 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-violet-400 outline-none"
            >
              <option>All Countries</option>
              <option value="USA">USA</option>
              <option value="Online">Online</option>
            </select>

            {/* city */}
            <label className="text-sm text-gray-700 mb-1 block">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value as any)}
              className="w-full mb-4 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-violet-400 outline-none"
            >
              <option>All Cities</option>
              <option value="Boston">Boston</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Chicago">Chicago</option>
              <option value="Online">Online</option>
            </select>

            {/* trainer */}
            <label className="text-sm text-gray-700 mb-1 block">Trainer</label>
            <select
              value={trainer}
              onChange={(e) => setTrainer(e.target.value as any)}
              className="w-full mb-4 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-violet-400 outline-none"
            >
              <option>All Trainers</option>
              <option value="Raj Heda">Raj Heda</option>
            </select>

            {/* partner */}
            <label className="text-sm text-gray-700 mb-1 block">Partner</label>
            <select
              value={partner}
              onChange={(e) => setPartner(e.target.value as any)}
              className="w-full mb-6 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-violet-400 outline-none"
            >
              <option>All Partners</option>
              <option value="Scrum Alliance">Scrum Alliance</option>
              <option value="Scrum.org">Scrum.org</option>
              <option value="Scaled Agile">Scaled Agile</option>
              <option value="PMI">PMI</option>
            </select>

            {/* clear buttom */}
            <button
              onClick={() => {
                setCourseType("All Courses");
                setCountry("All Countries");
                setCity("All Cities");
                setTrainer("All Trainers");
                setPartner("All Partners");
              }}
              className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-90 text-white text-sm font-medium py-2 rounded-full hover:opacity-100 transition"
            >
              Clear Filters
            </button>
          </aside>

          {/* LIST OF COURSES */}
          <section className="flex-1">
            {monthKeys.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white/80 rounded-3xl border border-violet-100 shadow-sm py-20 text-center">
              <LuCalendar size={60} className="text-violet-300 mb-4" />
              <h3 className="text-md text-blue-500 mb-1">
                No courses found
              </h3>
              <p className="text-gray-600 text-md">Try adjusting your filters</p>
            </div>
          ) : (
              monthKeys.map((monthKey) => {
                const events = grouped[monthKey];
                return (
                  <div key={monthKey} className="mb-10">
                    {/* MONTH HEADING */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <LuCalendar size={23} className="text-violet-500" />
                        <h2 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                          {monthKey}
                        </h2>
                      </div>
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-medium">
                        {events.length} {events.length === 1 ? "Event" : "Events"}
                      </span>
                    </div>

                    {/* EVENTS POPULATE */}
                    <div className="space-y-4">
                      {events.map((event) => {
                        const d = new Date(event.date);
                        const day = d.getDate();
                        const monthShort = d.toLocaleString("en-US", { month: "short" });
                        const slug = event.course.slug;

                        return (
                          <Link
                            key={event.date + slug + event.city}
                            href={`/training/${slug}`}
                            className="flex flex-col md:flex-row items-stretch gap-4 bg-white/80 backdrop-blur-sm border border-violet-100 rounded-3xl px-5 py-4 hover:shadow-md hover:-translate-y-1 transition"
                          >
                            {/* DATE BLOCK - Day, Date, Month */}
                            <div className="flex flex-col items-center justify-center w-20 md:w-24">
                              <span className="text-violet-500 text-sm">
                                {d.toLocaleString("en-US", { weekday: "short" })}
                              </span>
                              <span className="text-2xl text-blue-500/90 leading-none p-2">
                                {day}
                              </span>
                              <span className="text-gray-500 text-sm">{monthShort}</span>
                            </div>

                            {/* Course details */}
                            <div className="flex-1 flex flex-col gap-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                                  {event.course.title}
                                </h3>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {event.roleTag ? (
                                  <span className="px-3 py-[3px] rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-violet-700 text-xs font-medium border border-violet-300">
                                    {event.roleTag}
                                  </span>
                                ) : null}
                                <span className="px-3 py-[3px] rounded-full text-cyan-700 text-xs font-medium border border-cyan-200">
                                  {event.partner}
                                </span>
                              </div>

                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <LuMapPin size={18} className="text-violet-500" />
                                  {event.city}
                                </span>
                                <span className="flex items-center gap-1">
                                  <LuUser size={18} className="text-cyan-500" />
                                  {event.trainer}
                                </span>
                              </div>

                              {/* register button */}
                              <div className="pt-2">
                                <Link
                                  href={`/register?course=${encodeURIComponent(
                                    event.course.title
                                  )}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-block bg-gradient-to-r from-violet-500 to-cyan-500 opacity-90 text-white text-sm font-medium px-4 py-1.5 rounded-full mt-1 hover:opacity-100"
                                >
                                  Register Now
                                </Link>
                              </div>
                            </div>

                            {/* right side: PRICING AND DATERANGE */}
                            <div className="flex flex-col items-end justify-top min-w-[150px]">
                              <p className="text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-cyan-500 text-xl mb-1">
                                {event.course.price || "$1,000"}
                              </p>
                              <p className="text-gray-600 text-sm text-right">
                                {event.dateLabel}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
