import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
        <Header />
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <Link
          href="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </div>
      
      <section id="who-we-are">
        <h1 className="text-3xl font-bold mb-4">Who We Are</h1>
        <p className="mb-4">
          Apex is a boutique consulting firm with decades of software development
          experience. We grew up in the era of structured design methodologies,
          adapted our learnings to the rapid development approaches, and graduated
          to Agile.
        </p>
        <p className="mb-4">
          Having partnered with many of the original Agile founders, we worked
          hand-in-hand with them to implement Agile software development practices
          at companies like IBM, Lotus and Verizon. Raj Heda, President and CEO of
          Apex, is a leading author, teacher and world-renowned industry
          consultant. Our in-house experts are master’s degree students at Boston
          University’s Metropolitan College, with decades of industry experience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Devin Dumais, Andras Palfi, and Shailesh Tamrakar are Apex’s three lead
            development consultants.
          </li>
          <li>
            Keith Gutfreund leads Apex’s Product Owner and Content Writer teams.
          </li>
          <li>
            Po-Han (John) Huang and Daniela lead Apex’s Quality certification team.
          </li>
          <li>
            Mingyang Zu is lead consultant for Apex’s Business Analyst certification
            team.
          </li>
        </ul>
      </section>

      {/* What We Do */}
      <section id="what-we-do">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <p className="mb-4">Apex can help you succeed in three ways:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Training & Certification:</strong> our 1–2 day training courses
            are specifically designed to prepare you for the Agile certification
            exams from SAFe, Scrum.org, and Scrum Alliance. You can train with
            confidence due to our Apex guarantee: if you do not succeed in passing
            the certification, you may re-enroll in the training at no additional
            cost.
          </li>
          <li>
            <strong>Coaching:</strong> Apex offers customized coaching from our
            expert staff. We can coach your team, your executives, and your
            organization. Please contact us for more details.
          </li>
          <li>
            <strong>Assessment:</strong> Apex uniquely offers a suite of detailed
            assessments to determine your specific organization’s capabilities and
            needs. See our different assessment offerings here (click link to
            Assessment page) for more details.
          </li>
        </ul>
      </section>
    </main>
    <Footer />
    </>
  );
}
