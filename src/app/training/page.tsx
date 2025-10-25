"use client";
import { useState, useMemo } from "react";
import { coursesData } from "@/data/coursesData";
import CourseCard from "@/components/courseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default function TrainingPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCert, setSelectedCert] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");

  const courseTypes = ["All", "Public", "Corporate Workshop"];
  const certBodies = ["All", "Scrum Alliance", "Scrum.org", "Scaled Agile", "PMI"];
  const roles = ["All", "Product Owner", "Scrum Master", "Developer", "Management"];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const typeMatch = selectedType === "All" || course.type === selectedType;
      const certMatch =
        selectedCert === "All" ||
        course.certificate.toLowerCase().includes(selectedCert.toLowerCase());
      const roleMatch = selectedRole === "All" || course.role === selectedRole;
      return typeMatch && certMatch && roleMatch;
    });
  }, [selectedType, selectedCert, selectedRole]);

  // Hardcoded categories based on your earlier layout
  const categories = [
    { name: "Leadership", keywords: ["Leadership"] },
    { name: "Scaled Agile", keywords: ["SAFe"] },
    { name: "Scrum.org", keywords: ["Scrum.org"] },
    { name: "Scrum Alliance", keywords: ["Scrum Alliance"] },
    { name: "PMI", keywords: ["PMI", "PMP"] },
    { name: "Corporate Training", keywords: ["Workshop", "Corporate", "Stream", "Portfolio"] },
  ];

  const categorizedCourses = categories.map((category) => ({
    ...category,
    courses: filteredCourses.filter((course) =>
      category.keywords.some((k) =>
        course.certificate.toLowerCase().includes(k.toLowerCase()) ||
        course.title.toLowerCase().includes(k.toLowerCase())
      )
    ),
  }));

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-violet-100 via-violet-100 to-cyan-100 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Heading */}
          <h1 className="text-md text-center mb-3 text-blue-500">
            Training Courses
          </h1>
          <p className="text-md text-center text-gray-600 mb-10">
            Professional certifications & training programs for Agile practitioners
          </p>

          {/* Filter Bar */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#e1e1fb] via-[#e1e1fb] to-[#d1f0f9] rounded-2xl p-6 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Course Type */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 text-center">
                  Course Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  {courseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Certifying Body */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 text-center">
                  Certifying Body
                </label>
                <select
                  value={selectedCert}
                  onChange={(e) => setSelectedCert(e.target.value)}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  {certBodies.map((body) => (
                    <option key={body} value={body}>
                      {body}
                    </option>
                  ))}
                </select>
              </div>

              {/* Role */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 text-center">
                  Role
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-violet-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Category Sections */}
          {categorizedCourses.map(
            (cat) =>
              cat.courses.length > 0 && (
                <div key={cat.name} className="mb-12">
                  <h2 className="mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">{cat.name}</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              )
          )}

          {/* No results message */}
          {categorizedCourses.every((c) => c.courses.length === 0) && (
            <p className="text-center text-gray-500 mt-10">
              No courses match your selected filters.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
