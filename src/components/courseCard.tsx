import Link from "next/link";
import type { Course } from "@/data/coursesData";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/training/${course.slug}`}
      className="block group transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="p-6 bg-white/90 rounded-2xl shadow-md border border-violet-500/10">
        {/* Course Type */}
        <p className="text-xs font-semibold text-blue-600/80 mb-1">
          {course.type}
        </p>

        {/* Course Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-950">
          {course.title}
        </h3>

        {/* Course Dates */}
        <p className="text-sm text-gray-600">{course.date}</p>

        {/* Duration */}
        <p className="text-sm text-gray-600">{course.duration}</p>
      </div>
    </Link>
  );
}
