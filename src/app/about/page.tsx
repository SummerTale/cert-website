"use client";
{/* eslint-disable-next-line react/no-unescaped-entities */}

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LuArrowRight, LuBookOpen, LuTrophy, LuUsers, LuStar, LuHeart, LuTarget, LuLightbulb, LuTrendingUp, LuCircleCheck, LuGlobe, LuShield, LuSparkles } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-violet-50 to-cyan-50 text-gray-800">
        {/* HERO */}
        <section className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
          {/* Background image */}
          <Image
            src="/carousel/hero1.jpg"
            alt="Agile Training Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-violet-900/80 to-cyan-900/80" />
          {/* Text content */}
          <div className="relative z-10 max-w-3xl px-6">
            <div className="inline-block bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full border border-grey-400 mb-4">
              Empowering Teams Since 1998
            </div>
            <h1 className="text-md mb-4">
              Transforming Organizations Through Agile Excellence
            </h1>
            <p className="text-gray-100 text-lg leading-relaxed">
              We do not just teach agile — we live it. Our mission is to help you create adaptive, 
              high-performing teams that thrive in complexity.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="flex flex-wrap justify-center items-center text-center gap-10 md:gap-40 py-8 bg-gradient-to-r from-violet-700 to-cyan-600">
          <StatCard value="27+" label="Years Experience" />
          <StatCard value="5,000+" label="Students Trained" />
          <StatCard value="200+" label="Organizations" />
          <StatCard value="3" label="Official Partners" />
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-blue-500 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Agile is more than a training company — we are your partner in transformation. For over 27 years,
            we have been at the forefront of the agile movement, helping organizations worldwide embrace
            adaptive methodologies and achieve extraordinary results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach combines academic rigor with real-world experience. We have learned from thousands of
            implementations across diverse industries, and we bring that knowledge to every engagement.
            Whether you are just starting your agile journey or scaling agile practices across your enterprise,
            we provide the expertise, tools, and support you need to succeed.
          </p>
        </section>

        {/* LEADERSHIP */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          {/* Section heading centered */}
          <h3 className="text-center text-blue-500 mb-12">
            Leadership That Inspires
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - text */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-gray-800 mb-2">Raj Heda</h4>
              <p className="text-violet-500 mb-3 text-md">
                Founder & Lead Agile Coach
              </p>

              {/* Colored badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge text="SAFe Program Consultant (SPC)" color="violet" />
                <Badge text="Certified Scrum Professional (CSP)" color="blue" />
                <Badge text="Certified Scrum Trainer (CST)" color="orange" />
              </div>

              <p className="text-gray-700 text-md mb-3 leading-relaxed">
                With 27+ years of teaching and coaching experience, Raj has dedicated his career 
                to helping teams unlock their full potential through agile practices. His journey includes 
                leading agile transformations at IBM, PwC, and private enterprises — demonstrating that agile 
                is not just about process, it is about culture.
              </p>
              <p className="text-gray-700 text-md mb-3 leading-relaxed">
                As a faculty member at Boston University and Brandeis University, Raj bridges the gap between 
                theory and practice. His teaching emphasizes meaningful change, focusing on practical application 
                and long-term team success.
              </p>
              <p className="text-gray-700 text-md mb-3 leading-relaxed">
                &quot;My goal is not just to certify students, but to create agile champions who can drive meaningful 
                change in their organizations&quot;, Raj often says. This philosophy has earned him recognition as one 
                of the most effective agile trainers in the industry.
              </p>
            </div>

            {/* Right column - image */}
            <div className="flex justify-center">
              <div className="relative w-[500px] h-[500px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/instructors/raj.png"
                  alt="Raj Heda"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* JOURNEY TIMELINE */}
        <section className="relative max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-center text-blue-500 mb-12">Our Journey</h2>

          <div className="relative flex flex-col items-center">
            <div className="absolute w-[2px] bg-gradient-to-b from-violet-500 to-cyan-500 h-full"></div>

            {[
              { year: "1998", left: "Founded Agile with a mission to transform software development" },
              { year: "2005", right: "Achieved Scrum Alliance partnership and certified first 100 students" },
              { year: "2012", left: "Expanded to SAFe training, becoming an official SAFe Partner" },
              { year: "2018", right: "Added Scrum.org partnership, offering comprehensive Scrum certifications" },
              { year: "2025", left: "Trained over 5,000 students and coached 200+ organizations worldwide" },
            ].map((item, idx) => (
              <TimelineItem key={idx} {...item} />
            ))}
          </div>
        </section>

        {/* WHY CHOOSE AGILE */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-center text-blue-500 mb-3">
            Why Choose Agile?
          </h2>
          <p className="text-center text-gray-700 mb-12 px-50">
            We combine deep expertise, proven methodologies, and a passion for helping teams succeed.
            Here is what sets us apart:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WhyAgileCard
              icon={<LuTrophy className="w-6 h-6" />}
              title="Proven Track Record"
              desc="27+ years of experience with 5,000+ successful students and measurable results across Fortune 500 companies."
            />
            <WhyAgileCard
              icon={<LuStar className="w-6 h-6" />}
              title="Expert Instructors"
              desc="Learn from industry veterans with real-world experience leading agile transformations at IBM, edX, and PwC."
            />
            <WhyAgileCard
              icon={<LuCircleCheck className="w-6 h-6" />}
              title="Official Certifications"
              desc="Authorized training partner with Scrum Alliance, Scrum.org, and SAFe for globally recognized credentials."
            />
            <WhyAgileCard
              icon={<LuGlobe className="w-6 h-6" />}
              title="Practical Approach"
              desc="Hands-on learning with real case studies, interactive exercises, and actionable frameworks you can apply immediately."
            />
            <WhyAgileCard
              icon={<LuUsers className="w-6 h-6" />}
              title="Personalized Support"
              desc="Small class sizes and ongoing coaching ensure you receive individual attention and continued guidance."
            />
            <WhyAgileCard
              icon={<HiOutlineBolt className="w-6 h-6" />}
              title="Continuous Innovation"
              desc="Stay ahead with cutting-edge practices, updated curriculum, and access to the latest agile methodologies."
            />
          </div>
        </section>


        {/* OUR CORE VALUES */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-blue-500 mb-3">Our Core Values</h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            These principles guide everything we do—from how we teach to how we engage with our clients.
          </p>

          <div className="flex flex-wrap justify-between md:justify-evenly gap-10">
            <CoreValue icon={<LuHeart className="w-6 h-6" />} title="Collaboration" />
            <CoreValue icon={<LuShield className="w-6 h-6" />} title="Transparency" />
            <CoreValue icon={<LuTarget className="w-6 h-6" />} title="Focus" />
            <CoreValue icon={<LuLightbulb className="w-6 h-6" />} title="Innovation" />
            <CoreValue icon={<LuTrendingUp className="w-6 h-6" />} title="Continuous Improvement" />
            <CoreValue icon={<LuUsers className="w-6 h-6" />} title="Respect" />
          </div>
        </section>

        {/* TRUSTED & CERTIFIED */}
        <section>
          <h2 className="text-center text-xl text-blue-500/80 font-medium mb-5">Trusted & Certified</h2>
          <p className="text-center text-gray-700 mb-10 text-md px-85">
            As an authorized training partner with the world&apos;s leading agile certification bodies, we ensure our programs meet the highest industry standards and provide globally recognized credentials.
          </p>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            <PartnerCard img="/partners/scrum-alliance-logo.png" name="Scrum Alliance" desc="Authorized to deliver CSM, CSPO, and advanced Scrum certifications." />
            <PartnerCard img="/partners/scrum-org-logo.svg" name="Scrum.org" desc="Professional Scrum training with PSM, PSPO, and scaled certifications." />
            <PartnerCard img="/partners/safe-logo.png" name="Scaled Agile (SAFe)" desc="Official SAFe Partner for enterprise-scale agile transformation." />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20">
      <div
        className="relative overflow-hidden rounded-3xl shadow-md text-center py-12 px-6"
        style={{
          backgroundImage: `url('/images/about-us.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/95 via-purple-900/95 to-cyan-900/95"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-white space-y-6">
          {/* Icon */}
          <div className="text-5xl mb-1">
            <LuSparkles className="inline text-white/90" />
          </div>

          {/* Heading */}
          <h2 className="text-md pt-4">
            Start Your Agile Journey Today
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-white/90 text-base md:text-lg leading-relaxed">
            Whether you are an individual looking to advance your career or an organization
            ready for transformation, we are here to guide you every step of the way.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 bg-white text-violet-700 font-medium px-5 py-1.5 rounded-full text-sm hover:bg-violet-100 transition-all duration-200"
            >
              <LuBookOpen />
              Explore Training
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white font-medium px-5 py-1.5 rounded-full text-sm hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch <LuArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  );
}

  
{/*helpers*/}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl text-white">{value}</p>
      <p className="text-white text-sm">{label}</p>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: "violet" | "blue" | "orange" }) {
  const colorMap = {
    violet: "from-violet-500 to-violet-600 text-white",
    blue: "from-cyan-500 to-blue-500 text-white",
    orange: "from-orange-400 to-red-500 text-white",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colorMap[color]} shadow-sm`}
    >
      {text}
    </span>
  );
}


function TimelineItem({ year, left, right }: { year: string; left?: string; right?: string }) {
  return (
    <div className="relative flex flex-col md:flex-row items-center w-full mb-16 last:mb-0">
      <div className="hidden md:flex flex-1 justify-end pr-8">{left && <TimelineBox text={left} />}</div>
      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold rounded-full z-10 shadow-md">
        {year}
      </div>
      <div className="hidden md:flex flex-1 justify-start pl-8">{right && <TimelineBox text={right} />}</div>
      {/* Mobile version */}
      <div className="md:hidden mt-4 text-center">{left && <TimelineBox text={left} />}{right && <TimelineBox text={right} />}</div>
    </div>
  );
}

function TimelineBox({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-md text-gray-700 max-w-[250px]">
      {text}
    </div>
  );
}

function WhyAgileCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
      {/* Icon bubble */}
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex-shrink-0">
        {icon}
      </div>
      {/* Text content */}
      <div>
        <h4 className="text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function CoreValue({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center text-center w-[120px] sm:w-[140px]">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white mb-3 text-xl">
        {icon}
      </div>
      <p className="text-gray-700 text-sm">{title}</p>
    </div>
  );
}

function PartnerCard({ img, name, desc }: { img: string; name: string; desc: string }) {
  return (
    <div className="bg-white rounded-3xl hover:shadow-sm p-6 text-center w-[320px]">
      <div className="relative w-[200px] h-[100px] mx-auto mb-4">
        <Image src={img} alt={name} fill className="object-contain" />
      </div>
      <h4 className="text-gray-800 text-md mb-1">{name}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
