"use client";

import { useState } from "react";
import { LuMail, LuPhone, LuMapPin, LuClock4, LuSend } from "react-icons/lu";
import { LuFacebook, LuTwitter, LuLinkedin, LuYoutube } from "react-icons/lu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [toastVisible, setToastVisible] = useState(false);

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
      if (validate()) {

    emailjs
      .send(
        "service_n53rxxr",
        "template_9nqpp9l",  
        {
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "XNyxe3sZ2zIMuXrNO"
      )
      .then(
        () => {
          // Show your toast
          setToastVisible(true);

          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          // Reset errors
          setErrors({});
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong sending your message.");
        }
      );
  }
};

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-violet-50 to-cyan-50 min-h-screen pb-12">
        <section className="relative h-[300px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/contact-us.png"
          alt="Contact Agile Training & Coaching"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-blue-900/90 to-cyan-900/90"></div>

        {/* Text Content */}
        <div className="relative z-10 px-6">
          <h2 className="text-md font-medium mb-3 text-white/90 tracking-wide">
            Get in Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white">
            Have questions about our training programs or coaching services? 
            We&apos;re here to help you on your agile transformation journey.
          </p>
        </div>
      </section>

        {/* CONTACT SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:items-stretch">
          {/* LEFT SECTION - CONTACT INFO */}
          <div className="space-y-8">

            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 text-lg font-medium">Contact Information</h3>
            <p className="text-gray-600 max-w-sm">
              Reach out to us through any of these channels. <br />
              We typically respond within 24 hours.
            </p>

            {/* EMAIL */}
            <div className="p-5 bg-white rounded-2xl hover:shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white">
                <LuMail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Email</h4>
                <p className="text-gray-600 text-sm">info@agiletraining.com</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="p-5 bg-white rounded-2xl hover:shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white">
                <LuPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Phone</h4>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="p-5 bg-white rounded-2xl hover:shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white">
                <LuMapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Address</h4>
                <p className="text-gray-600 text-sm">
                  685 Commonwealth Avenue,<br />
                  Boston, MA 02215
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="p-5 bg-white rounded-2xl hover:shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white">
                <LuClock4 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Business Hours</h4>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="p-6 bg-white rounded-2xl">
              <h4 className="text-gray-800 mb-4">Follow Us</h4>

              <div className="flex items-center gap-4 text-lg">
                <a className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center">
                  <LuFacebook className="w-6 h-6"/>
                </a>
                <a className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center">
                  <LuTwitter className="w-6 h-6"/>
                </a>
                <a className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center">
                  <LuLinkedin className="w-6 h-6"/>
                </a>
                <a className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white flex items-center justify-center">
                  <LuYoutube className="w-6 h-6"/>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl p-10">
              {!submitted ? (
                <>
                  <h2 className="text-violet-600 mb-6">Send us a Message</h2>
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
                        className="w-full bg-gray-50 rounded-full px-4 py-2 mt-1 focus:ring-2 focus:ring-violet-400 outline-none text-sm"
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
                        className="w-full bg-gray-50 rounded-2xl px-4 py-2 mt-1 focus:ring-2 focus:ring-violet-400 outline-none text-sm"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white opacity-90 px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:opacity-100 transition"
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
          </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-5xl mx-auto px-6 py-4">
          <div className="bg-white rounded-3xl shadow-sm py-5 px-8 text-center">

            {/* Heading */}
            <h2 className="text-blue-500 text-md mb-8">Why Choose Us?</h2>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Quick Response */}
              <div className="flex flex-col items-center text-center">
                <div className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-400 mb-6 shadow-md">
                  <LuMail className="text-white w-7 h-7" />
                </div>
                <h4 className="text-gray-800 text-md mb-2">Quick Response</h4>
                <p className="text-gray-600 text-sm max-w-[275px]">
                  We respond to all inquiries within 24 hours
                </p>
              </div>

              {/* Expert Guidance */}
              <div className="flex flex-col items-center text-center">
                <div className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-md">
                  <LuPhone className="text-white w-7 h-7" />
                </div>
                <h4 className="text-gray-800 text-md mb-2">Expert Guidance</h4>
                <p className="text-gray-600 text-sm max-w-[275px]">
                  Speak directly with our certified trainers
                </p>
              </div>

              {/* Flexible Support */}
              <div className="flex flex-col items-center text-center">
                <div className="w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 mb-6 shadow-md">
                  <LuClock4 className="text-white w-7 h-7" />
                </div>
                <h4 className="text-gray-800 text-md mb-2">Flexible Support</h4>
                <p className="text-gray-600 text-sm max-w-[275px]">
                  Multiple contact options to suit your needs
                </p>
              </div>

            </div>

          </div>
        </section>


        <Toast
          message="Thank you for reaching out! We will get back to you soon."
          visible={toastVisible}
          onClose={() => setToastVisible(false)}
        />

      </main>
      <Footer />
    </>
  );
}

/* ---- Subcomponents ---- */
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
        className={`w-full bg-gray-50 rounded-full px-4 py-2 mt-1 text-sm placeholder:text-gray-400 outline-none ${
          error ? "border border-red-400" : "focus:ring-2 focus:ring-violet-400"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
