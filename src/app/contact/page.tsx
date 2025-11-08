"use client";

import { useState } from "react";
import { LuMail, LuPhone, LuMapPin, LuClock, LuSend } from "react-icons/lu";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
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
        <section className="relative bg-gradient-to-r from-violet-600/80 via-violet-700/70 to-cyan-600/70 text-center text-white py-20">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Get in Touch</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-100">
            Have questions about our training programs or coaching services? We are here to help you on your agile transformation journey.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h2 className="text-violet-600 font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600 text-sm mb-6">
              Reach out to us through any of these channels. We typically respond within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <InfoCard icon={<LuMail />} title="Email" value="info@agiletraining.com" />
              <InfoCard icon={<LuPhone />} title="Phone" value="+1 (555) 123-4567" />
              <InfoCard icon={<LuMapPin />} title="Address" value="685 Commonwealth Avenue, Boston, MA 02215" />
              <InfoCard icon={<LuClock />} title="Business Hours" value="Monday – Friday: 9:00 AM – 6:00 PM PST" />
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Follow Us</h3>
              <div className="flex gap-4 text-violet-500">
                <FiFacebook className="cursor-pointer hover:text-cyan-500 transition" />
                <FiTwitter className="cursor-pointer hover:text-cyan-500 transition" />
                <FiLinkedin className="cursor-pointer hover:text-cyan-500 transition" />
                <FiYoutube className="cursor-pointer hover:text-cyan-500 transition" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white rounded-3xl p-8">
            {!submitted ? (
              <>
                <h2 className="text-violet-600 font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField name="firstName" label="First Name *" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                    <InputField name="lastName" label="Last Name *" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField name="email" label="Email Address *" value={formData.email} onChange={handleChange} error={errors.email} />
                    <InputField name="phone" label="Phone Number" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-full px-4 py-2 mt-1 focus:ring-2 focus:ring-violet-400 outline-none text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="Training Inquiry">Training Inquiry</option>
                      <option value="Coaching Services">Coaching Services</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full border border-gray-300 rounded-2xl px-4 py-2 mt-1 focus:ring-2 focus:ring-violet-400 outline-none text-sm"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                  >
                    Send Message <LuSend size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-20 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">Your message has been sent. We will get back to you soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-5xl mx-auto mt-10 px-6">
          <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row justify-around items-center text-center">
            <WhyItem icon={<LuMail className="text-violet-500" />} title="Quick Response" desc="We respond to all inquiries within 24 hours" />
            <WhyItem icon={<LuPhone className="text-cyan-500" />} title="Expert Guidance" desc="Speak directly with our certified trainers" />
            <WhyItem icon={<LuClock className="text-orange-500" />} title="Flexible Support" desc="Multiple contact options to suit your needs" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---- Subcomponents ---- */

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100">
      <div className="text-violet-600 bg-violet-50 p-3 rounded-full">{icon}</div>
      <div>
        <p className="font-medium text-gray-800 text-sm">{title}</p>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}

function InputField({
  name,
  label,
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm text-gray-700">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className={`w-full border rounded-full px-4 py-2 mt-1 text-sm placeholder:text-gray-400 outline-none ${
          error ? "border-red-400" : "border-gray-300 focus:ring-2 focus:ring-violet-400"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function WhyItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-[200px]">
      <div className="bg-gradient-to-r from-violet-100 to-cyan-100 p-3 rounded-full">{icon}</div>
      <h4 className="text-gray-800 font-medium text-sm">{title}</h4>
      <p className="text-gray-600 text-xs">{desc}</p>
    </div>
  );
}
