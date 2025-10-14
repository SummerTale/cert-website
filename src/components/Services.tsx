import { LuTarget, LuUserCheck, LuBookOpen } from "react-icons/lu";
import React from "react";

const services = [
  {
  title: "Assessment",
  description:
    "Our Assessment service identifies team capabilities and improvement areas. We analyze workflows, roles, and collaboration to uncover strengths, address challenges, and deliver actionable insights that enhance overall performance and value delivery.",
  icon: <LuTarget className="text-violet-700 w-8 h-8" />,
},
{
  title: "Training",
  description:
    "Our Training programs equip teams with the knowledge and skills to apply Scrum effectively. Covering principles, roles, events, and artifacts, each session blends theory with hands-on exercises to ensure confident, real-world implementation.",
  icon: <LuBookOpen className="text-violet-700 w-8 h-8" />,
},
{
  title: "Coaching",
  description:
    "Our Coaching supports teams and leaders as they apply Scrum in practice. We provide personalized guidance to strengthen collaboration, enable self-management, align goals, and continuous improvement across the organization.",
  icon: <LuUserCheck className="text-violet-700 w-8 h-8" />,
}
,
];

export default function Services() {
  return (
    <section className="py-16 bg-gradient-to-br from-violet-200 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-xl font-semibold text-blue-600/70 mb-12">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className=" group bg-white/90 rounded-3xl shadow-lg p-10 flex flex-col items-center text-center hover:-translate-y-0.5 transition-transform duration-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center
                bg-gradient-to-br from-violet-300 to-cyan-200 opacity-80 rounded-full mb-6
                group-hover:opacity-100 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-md font-medium text-gray-950 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-md text-zinc-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-80 text-white text-sm font-medium rounded-full group-hover:opacity-100 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
