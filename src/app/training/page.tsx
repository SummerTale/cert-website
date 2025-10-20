import { coursesData } from "@/data/coursesData";
import CourseCard from "@/components/courseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-static"; // static data => static page

export default function TrainingPage() {
  return (
    <><Header />
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-semibold text-center mb-10 bg-gradient-to-r from-[#5A75F9] to-[#36A6E8] bg-clip-text text-transparent inline-block">
        Our Training Programs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
    <Footer /></>
  );
}
