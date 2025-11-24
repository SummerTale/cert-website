"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  LuFileText,
  LuPlay,
  LuBookOpen,
  LuBookMarked,
  LuDownload,
  LuExternalLink,
  LuGraduationCap,
  LuTarget,
  LuUsers,
  LuVideo,
  LuBriefcase,
  LuTrendingUp,
} from "react-icons/lu";

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-violet-50 to-cyan-50 text-gray-800">
        {/* HERO */}
        <section className="relative h-[260px] md:h-[280px] flex items-center justify-center text-center">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-600 to-cyan-500" />

          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs tracking-wide border border-white/30 text-white bg-white/20 mb-3">
              Free Resources
            </span>
            <h1 className="text-white text-md mb-4">
              Agile Learning Resources
            </h1>
            <p className="text-white/90 text-lg">
              Free templates, guides, videos, and insights to support your agile
              journey.
            </p>
          </div>
        </section>

        {/* CATEGORY TABS */}
        <section className="mt-10 mb-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryTab
                href="#templates"
                icon={<LuDownload className="w-8 h-8 text-purple-500" />}
                label="Templates"
              />
              <CategoryTab
                href="#guides"
                icon={<LuBookOpen className="w-8 h-8 text-cyan-500" />}
                label="Guides"
              />
              <CategoryTab
                href="#videos"
                icon={<LuVideo className="w-8 h-8 text-orange-500" />}
                label="Videos"
              />
              <CategoryTab
                href="#case-studies"
                icon={<LuBriefcase className="w-8 h-8 text-violet-500" />}
                label="Case Studies"
              />
            </div>
          </div>
        </section>

        {/* FREE TEMPLATES & DOWNLOADS */}
        <section id="templates" className="py-10">
          <SectionHeader
            title="Free Templates & Downloads"
            subtitle="Ready-to-use templates and tools to streamline your agile practices."
          />

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <TemplateCard
              icon={<LuFileText className="w-6 h-6" />}
              badge="Templates"
              title="Scrum Artifacts Template Pack"
              description="Complete set of templates for Product Backlog, Sprint Backlog, and Increment documentation."
              format="PDF & Excel"
            />
            <TemplateCard
              icon={<LuFileText className="w-6 h-6" />}
              badge="Checklists"
              title="Sprint Planning Checklist"
              description="Comprehensive checklist to ensure your sprint planning sessions are productive and complete."
              format="PDF"
            />
            <TemplateCard
              icon={<LuFileText className="w-6 h-6" />}
              badge="Templates"
              title="Definition of Done Template"
              description="Customizable template to establish clear completion criteria for your team."
              format="Word & PDF"
            />

            {/* Row 2 */}
            <TemplateCard
              icon={<LuFileText className="w-6 h-6" />}
              badge="Guides"
              title="Retrospective Activities Guide"
              description="15+ proven retrospective formats and facilitation techniques for engaging team discussions."
              format="PDF"
            />
            <TemplateCard
              icon={<LuFileText className="w-6 h-6" />}
              badge="Templates"
              title="User Story Mapping Toolkit"
              description="Tools and templates for effective user story mapping sessions with your product team."
              format="PDF & Miro"
            />
            <TemplateCard
              icon={<LuFileText className="w-6 h-6" />}
              badge="Tools"
              title="Agile Metrics Dashboard"
              description="Track velocity, burndown, and key performance indicators with this ready-to-use dashboard."
              format="Excel"
            />
          </div>
        </section>

        {/* COMPREHENSIVE GUIDES */}
        <section id="guides" className="py-10">
          <SectionHeader
            title="Comprehensive Guides"
            subtitle="In-depth resources to deepen your understanding of agile methodologies."
          />

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
            <GuideCard
              icon={<LuBookOpen className="w-7 h-7" />}
              title="The Complete Guide to Scrum Events"
              gradient="bg-gradient-to-r from-violet-500 to-purple-500"
              description="In-depth exploration of Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective."
              action="Read Guide"
            />
            <GuideCard
              icon={<LuTrendingUp className="w-7 h-7" />}
              title="Scaling Agile with SAFe"
              gradient="bg-gradient-to-r from-cyan-500 to-blue-500"
              description="Best practices for implementing the Scaled Agile Framework in enterprise organizations."
              action="Read Guide"
            />
            <GuideCard
              icon={<LuTarget className="w-7 h-7" />}
              title="Product Owner Success Guide"
              gradient="bg-gradient-to-r from-orange-500 to-red-500"
              description="Essential skills and strategies for effective product ownership and value maximization."
              action="Read Guide"
            />
            <GuideCard
              icon={<LuUsers className="w-7 h-7" />}
              title="Building High-Performing Teams"
              gradient="bg-gradient-to-r from-purple-500 to-pink-500"
              description="Proven techniques for fostering collaboration, trust, and continuous improvement."
              action="Read Guide"
            />
          </div>
        </section>

        {/* VIDEO TUTORIALS & WEBINARS */}
        <section id="videos" className="py-16">
        <SectionHeader
            title="Video Tutorials & Webinars"
            subtitle="Learn from our expert instructors through engaging video content"
        />

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-4">

            <VideoCard
            image="/images/video1.png"
            duration="15:30"
            title="Introduction to Scrum in 15 Minutes"
            description="Quick overview of Scrum framework, roles, events, and artifacts for beginners."
            />

            <VideoCard
            image="/images/video2.png"
            duration="28:45"
            title="Mastering Sprint Retrospectives"
            description="Advanced facilitation techniques to make your retrospectives more effective and engaging."
            />

            <VideoCard
            image="/images/video3.png"
            duration="42:15"
            title="SAFe PI Planning Workshop"
            description="Step-by-step walkthrough of planning and executing a successful Program Increment planning event."
            />

        </div>
        </section>

        {/* SUCCESS STORIES */}
        <section id="case-studies" className="py-10">
          <SectionHeader
            title="Success Stories"
            subtitle="Real-world examples of agile transformation and measurable results."
          />

          <div className="max-w-6xl mx-auto px-4 space-y-5">
            <CaseStudyCard
              company="Fortune 500 Financial Services"
              industry="Finance"
              challenge="Legacy waterfall processes causing delayed releases and low customer satisfaction."
              result="60% faster time-to-market, 40% improvement in team productivity."
            />
            <CaseStudyCard
              company="Global Healthcare Technology"
              industry="Healthcare"
              challenge="Scaling agile practices across 15 distributed teams in 8 countries."
              result="Successful SAFe implementation with improved alignment and predictability."
            />
            <CaseStudyCard
              company="E-commerce Startup"
              industry="Technology"
              challenge="Rapid growth requiring better prioritization and delivery cadence."
              result="Implemented Scrum with 3x increase in feature delivery velocity."
            />
          </div>
        </section>

        {/* RECOMMENDED READING */}
        <section className="py-10">
          <SectionHeader
            title="Recommended Reading"
            subtitle="Essential books to expand your agile knowledge and skills."
          />

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            <BookCard
              title="Scrum: The Art of Doing Twice the Work in Half the Time"
              author="Jeff Sutherland"
              tag="Scrum Fundamentals"
            />
            <BookCard
              title="The Lean Startup"
              author="Eric Ries"
              tag="Product Development"
            />
            <BookCard
              title="SAFe 6.0 Distilled"
              author="Richard Knaster & Dean Leffingwell"
              tag="Scaled Agile"
            />
            <BookCard
              title="User Story Mapping"
              author="Jeff Patton"
              tag="Product Management"
            />
            <BookCard
              title="The Five Dysfunctions of a Team"
              author="Patrick Lencioni"
              tag="Team Building"
            />
            <BookCard
              title="Coaching Agile Teams"
              author="Lyssa Adkins"
              tag="Agile Coaching"
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-15">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-3xl py-10 px-6 md:px-10 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full flex items-center justify-center text-violet-500">
                  <LuGraduationCap className="w-15 h-15" />
                </div>
              </div>
              <h3 className="text-md mb-4 text-blue-500">
                Ready to Take the Next Step?
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-5 max-w-2xl mx-auto">
                These free resources are just the beginning. Enroll in our
                certification programs to gain hands-on experience, personalized
                coaching, and industry-recognized credentials.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/training"
                  className="bg-gradient-to-r from-violet-600 to-cyan-600 opacity-90 text-white text-xs md:text-sm px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-100 transition-opacity"
                >
                  <span>View Training Programs</span>
                </Link>
                <Link
                  href="/contact"
                  className="border border-violet-200 text-violet-700 text-xs md:text-sm px-5 py-2 rounded-full hover:bg-gray-50"
                >
                  Contact Us
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

/* ---------- Small Reusable Pieces ---------- */

function CategoryTab({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="bg-gradient-to-br from-white/50 to-white/50 rounded-3xl flex flex-col items-center justify-center py-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-center mb-5">
        {icon}
      </div>
      <span className="text-md text-gray-600">{label}</span>
    </Link>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600/90 to-blue-500/70">
        {title}
      </h2>
      <p className="text-md text-gray-600 max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

/* ---------- Templates ---------- */

function TemplateCard({
  icon,
  badge,
  title,
  description,
  format,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  format: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col justify-between text-md">
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center">
          {icon}
        </div>
        <span className="px-2 py-0.5 rounded-full bg-white text-xs text-gray-800 border border-violet-200">
          {badge}
        </span>
      </div>
      <div className="space-y-1 mb-4">
        <h3 className="text-md text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{format}</span>
        <button className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white text-sm font-medium text-violet-700 border border-violet-400">
          <LuDownload className="w-4 h-4 font-medium" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

/* ---------- Guides ---------- */

function GuideCard({
  icon,
  title,
  gradient,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  description: string;
  action: string;
}) {
  return (
    <div className="bg-white/80 rounded-3xl p-8 flex gap-5 w-full shadow-sm">
      {/* ICON */}
      <div
        className={`w-13 h-13 rounded-2xl flex items-center justify-center text-white text-2xl ${gradient}`}
      >
        {icon}
      </div>

      {/* TEXT + BUTTON */}
      <div className="flex flex-col flex-1">
        <h3 className="text-gray-800 text-md mb-4">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        {/* BUTTON */}
        <button className="inline-flex items-center gap-2 px-3 py-1 border border-violet-300 text-violet-600 rounded-full text-sm font-medium hover:bg-purple-50 transition-all w-fit self-start">
            <LuBookOpen className="w-4 h-4" />
            {action}
        </button>
      </div>
    </div>
  );
}


/* ---------- Video Cards ---------- */

function VideoCard({
  image,
  duration,
  title,
  description,
}: {
  image: string;
  duration: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-4xl overflow-hidden bg-white flex flex-col hover:shadow-sm transition-shadow">
      {/* THUMBNAIL */}
      <div className="relative w-full h-48">
        {/* Thumbnail Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Top-right Duration Badge */}
        <span className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
          {duration}
        </span>

        {/* Play Button (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-15 h-15 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center">
            <LuPlay className="w-7 h-7 text-purple-600" />
          </div>
        </div>
      </div>

      {/* TEXT AREA */}
      <div className="px-6 py-6">
        <h3 className="text-gray-900 text-md mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}


/* ---------- Case Studies ---------- */

function CaseStudyCard({
  company,
  industry,
  challenge,
  result,
}: {
  company: string;
  industry: string;
  challenge: string;
  result: string;
}) {
return (
    <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row justify-between gap-8 hover:shadow-sm transition-all">

      {/* LEFT SECTION */}
      <div className="flex flex-col">

        {/* ICON + COMPANY ROW */}
        <div className="flex items-center gap-4">
          {/* ICON */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white text-2xl">
            <LuBriefcase className="w-5 h-5" />
          </div>

          <div>
            {/* COMPANY NAME */}
            <h3 className="text-md text-gray-900">
              {company}
            </h3>

            {/* INDUSTRY PILL — aligned under the title */}
            <span className="mt-2 px-2 py-0.5 rounded-full bg-white text-xs font-medium text-gray-800 border border-violet-200 inline-block w-fit">
              {industry}
            </span>
          </div>
        </div>

        {/* CONTENT SECTION — starts under icon/title block */}
        <div className="mt-4 space-y-4 text-gray-700 text-sm">

          <div>
            <p className="text-violet-500 mb-1">Challenge:</p>
            <p>{challenge}</p>
          </div>

          <div>
            <p className="text-cyan-500 mb-1">Result:</p>
            <p>{result}</p>
          </div>

        </div>
      </div>

      {/* BUTTON */}
      <div className="md:self-center">
        <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-300 text-violet-700 bg-white text-sm hover:bg-purple-100 transition">
          Read Full Case Study
          <LuExternalLink className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

/* ---------- Books ---------- */

function BookCard({
  title,
  author,
  tag,
}: {
  title: string;
  author: string;
  tag: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shrink-0">
          <LuBookMarked className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-md text-gray-900 leading-relaxed">
            {title}
          </h3>
          <p className="text-sm text-gray-500">by {author}</p>
          <span className="mt-1 inline-flex px-2 py-0.5 rounded-full bg-white text-xs font-medium text-gray-900 border border-violet-200 w-max">
            {tag}
          </span>
        </div>
      </div>
      
    </div>
  );
}
