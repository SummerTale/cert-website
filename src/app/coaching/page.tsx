import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CoachingPage() {
  return (
    <>
    <Header />
    <main className="bg-gradient-to-br from-violet-50 to-cyan-50 min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-10">
        {/* Image Container */}
        <div className="relative w-[50%] md:w-[65%] lg:w-[50%] h-[260px] md:h-[320px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/coaching-hero.png"
            alt="Coaching Hero"
            fill
            priority
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Contact Button */}
        <div className="mt-6">
          <button className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </section>


      {/* COACHING DETAILS */}
      <section className="max-w-4xl mx-auto px-6 mt-12 text-center">

        <div className="space-y-12 mb-15">
          {/* Agile Transformation */}
            <h3 className="text-blue-600/70 text-md md:text-xl font-semibold mb-3">
              Agile Transformation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Want to introduce the power of Agile to your organization? Our
              coaches can work with your teams to bring them up to speed. We
              will define the roles and responsibilities of the various team
              members and stakeholders, assist with implementing Agile
              practices including Scrum, Kanban and Lean, and help to position
              your group into moving ahead on your own.
            </p>
        </div>

        <div className="space-y-12 mb-15">
          {/* DevOps Transformation */}
            <h3 className="text-blue-600/70 text-md md:text-xl font-semibold mb-3">
              DevOps Transformation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Combining both software development and operations, an Agile
              DevOps environment maximizes productivity by coordinating a
              shared vision. This enables your organization to cooperate on a
              common set of tools and practices, from planning to maintenance.
            </p>
        </div>

        <div className="space-y-12 mb-15">
          {/* Tools Assessment and Implementation */}
            <h3 className="text-blue-600/70 text-md md:text-xl font-semibold mb-3">
              Tools Assessment and Implementation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Agile is a set of principles – there are a plethora of tools
              available, but which ones are best for your specific needs and
              goals? With this coaching session, we help you assess your
              current toolset and your organization’s strengths and challenges,
              and we assemble a collection of tools specific to your
              requirements.
            </p>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
