/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Toast from "@/components/Toast";
import React from "react";

import {
  LuDollarSign,
  LuGlobe,
  LuUsers,
  LuClock,
  LuChartBar,
  LuBookOpen,
  LuCircleCheckBig,
} from "react-icons/lu";

export default function BecomeTrainerPage() {

    const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    expertise: "",
    experience: "",
    certifications: "",
    availability: "",
    reason: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    };

    {/* --- VALIDATION --- */}
    const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
        newErrors.email = "Enter a valid email.";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.linkedin.trim()) newErrors.linkedin = "LinkedIn profile is required.";
    if (!form.expertise.trim()) newErrors.expertise = "Please select expertise.";
    if (!form.experience.trim()) newErrors.experience = "Please select experience.";
    if (!form.certifications.trim())
        newErrors.certifications = "Please list certifications.";
    if (!form.availability.trim()) newErrors.availability = "Please select availability.";
    if (!form.reason.trim()) newErrors.reason = "Please explain your motivation.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };

    {/* --- HANDLE SUBMIT --- */}
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);

    setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        expertise: "",
        experience: "",
        certifications: "",
        availability: "",
        reason: "",
    });

    setErrors({});
    };

  return (
    <>
      <Header />

      <main className="bg-gradient-to-br from-violet-50 to-cyan-50 text-gray-800">

        {/* HERO SECTION */}
        <section className="relative h-[350px] flex flex-col items-center justify-center text-center text-white">
          <Image
            src="/images/become-a-trainer-2.png"
            alt="Trainer Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/95 to-cyan-900/95" />

          <div className="relative z-10 max-w-3xl px-6">
            <p className="text-md mb-3">Become a Trainer</p>
            <h1 className="text-lg mb-10">
              Join our elite team of certified trainers and help organizations worldwide achieve agile excellence.
              Share your expertise, inspire teams, and grow your career.
            </h1>

            <Link
              href="#application"
              className="px-5 py-3 bg-white text-violet-700 rounded-full text-sm font-medium hover:bg-violet-100 transition-all"
            >
              Apply Now
            </Link>
          </div>
        </section>

        {/* WHY JOIN OUR TEAM */}
        <section className="max-w-5xl mx-auto px-6 py-15">
          <h2 className="text-center text-xl font-medium mb-2
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600/80 to-blue-600/60">Why Join Our Team?</h2>
          <p className="text-center text-gray-700 max-w-xl mx-auto mb-12 text-md">
            As a trainer with Agile, you will enjoy a range of benefits designed to support your professional growth and success.
          </p>

          {/* 2-row benefit grid */}
          <div className="grid md:grid-cols-3 gap-6">

            <BenefitCard
              icon={<LuDollarSign className="w-7 h-7" />}
              title="Competitive Compensation"
              desc="Earn competitive rates for your expertise and teaching skills."
            />

            <BenefitCard
              icon={<LuGlobe className="w-7 h-7" />}
              title="Global Reach"
              desc="Train professionals worldwide through our online and in-person programs."
            />

            <BenefitCard
              icon={<LuUsers className="w-7 h-7" />}
              title="Professional Network"
              desc="Connect with expert trainers and industry leaders."
            />

            <BenefitCard
              icon={<LuClock className="w-7 h-7" />}
              title="Flexible Schedule"
              desc="Choose courses that fit your availability and schedule."
            />

            <BenefitCard
              icon={<LuChartBar className="w-7 h-7" />}
              title="Career Growth"
              desc="Enhance your credentials and expand your professional portfolio."
            />

            <BenefitCard
              icon={<LuBookOpen className="w-7 h-7" />}
              title="Continuous Learning"
              desc="Gain access to training materials and industry best practices."
            />

          </div>
        </section>

        {/* QUALIFICATIONS */}
        <section className="max-w-5xl mx-auto px-6 py-14 text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r
          from-blue-600/80 to-blue-600/60 
          font-medium text-xl mb-2">Qualifications & Requirements</h2>
          <p className="text-gray-700 text-sm mb-10">
            We are looking for experienced Agile professionals passionate about teaching and coaching.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-sm space-y-4 text-left max-w-4xl mx-auto">
            {[
              "Certified Scrum Professional (CSP), SAFe Program Consultant (SPC), or equivalent",
              "Minimum 5 years of hands-on experience in Agile/Scrum environments",
              "Proven track record of successful Agile implementations",
              "Excellent communication and presentation skills",
              "Experience training or coaching teams at enterprise level",
              "Strong understanding of Scrum, SAFe, or other Agile frameworks",
            ].map((req, i) => (
              <Requirement key={i} text={req} />
            ))}
          </div>
        </section>

        {/* APPLICATION PROCESS */}
        <section className="py-20">
        <h2 className="text-center font-medium text-xl mb-2
        text-transparent bg-clip-text bg-gradient-to-r from-blue-600/80 to-blue-600/60">
            Application Process
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            Our straightforward application process ensures we find the right fit for both parties.
        </p>

        <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            
            {[
                {
                num: "01",
                title: "Submit Application",
                text: "Complete the application form with your details and experience.",
                },
                {
                num: "02",
                title: "Initial Review",
                text: "Our team reviews your application and credentials.",
                },
                {
                num: "03",
                title: "Interview",
                text: "Meet with our team to discuss opportunities and alignment.",
                },
                {
                num: "04",
                title: "Demo Session",
                text: "Conduct a sample training session to showcase your skills.",
                },
                {
                num: "05",
                title: "Onboarding",
                text: "Join our team and start making an impact!",
                },
            ].map((step, index, arr) => (
                <div key={index} className="flex flex-col items-center text-center relative w-full">

                {/* Circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xl mb-4">
                    {step.num}
                </div>

                {/* --- GRADIENT CONNECTOR LINE (ONLY WHEN NOT LAST ITEM) --- */}
                {index < arr.length -1 && (
                    <div className="hidden md:block absolute top-8 right-[-60%] w-[91%]">
                        <div className="h-[2px] bg-gradient-to-r from-violet-300 to-cyan-300">
                        </div>
                    </div>
                )}

                {/* Title */}
                <h3 className="text-gray-800 text-md mb-2">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm max-w-xs">
                    {step.text}
                </p>
                </div>
            ))}

            </div>
        </div>
        </section>


        {/* --- APPLICATION FORM SECTION --- */}
        <section id="application" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-center font-medium text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600/80 to-blue-600/60">
            Submit Your Application
        </h2>

        <p className="text-center text-gray-600 text-md mb-10">
            Take the first step towards joining our team of expert trainers.
        </p>

        <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-3xl shadow-sm p-8 space-y-6">

            {/* 2-column grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <Input
                name="firstName"
                label="First Name *"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
                />
                <Input
                name="lastName"
                label="Last Name *"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
                />
                <Input
                name="email"
                label="Email Address *"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
                />
                <Input
                name="phone"
                label="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                required
                />
            </div>

            <Input
                name="linkedin"
                label="LinkedIn Profile URL *"
                value={form.linkedin}
                onChange={handleChange}
                error={errors.linkedin}
            />

            <Select
                name="expertise"
                label="Area of Expertise *"
                value={form.expertise}
                onChange={handleChange}
                options={["Scrum", "SAFe", "Agile Coaching", "Kanban", "XP"]}
                error={errors.expertise}
                required
            />

            <Select
                name="experience"
                label="Years of Experience *"
                value={form.experience}
                onChange={handleChange}
                options={["1–3 years", "3–5 years", "5–10 years", "10+ years"]}
                error={errors.experience}
            />

            <Input
                name="certifications"
                label="Certifications *"
                value={form.certifications}
                onChange={handleChange}
                error={errors.certifications}
            />

            <Select
                name="availability"
                label="Availability *"
                value={form.availability}
                onChange={handleChange}
                options={["Weekdays", "Weekends", "Full-time", "Part-time"]}
                error={errors.availability}
                required
            />

            <Textarea
                name="reason"
                label="Why do you want to join our team? *"
                value={form.reason}
                onChange={handleChange}
                error={errors.reason}
                required
            />

            <div className="flex flex-wrap gap-3 pt-4">
                <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-cyan-600 opacity-90 text-white px-5 py-1.5 rounded-full text-sm flex items-center gap-2 hover:opacity-100 transition-all"
                >
                Submit Application
                </button>

                <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 px-5 py-1.5 rounded-full text-sm hover:bg-gray-50 transition-all"
                >
                Questions? Contact Us
                </Link>
            </div>

            </div>
        </form>

        {/* SUCCESS TOAST */}
        {submitted && (
            <Toast
            message="Thank you for your application! We will review it and get back to you soon."
            visible={submitted}
            onClose={() => setSubmitted(false)}
            />
        )}
        </section>

        {/* FINAL CTA BLOCK */}
        <section className="relative w-full h-90 mt-2">
        {/* Background full-bleed image */}
        <div className="absolute inset-0">
            <Image
            src="/images/become-a-trainer-1.png"
            alt="Background"
            fill
            className="object-cover"
            />
        </div>

        {/* Centered gradient panel */}
        <div className="max-w-4xl mx-auto px-6 py-15">
            <div className="rounded-2xl shadow-xl mx-auto text-center px-12 py-12
                bg-gradient-to-r from-violet-900/90 to-cyan-900/90
                backdrop-blur-xs">
            
            {/* Heading */}
            <h2 className="text-white text-md mb-4">
                Ready to Make an Impact?
            </h2>

            {/* Description */}
            <p className="text-white/90 max-w-2xl mx-auto text-sm mb-8 leading-relaxed">
                Join our community of passionate trainers and help shape the future of
                agile transformation.
            </p>

            {/* Button */}
            <Link
                href="#application"
                className="inline-block bg-white text-violet-700 font-medium
                px-8 py-2 rounded-full text-sm shadow-sm hover:bg-violet-100
                transition-all"
            >
                Start Your Application
            </Link>
            </div>
        </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

/* REUSABLE COMPONENTS */

function BenefitCard({ icon, title, desc }: any) {
  return (
    <div className="p-5 bg-white rounded-2xl hover:shadow-md transition-all">
      <div className="w-13 h-13 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Requirement({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <LuCircleCheckBig  className="text-green-500 w-6 h-6 mt-1" />
      <p className="text-gray-600 text-md">{text}</p>
    </div>
  );
}

function Input({ label, name, value, onChange, error }: any) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-50 rounded-xl px-4 py-2 mt-1 text-sm placeholder:text-gray-400 outline-none ${
          error ? "border border-red-400" : "focus:ring-2 focus:ring-violet-400"
        }`}/>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, name, value, options, onChange, error }: any) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label className="text-gray-700 font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-50 rounded-xl px-4 py-2 mt-1 text-sm placeholder:text-gray-400 outline-none ${
          error ? "border border-red-400" : "focus:ring-2 focus:ring-violet-400"
        }`}>
        <option value="">Select an option</option>
        {options.map((o: string, i: number) => (
          <option key={i} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function Textarea({ label, name, value, onChange, error }: any) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label className="text-gray-700 font-medium">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className={`w-full bg-gray-50 rounded-xl px-4 py-2 mt-1 text-sm placeholder:text-gray-400 outline-none ${
          error ? "border border-red-400" : "focus:ring-2 focus:ring-violet-400"
        }`}/>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
