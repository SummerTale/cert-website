/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { JSX } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  LuInfo,
  LuDatabase,
  LuShield,
  LuCookie,
  LuMail,
  LuLock,
  LuUserCheck,
  LuCircleCheck,
} from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-br from-violet-50 to-cyan-50 text-gray-800 min-h-screen">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-600 text-white pt-20 pb-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
              {/* Tag */}
              <div className="inline-flex border border-white/50 items-center px-2 py-0.5 rounded-full bg-white/20 text-xs tracking-wide mb-3">
                Legal Information
              </div>

              <h1 className="text-md mb-6">
                Terms and Conditions
              </h1>

              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-3">
                Understanding how we collect, use, and protect your personal data
              </p>

              <p className="text-xs text-white/75">
                Last updated: November 6, 2025
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT WRAPPER */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
          {/* Intro notice */}
          <div className="bg-white rounded-3xl px-6 md:px-8 py-6 text-gray-700">
            <p className="mb-5 text-md">
              These terms and conditions explain how Agile uses the personal data we collect from you when you use our website.
            </p>
            <p className="text-xs text-gray-500">
              Adapted from:{" "}
              <a
                href="https://gdpr.eu/privacy-notice/"
                target="_blank"
                rel="noreferrer"
                className="text-violet-500 hover:underline"
              >
                https://gdpr.eu/privacy-notice/
              </a>
            </p>
          </div>

          {/* TOPICS COVERED */}
          <TopicsCovered />

          {/* MAIN SECTIONS */}
          <div className="space-y-8">
            <SectionCard
              id="data-we-collect"
              icon={<LuDatabase className="w-5 h-5" />}
              title="What data do we collect?"
            >
              <p className="mb-4">
                Agile collects the following types of data:
              </p>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-purple-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Personal identification information (name, email address, phone
                  number, job title, organization, etc.).
                  </p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-purple-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Credit card information is passed on to the credit card processor and 
                    is not retained by Agile.
                  </p>
              </div>
            </SectionCard>

            <SectionCard
              id="how-we-collect"
              icon={<LuUserCheck className="w-5 h-5" />}
              title="How do we collect your data?"
            >
              <p className="mb-4  ">
                You directly provide Agile with most of the data we collect. We
                collect data and process data when you:
              </p>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-cyan-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Register online or place an order for any of our products or
                  services.
                  </p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-cyan-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Voluntarily complete a customer survey, submit a form, or
                  provide feedback on any of our message boards or via email.
                  </p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-cyan-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Use or view our website via your browser&apos;s cookies.
                  </p>
              </div>
            </SectionCard>

            <SectionCard
              id="how-we-use"
              icon={<CgFileDocument className="w-5 h-5" />}
              title="How will we use your data?"
            >
              <p className="mb-4">
                Agile uses your data so that we can:
              </p>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-orange-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Process your order and manage your account.</p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-orange-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Email you with special offers and information about products and
                  services we think you might like, where permitted.
                  </p>
              </div>
              <p className="mt-4 mb-2 text-gray-700">
                If you agree, Agile will share your data with our partner companies 
                so that they may offer you their products and services.
              </p>
            </SectionCard>

            <SectionCard
              id="how-we-store"
              icon={<LuLock className="w-5 h-5" />}
              title="How do we store your data?"
            >
              <p className="mt-4 mb-4">
                Agile securely stores your data in the cloud on secured and
                encrypted servers.
              </p>
              <p className="text-gray-700 mb-2">
                Agile will keep your data for one year of inactivity. Once this time
                period has expired, we will remove your date from our servers.
              </p>
            </SectionCard>

            <SectionCard
              id="marketing"
              icon={<LuMail className="w-5 h-5" />}
              title="Marketing"
            >
              <p className="mt-4 mb-4">
                Agile would like to send you information about products and 
                services of ours that we think you might like, as well as 
                those of our partner companies.
              </p>
              <p className="mb-4">
                If you have agreed to receive marketing, you may always opt out at a later date.
              </p>
              <p className="mb-4">
                You have the right at any time to stop Agile from 
                contacting you for marketing purposes or giving your 
                data to other companies.
              </p>
            </SectionCard>

            <SectionCard
              id="data-rights"
              icon={<LuShield className="w-5 h-5" />}
              title="What are your data protection rights?"
            >
              <p className="mt-4 mb-4">
                Agile would like to make sure you are fully aware of all your
                data protection rights. Every user is entitled to the following:
              </p>

              <RightsList />
              <p className="mt-4 mb-4 text-gray-700">
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact us
                at:{" "}
                <a
                  href="mailto:info@agilescrum.com"
                  className="text-purple-500 hover:underline"
                >
                  info@agilescrum.com
                </a>
                .
              </p>
            </SectionCard>

            <SectionCard
              id="cookies"
              icon={<LuCookie className="w-5 h-5" />}
              title="Cookies"
            >
              <p className="mt-4 mb-4">
                Cookies are text files placed on your computer to collect standard
                Internet log information and visitor behavior information. When
                you visit our websites, we may collect information from you
                automatically through cookies or similar technologies.
              </p>
              <p className="mb-2">
                For further information about cookies, you can visit{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  allaboutcookies.org
                </a>
                .
              </p>
            </SectionCard>

            <SectionCard
              id="how-use-cookies"
              icon={<LuInfo className="w-5 h-5" />}
              title="How do we use cookies?"
            >
              <p className="mt-4 mb-4">
                Agile uses cookies in a range of ways to improve your experience
                on our website, including:
              </p>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-purple-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Keeping you signed in.</p>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <LuCircleCheck className="text-purple-500 w-5 h-5 flex-shrink-0 mt-1" />
                 <p>Understanding how you use our website and services.</p>
              </div>
            </SectionCard>

            <SectionCard
              id="cookie-types"
              icon={<LuCookie className="w-5 h-5" />}
              title="What types of cookies do we use?"
            >
              <p className="mt-4 mb-4">
                There are a number of different types of cookies. Our website may
                use:
              </p>
              <h3 className="text-cyan-600 mb-2">Functionality Cookies</h3>
              <p className="text-sm mb-4">Agile uses these cookies so that we recognize you on our website and 
                remember your previously selected preferences. These could include what 
                language you prefer and location you are in. A mix of first-party and 
                third-party cookies are used.
              </p>

              <h3 className="text-cyan-600 mb-2">Advertising Cookies</h3>
              <p className="text-sm mb-4">Agile uses these cookies to collect information about your visit to 
                our website, the content you viewed, the links you followed and information 
                about your browser, device, and your IP address. Agile sometimes shares some 
                limited aspects of this data with third parties for advertising purposes. We 
                may also share online data collected through cookies with our advertising 
                partners. This means that when you visit another website, you may be shown 
                advertising based on your browsing patterns on our website.
              </p>
            </SectionCard>

            <SectionCard
              id="manage-cookies"
              icon={<LuInfo className="w-5 h-5" />}
              title="How to manage cookies"
            >
              <p className="mt-4 mb-4">
                You can set your browser not to accept cookies, and the websites
                listed at{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  allaboutcookies.org
                </a>{" "}
                tell you how to remove cookies from your browser. However,
                in a few cases, some of our website features may not function as
                a result.
              </p>
            </SectionCard>
          </div>
        </section>

        {/* FINAL INFO SECTIONS */}
        <section className="max-w-4xl mx-auto px-6 space-y-8 mt-10 pb-20">

        {/* Privacy policies of other websites */}
        <div className="bg-white rounded-3xl px-6 md:px-8 py-8">
            <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mb-3">
            Privacy policies of other websites
            </h3>

            <p className="text-gray-700">
            The Agile website contains links to other websites. Our privacy policy applies only 
            to our website, so if you click on a link to another website, you should read their 
            privacy policy.
            </p>
        </div>

        {/* Changes to our privacy policy */}
        <div className="bg-white rounded-3xl px-6 md:px-8 py-8">
            <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mb-3">
            Changes to our privacy policy
            </h3>

            <p className="text-gray-700">
            Agile keeps its privacy policy under regular review and places any updates on this 
            web page. This privacy policy was last updated on November 6, 2025.
            </p>
        </div>

        {/* How to contact us */}
        <div className="bg-white rounded-3xl px-6 md:px-8 py-8 flex gap-4">
            
            {/* Icon bubble */}
            <div className="mt-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <LuMail className="text-white w-6 h-6" />
            </div>
            </div>

            {/* Text */}
            <div className="space-y-3">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                How to contact us
            </h3>

            <p className="text-gray-700">
                If you have any questions about Agile&apos;s privacy policy, the data we hold on you, 
                or you would like to exercise one of your data protection rights, please do not 
                hesitate to contact us.
            </p>

            <p className="flex items-center gap-2 text-purple-600">
                <LuMail className="w-5 h-5" />
                <a href="mailto:info@agilescrum.com" className="hover:underline">
                info@agilescrum.com
                </a>
            </p>
            </div>

        </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* ---------- Subcomponents ---------- */

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-sm">
      {children}
    </div>
  );
}

function SectionCard({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="bg-white rounded-3xl px-6 md:px-8 py-6 flex gap-4"
    >
      <div className="mt-1">
        <IconBubble>{icon}</IconBubble>
      </div>
      <div className="space-y-2   text-gray-700">
        <h3 className="mt-3   text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-500 to-cyan-500 mb-4">{title}</h3>
        <div>{children}</div>
      </div>
    </section>
  );
}

function TopicsCovered() {
  const topics: { id: string; label: string; icon: JSX.Element }[] = [
    { id: "data-we-collect", label: "What data do we collect?", icon: <LuDatabase className="w-5 h-5" /> },
    { id: "how-we-collect", label: "How do we collect your data?", icon: <LuUserCheck className="w-5 h-5" /> },
    { id: "how-we-use", label: "How will we use your data?", icon: <CgFileDocument className="w-5 h-5" /> },
    { id: "how-we-store", label: "How do we store your data?", icon: <LuLock className="w-5 h-5" /> },
    { id: "marketing", label: "Marketing", icon: <LuMail className="w-5 h-5" /> },
    { id: "data-rights", label: "What are your data protection rights?", icon: <LuShield className="w-5 h-5" /> },
    { id: "cookies", label: "Cookies", icon: <LuCookie className="w-5 h-5" /> },
    { id: "how-use-cookies", label: "How do we use cookies?", icon: <LuInfo className="w-5 h-5" /> },
    { id: "cookie-types", label: "What types of cookies do we use?", icon: <LuCookie className="w-5 h-5" /> },
    { id: "manage-cookies", label: "How to manage cookies", icon: <LuInfo className="w-5 h-5" /> },
  ];

  return (
    <section className="px-6 md:px-8 py-6">
      <h2 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mb-4">
        Topics Covered
      </h2>

      <div className="grid md:grid-cols-2 gap-2 text-md">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`#${topic.id}`}
            className="flex items-center gap-2 px-5 py-5 rounded-2xl text-gray-700 hover:text-violet-500 hover:shadow-md transition-all"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white text-[11px]">
              {topic.icon}
            </span>
            <span className="text-md">{topic.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function RightsList() {
  const rights = [
    { title: "The right to access", desc: "Request copies of your personal data." },
    {
      title: "The right to rectification",
      desc: "Request that we correct any information you believe is inaccurate or incomplete.",
    },
    {
      title: "The right to erasure",
      desc: "Request that we erase your personal data, under certain conditions.",
    },
    {
      title: "The right to restrict processing",
      desc: "Request that we restrict the processing of your personal data, under certain conditions.",
    },
    {
      title: "The right to object to processing",
      desc: "Object to our processing of your personal data, under certain conditions.",
    },
    {
      title: "The right to data portability",
      desc: "Request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.",
    },
  ];

  return (
    <div className="space-y-6">
      {rights.map((item) => (
        <div key={item.title} className="space-y-1">
          {/* Title */}
          <p className="text-purple-600">
            {item.title}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
