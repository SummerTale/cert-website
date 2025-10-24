"use client";

import { useState } from "react";
import Image from "next/image";
import { LuCreditCard } from "react-icons/lu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";

export default function RegisterPage() {

  const searchParams = useSearchParams();
  const prefilledCourse = searchParams.get("course") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    contact: "",
    courses: prefilledCourse,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.address.trim()) newErrors.address = "Mailing Address is required.";
    if (!formData.contact.trim()) newErrors.contact = "Contact Number is required.";
    if (!formData.courses.trim()) newErrors.courses = "Please enter a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <>
    <Header />
    <main className="bg-gradient-to-br from-violet-50 to-cyan-50 min-h-screen pb-12">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-violet-100 via-blue-50 to-cyan-100 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-center md:text-left">
          
          {/* Left Image with subtle glow */}
          <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-200 via-violet-200 to-cyan-100 p-6">
              <div className="relative w-[200px] md:w-[275px] h-[200px] md:h-[250px] overflow-hidden bg-white/70 backdrop-blur-md">
                <Image
                  src="/images/register-hero.png"
                  alt="Registration Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="px-8 md:px-10">
            <h3 className="text-md text-[#7c63f1] mb-4">Welcome!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-md">
              Register below to create your account and start your agile transformation journey
              with our expert team.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {/* Tag 1 */}
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10
                              text-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.4)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500"> ✓ Expert Trainers</span>
              </span>

              {/* Tag 2 */}
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10
                              text-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.4)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500"> ✓ Certified Programs</span>
              </span>

              {/* Tag 3 */}
              <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10
                              text-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.4)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500"> ✓ Lifetime Support</span>
              </span>
            </div>

          </div>
        </div>
      </section>



      {/* REGISTRATION FORM */}
      <section className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-5 mt-12 text-center transition-all duration-500">
        {!submitted ? (
          <>
            <h2
              className="text-center mb-4 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-[#5A75F9] to-[#36A6E8] inline-block"
            >
              Create Your Own Account Below
            </h2>


            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.name ? "border-red-400" : "border-[#C5BDF7]"
                  } rounded-full px-4 py-1 focus:ring-2 focus:ring-violet-400 outline-none`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email address"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.email ? "border-red-400" : "border-[#C5BDF7]"
                  } rounded-full px-4 py-1 focus:ring-2 focus:ring-violet-400 outline-none`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Create a strong password"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.password ? "border-red-400" : "border-[#C5BDF7]"
                  } rounded-full px-4 py-1 focus:ring-2 focus:ring-violet-400 outline-none`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Re-enter your password"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.confirmPassword ? "border-red-400" : "border-[#C5BDF7]"
                  } rounded-full px-4 py-1 focus:ring-2 focus:ring-violet-400 outline-none`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Mailing Address */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Mailing Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter your mailing address"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.address ? "border-red-400" : "border-[#C5BDF7]"
                  } rounded-2xl px-4 py-3 focus:ring-2 focus:ring-violet-400 outline-none resize-none`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* Contact No. */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Contact No.
                </label>
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your contact number"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.contact ? "border-red-400" : "border-[#C5BDF7]"
                  } rounded-full px-4 py-1 focus:ring-2 focus:ring-violet-400 outline-none`}
                />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
              </div>

              {/* Courses */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Courses</label>
                <input
                  name="courses"
                  value={formData.courses}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter courses you're interested in"
                  className={`w-full border placeholder:text-gray-600 placeholder:text-sm bg-gray-50
                    ${
                    errors.courses ? "border-red-400" : "border-violet-300"
                  } rounded-full px-4 py-1 focus:ring-2 focus:ring-violet-400 outline-none`}
                />
                {errors.courses && <p className="text-red-500 text-sm mt-1">{errors.courses}</p>}
              </div>

              {/* Payment Info */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Payment Info</label>
                <div className="border-2 border-violet-500 bg-gradient-to-r from-[#F4EEFC] to-[#E7F7FC] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
                  <LuCreditCard className="text-3xl text-violet-500 mb-3" />
                  <p className="text-blue-500">Credit / Debit Card</p>
                  <p className="text-gray-600 text-sm">Secure payment processing</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="reset"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      address: "",
                      contact: "",
                      courses: "",
                    })
                  }
                  className="w-1/2 mr-1 border border-[#C5BDF7] text-gray-800 text-sm font-medium py-2 rounded-full hover:bg-gray-100 transition"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="w-1/2 ml-1 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-80 text-white text-sm font-medium py-2 rounded-full hover:opacity-100 hover:-translate-y-1 transition"
                >
                  Register
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fadeIn">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Thank You!</h3>
            <p className="text-gray-600">
              Your registration was successful. We’ll reach out to you soon with next steps!
            </p>
          </div>
        )}
      </section>
    </main>
    <Footer />
    </>
  );
}
