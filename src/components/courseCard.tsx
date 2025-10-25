import Link from "next/link";
import Image from "next/image";
import { LuCalendar, LuAward, LuUsers } from "react-icons/lu";
import type { Course } from "@/data/coursesData";


interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100 flex flex-col justify-between h-full min-h-[300px] p-6">
      {/* Overlay link for entire card */}
      <Link
        href={`/training/${course.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`View details for ${course.title}`}
      />

      {/* Top row: logo + badge */}
      <div className="relative z-10 flex justify-between items-start mb-4">
        <Image
          src={course.avatar || "/placeholder.png"}
          alt={course.title}
          width={60}
          height={60}
          className="rounded-md object-contain"
        />
        <span className="text-[11px] font-medium text-white bg-gradient-to-r from-violet-500 to-cyan-500 px-2.5 py-0.5 rounded-full shadow-sm">
          {course.certificate.split(" ")[0]}
        </span>
      </div>

      {/* Title + short description */}
      <div className="relative z-10 mb-3">
        <h3 className="text-md text-gray-900 leading-snug mb-1 group-hover:text-violet-500">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
          {course.learnings && course.learnings.length > 0
            ? course.learnings[0]
            : "Learn to lead agile transformations and create organizational change"}
        </p>
      </div>

      {/* Details */}
      <div className="relative z-10 space-y-1 text-sm text-gray-700 mb-4">
        <div className="flex items-center gap-2">
          <LuCalendar size={15} className="text-purple-500" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <LuAward size={15} className="text-sky-500" />
          <span>{course.certificate}</span>
        </div>
        <div className="flex items-center gap-2">
          <LuUsers size={15} className="text-orange-500" />
          <span>
            {course.type.includes("Leadership")
              ? "Leadership, Management"
              : "Agile, Scrum, Teams"}
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="relative z-10 border-gray-200 mb-4" />

      {/* Bottom row: price + register */}
      <div className="relative z-10 flex items-center justify-between">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mt-1 text-md">{course.price}</p>
        <Link
          href={`/register?course=${encodeURIComponent(course.title)}`}
          className="text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-cyan-500 opacity-90 px-4 py-1.5 rounded-full hover:opacity-100 transition z-20"
          onClick={(e) => e.stopPropagation()} // prevent triggering parent link
        >
          Register
        </Link>
      </div>
    </div>
  );
}

