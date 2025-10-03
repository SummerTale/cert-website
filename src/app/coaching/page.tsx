import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CoachingPage() {
  return (
    <>
        <Header />
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Coaching</h1>

      <section className="space-y-4">
        <p>
          Apex offers coaching in three major areas: Agile Transformation, DevOps
          Transformation, and Tools Assessment and Implementation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">Agile Transformation</h2>
        <p>
          Want to introduce the power of Agile to your organization? Our coaches 
          can work with your teams to bring them up to speed. We will define the 
          roles and responsibilities of the various team members and stakeholders, 
          assist with implementing Agile practices including Scrum, Kanban and Lean, 
          and help to position your group into moving ahead on your own.

        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">DevOps Transformation</h2>
        <p>
          Combining both software development and operations, an Agile DevOps 
          environment maximizes productivity by coordinating a shared vision. 
          This enables your organization to cooperate on a common set of tools 
          and practices, from planning to maintenance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">
          Tools Assessment and Implementation
        </h2>
        <p>
          Agile is a set of principles – there are a plethora of tools available, 
          but which ones are best for your specific needs and goals? With this coaching 
          session, we help you assess your current toolset and your organization’s 
          strengths and challenges, and we assemble a collection of tools specific to 
          your requirements.
        </p>
      </section>
    </main>
    <Footer />
    </>
  );
}
