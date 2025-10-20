import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuUser, LuUsers, LuBriefcase, LuCode, LuTarget, LuBuilding2 } from "react-icons/lu";

export default function AssessmentPage() {
  return (
    <>
      <Header />
        <main className="min-h-screen bg-gradient-to-br from-violet-50 to-cyan-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="pt-10 pb-5 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assessment-dashboard.jpeg"
              alt="Comprehensive Assessment Process"
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
            {/* Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[90%] bg-violet-500/10 backdrop-blur-lg border border-white/20 rounded-3xl px-6 py-4 shadow-lg text-white text-center">
              <h2 className="text-lg md:text-xl font-semibold mb-1">
                Comprehensive Assessment Process
              </h2>
              <p className="text-sm md:text-base text-white/80">
                Data-driven insights for your agile transformation journey
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-7 py-3 rounded-full text-sm font-medium shadow opacity-90 hover:opacity-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ASSESSMENT */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-10 hover:shadow-md hover:-translate-y-1 transition">
          <h3 className="text-center text-xl md:text-xl font-semibold mb-8 text-blue-600/70">
            Why Assessment?
          </h3>
          <p className="text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            In today&apos;s rapidly evolving business landscape, organizations need to understand their current agile maturity to make informed decisions about their transformation journey. Our comprehensive assessments provide you with:
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-x-5 gap-y-3">
            <div className="flex items-start gap-3">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">
                  Clear Baseline Understanding
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get an objective view of your current agile practices and identify strengths and improvement areas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">
                  Data-Driven Decisions
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Make informed investment decisions based on comprehensive analysis and benchmarking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">
                  Tailored Improvement Roadmap
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive customized recommendations and prioritized action plans for your transformation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">
                  Risk Mitigation
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Identify potential obstacles and challenges before they impact your transformation success.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Paragraph */}
          <p className="mt-8 text-gray-900 leading-relaxed">
            Whether you&apos;re just starting your agile journey or looking to scale existing practices, our assessments provide the insights you need to accelerate your transformation with confidence.
          </p>
        </div>
      </section>

      {/* TYPES OF ASSESSMENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg md:text-xl font-semibold text-blue-600/70 mb-3">
            What Are The Different Types of Assessment?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-md">
            We offer comprehensive assessments tailored to different organizational levels and needs.
            Each assessment is designed to provide specific insights and actionable recommendations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership Assessment",
                description: "Evaluate leadership capabilities and identify areas for agile leadership development.",
                icon: <LuTarget className="text-white w-6 h-6" />,
                points: [
                  "360-degree feedback",
                  "Leadership compotency mapping",
                  "Development roadmap",
                ],
              },
              {
                title: "Organization Assessment",
                description: "Comprehensive evaluation of organizational agility and transformation readiness.",
                icon: <LuBuilding2 className="text-white w-6 h-6" />,
                points: [
                  "Cultural assessment",
                  "Process maturity evaluation",
                  "Change readiness analysis",
                ],
              },
              {
                title: "Portfolio Assessment",
                description: "Strategic assessment of portfolio management practices and alignment.",
                icon: <LuBriefcase className="text-white w-6 h-6" />,
                points: [
                  "Portfolio alignment review",
                  "Value stream mapping",
                  "Investment optimization",
                ],
              },
              {
                title: "Program Assessment",
                  description: "Evaluate program-level agile practices and coordination mechanisms.",
                icon: <LuCode className="text-white w-6 h-6" />,
                points: [
                  "Cross-team coordination",
                  "Dependency management",
                  "Scaling framework assessment",
                ],
              },
              {
                title: "Team Assessment",
                description: "Deep dive into team dynamics, practices, and performance metrics.",
                icon: <LuUsers className="text-white w-6 h-6" />,
                points: [
                  "Team health check",
                  "Velocity analysis",
                  "Collaboration assessment",
                ],
              },
              {
                title: "Individual Talent / Role Assessment",
                description: "Personal agile competency evaluation and career development planning.",
                icon: <LuUser className="text-white w-6 h-6" />,
                points: [
                  "Skill-gap analysis",
                  "Role-specific evaluation",
                  "Personal development plan",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md p-8 text-left hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-medium text-md text-gray-900 mb-3">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-1">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <IoMdCheckmarkCircleOutline className="text-green-500 mt-1 mr-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto bg-white/90 rounded-3xl shadow-md p-10 text-center">
          <h4 className="text-lg text-blue-600/70 font-semibold mb-3">Ready to Get Started?</h4>
          <p className="text-gray-600 mb-8">
            Let’s discuss which assessment would be most valuable for your organization.
            Our experts will help you choose the right approach and create a customized assessment plan.
          </p>

          <Link
            href="/contact"
            className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow opacity-90 hover:opacity-100 transition"
          >
            Contact Us
          </Link>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-4 h-4" />
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-4 h-4" />
              Customized approach
            </div>
            <div className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-green-500 w-4 h-4" />
              Expert guidance
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
