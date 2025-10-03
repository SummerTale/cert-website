// components/Newsletter.tsx
"use client";

import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return alert("Please allow email permission.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-r from-violet-50 to-cyan-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white/90 rounded-3xl shadow-md outline-violet-500/20 p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Thank you for subscribing!
            </h3>
            <p className="mt-2 text-zinc-600">
              You will now receive updates on workshops, courses, and industry insights.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-violet-50 to-cyan-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/90 rounded-3xl shadow-md outline-violet-500/20 p-10 text-center">
          {/* Icon */}
          <HiOutlineMail className="w-12 h-12 text-gray-900 mx-auto mb-6" />

          {/* Title */}
          <h3 className="text-base font-medium text-gray-900 mb-2">
            Stay connected with us
          </h3>

          {/* Description */}
          <p className="text-base text-zinc-600 mb-8 max-w-xl mx-auto">
            Receive information on upcoming workshops and insights. Get the latest
            updates on courses, training opportunities, and industry trends.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center"
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full md:w-100 h-10 px-4 bg-slate-40/70 rounded-2xl outline-transparent text-sm text-gray-900 placeholder-zinc-600"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-100 h-10 px-4 bg-slate-40/70 rounded-2xl outline-transparent text-sm text-gray-900 placeholder-zinc-600"
              required
            />

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-xs text-zinc-600">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-4 h-4 rounded border-violet-500"
              />
              I am permitting you to email me. You can unsubscribe at any time.
            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={!consent}
              className={`w-full md:w-96 h-9 mt-4 rounded-2xl text-sm font-medium text-white transition 
                ${
                  consent
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 hover:opacity-90"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
