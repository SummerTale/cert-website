// Types
export interface Instructor {
  name: string;
  title: string;
  experience: string;
  certs: string[];
  avatar: string;
  bio: string;
}

export interface Feedback {
  name: string;
  title: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Course {
  id: number;
  avatar: string;
  role: string;
  slug: string;
  title: string;
  type: string;
  duration: string;
  date: string;
  level: string;
  language: string;
  format: string;
  certificate: string;
  price: string;
  rating: number;
  reviews: number;
  effort: string;
  length: string;
  prerequisites: string;
  materials: string;
  instructors: Instructor[];
  learnings: string[];
  feedback: Feedback[];
}

// Common Data
const COMMON_INSTRUCTOR_BASE = {
  name: "Raj Heda",
  title: "Founder, Apex; Faculty at Boston University and Brandeis University",
  experience: "27+ years",
  avatar: "/instructors/raj.png",
  bio: "Raj Heda has been teaching software development and Agile courses for over 27 years. He has extensive experience leading teams in Agile transformation, with successful results at companies like IBM, edX, and PricewaterhouseCoopers."
};

const COMMON_MATERIALS = "Video lectures, PDF slides, practice exams, online community access";

const COMMON_FEEDBACK: Feedback[] = [
  {
    name: "Alex J.",
    title: "Software Project Manager",
    date: "2024-11-15",
    rating: 5,
    comment: "Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization."
  },
  {
    name: "Sarah L.",
    title: "IT Director",
    date: "2024-10-22",
    rating: 5,
    comment: "Fantastic experience! Highly recommended! I am looking forward to sharing what I've learned with my enterprise."
  },
  {
    name: "Mike R.",
    title: "Business Analyst",
    date: "2024-09-30",
    rating: 5,
    comment: "Raj is an excellent instructor, always willing to help and great at explaining concepts."
  },
  {
    name: "Emily S.",
    title: "Product Owner",
    date: "2024-08-18",
    rating: 4,
    comment: "This course equipped me with the skills I needed to grow and advance in my career. Many thanks!"
  }
];

// Helper function to create courses
function createCourse(courseData: {
  id: number;
  avatar: string;
  role: string;
  slug: string;
  title: string;
  duration: string;
  level: string;
  certificate: string;
  price: string;
  rating: number;
  reviews: number;
  effort: string;
  length: string;
  prerequisites: string;
  instructorCerts: string[];
  learnings: string[];
  type?: string;
  date?: string;
  language?: string;
  format?: string;
  materials?: string;
  feedback?: Feedback[];
}): Course {
  return {
    id: courseData.id,
    avatar: courseData.avatar,
    role: courseData.role,
    slug: courseData.slug,
    title: courseData.title,
    type: courseData.type || "Public",
    duration: courseData.duration,
    date: courseData.date || "2020-04-09",
    level: courseData.level,
    language: courseData.language || "English",
    format: courseData.format || "Online, Self-Paced",
    certificate: courseData.certificate,
    price: courseData.price,
    rating: courseData.rating,
    reviews: courseData.reviews,
    effort: courseData.effort,
    length: courseData.length,
    prerequisites: courseData.prerequisites,
    materials: courseData.materials || COMMON_MATERIALS,
    instructors: [
      {
        ...COMMON_INSTRUCTOR_BASE,
        certs: courseData.instructorCerts
      }
    ],
    learnings: courseData.learnings,
    feedback: courseData.feedback || COMMON_FEEDBACK
  };
}

// Courses Dataset
export const courses: Course[] = [
  createCourse({
    id: 1,
    avatar: "/course-logo/PSM.png",
    role: "Scrum Master",
    slug: "professional-scrum-master-training",
    title: "Professional Scrum Master Training",
    duration: "2 days",
    level: "Beginner to Advanced",
    certificate: "PSM I, II, III (via Scrum.org)",
    price: "$1000",
    rating: 4.8,
    reviews: 127,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.",
    instructorCerts: ["CSP", "PMP", "PSM III"],
    learnings: [
      "Scrum fundamentals for PSM I certification",
      "Advanced Scrum mastery for PSM II certification",
      "Detailed Scrum practices for PSM III certification",
      "Applying Agile Scrum in enterprise environments",
      "Team leadership and facilitation techniques"
    ]
  }),

  createCourse({
    id: 2,
    avatar: "/course-logo/CSM.png",
    role: "Scrum Master",
    slug: "csm-certified-scrum-master",
    title: "CSM – Certified ScrumMaster®",
    duration: "2 days",
    level: "Beginner",
    certificate: "CSM (via Scrum Alliance)",
    price: "$1000",
    rating: 4.7,
    reviews: 215,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.",
    instructorCerts: ["CSP", "PMP", "CSM"],
    learnings: [
      "Scrum framework and Agile principles",
      "Team roles, events, and artifacts",
      "How to assist a scrum team to perform at their optimum level",
      "Buffering the team from distractions and impediments",
      "Expanding career opportunities using Agile practices"
    ]
  }),

  createCourse({
    id: 3,
    avatar: "/course-logo/CSPO.png",
    role: "Product Owner",
    slug: "cspo-certified-scrum-product-owner",
    title: "CSPO – Certified Scrum Product Owner",
    duration: "2 days",
    level: "Intermediate",
    certificate: "CSPO (via Scrum Alliance)",
    price: "$1000",
    rating: 4.6,
    reviews: 168,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.",
    instructorCerts: ["CSP", "PMP", "CSPO"],
    learnings: [
      "Managing product vision and backlog",
      "Focusing the team on customer-delighting outcomes",
      "Acting as a conduit between business and the scrum team",
      "Directing the backlog and imparting vision to the team",
      "Advanced product ownership techniques"
    ]
  }),

  createCourse({
    id: 4,
    avatar: "/course-logo/CSD.png",
    role: "Developer",
    slug: "csd-certified-scrum-developer",
    title: "CSD – Certified Scrum Developer",
    duration: "5 days",
    level: "Intermediate",
    certificate: "CSD (via Scrum Alliance)",
    price: "$3000",
    rating: 4.5,
    reviews: 94,
    effort: "5 days",
    length: "40 hours",
    prerequisites: "Previous experience as a software developer in an IT organization highly desired, whether from actual industry experience or theory.",
    materials: "Video lectures, PDF slides, coding exercises, practice exams, online community access",
    instructorCerts: ["CSP", "PMP", "CSD"],
    learnings: [
      "Working knowledge of Scrum and Agile principles",
      "Engineering skills used by Agile developers",
      "Tools and techniques for delivering code in an iterative process",
      "Technical skills assessment and improvement",
      "Contributing effectively to an agile team"
    ]
  }),

  createCourse({
    id: 5,
    avatar: "/course-logo/SAFe_SA.png",
    role: "Management",
    type: "Corporate Workshop",
    slug: "certified-safe-agilist",
    title: "Certified SAFe® Agilist",
    duration: "2 days",
    level: "Advanced",
    certificate: "SAFe® Agilist (via Scaled Agile)",
    price: "$1000",
    rating: 4.8,
    reviews: 156,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.",
    materials: "Video lectures, PDF slides, case studies, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Agilist"],
    learnings: [
      "Scaled Agile Framework® (SAFe®) fundamentals",
      "Leading a Lean-Agile enterprise",
      "Developing business and technical agility",
      "Implementing design thinking and customer-centric mindset",
      "Orchestrating PI Planning events and managing ARTs"
    ]
  }),

  createCourse({
    id: 6,
    avatar: "/course-logo/SAFe_SSM.svg",
    role: "Scrum Master",
    type: "Corporate Workshop",
    slug: "certified-safe-scrum-master",
    title: "Certified SAFe® Scrum Master",
    duration: "2 days",
    level: "Intermediate",
    certificate: "SAFe® Scrum Master (via Scaled Agile)",
    price: "$1000",
    rating: 4.7,
    reviews: 142,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.",
    instructorCerts: ["SPC", "CSP", "SAFe Scrum Master"],
    learnings: [
      "Scrum Master role at enterprise level in SAFe environment",
      "Planning and implementing Program Increment (PI)",
      "Applying Scrum across entire organization",
      "Using iterative planning in enterprise setting",
      "Coaching and servant leadership methods for Agile teams"
    ]
  }),

  createCourse({
    id: 7,
    avatar: "/course-logo/SAFe_POPM.svg",
    role: "Product Owner",
    type: "Corporate Workshop",
    slug: "certified-safe-product-owner-product-manager",
    title: "Certified SAFe® Product Owner / Product Manager",
    duration: "2 days",
    level: "Intermediate",
    certificate: "SAFe® PO/PM (via Scaled Agile)",
    price: "$1000",
    rating: 4.6,
    reviews: 135,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants attend a course on Leading SAFe®, have work experience in SAFe environment, and have experience in Lean, Agile, or other similar certifications.",
    materials: "Video lectures, PDF slides, case studies, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe PO/PM"],
    learnings: [
      "Leading teams to deliver high value in Lean enterprise",
      "Effective Product Owner/Product Manager role within ART",
      "Utilizing Lean thinking in Agile process",
      "Breaking down Epics into Features and Stories",
      "Continuous Delivery and DevOps in ART context"
    ]
  }),

  createCourse({
    id: 8,
    avatar: "/course-logo/SAFe_SP.png",
    role: "Management",
    type: "Corporate Workshop",
    slug: "certified-safe-government-practitioner",
    title: "Certified SAFe® Government Practitioner",
    duration: "2 days",
    level: "Advanced",
    certificate: "SAFe® Government Practitioner (via Scaled Agile)",
    price: "$1000",
    rating: 4.5,
    reviews: 88,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have foundational and base understanding of Agile Manifesto, SAFe House of Lean, SAFe Principles, and foundational and base understanding of lifecycle of technology programs in government.",
    materials: "Video lectures, PDF slides, government case studies, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Government Practitioner"],
    learnings: [
      "Utilizing Scaled Agile Framework® in government agencies",
      "Lean-Agile as a mindset foundation for government transformation",
      "Agile Release Trains (ART) in government context",
      "Tailored leadership skills for government sector transformation",
      "Agile contracting and program launching in government"
    ]
  }),

  createCourse({
    id: 9,
    avatar: "/course-logo/SAFe_SPC.png",
    role: "Management",
    type: "Corporate Workshop",
    slug: "certified-safe-program-consultant",
    title: "Certified SAFe® Program Consultant",
    duration: "4 days",
    level: "Expert",
    certificate: "SAFe® Program Consultant (via Scaled Agile)",
    price: "$2000",
    rating: 4.9,
    reviews: 76,
    effort: "4 days",
    length: "32 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields, 3+ years working in an Agile environment, and 1 or more current Agile certifications.",
    materials: "Video lectures, PDF slides, comprehensive workbook, coaching exercises, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "PMP", "SAFe Program Consultant"],
    learnings: [
      "Leading Lean-Agile transformation at organizational level",
      "Seven core competencies of Lean Enterprise",
      "Coaching programs and constructing Continuous Delivery Pipeline",
      "Strengthening Lean Portfolio Management",
      "Leading Agile Release Trains implementation"
    ]
  }),

  createCourse({
    id: 10,
    avatar: "/course-logo/SAFe_ASM.png",
    role: "Scrum Master",
    type: "Corporate Workshop",
    slug: "certified-safe-advanced-scrum-master",
    title: "Certified SAFe® Advanced Scrum Master",
    duration: "2 days",
    level: "Advanced",
    certificate: "SAFe® Advanced Scrum Master (via Scaled Agile)",
    price: "$1000",
    rating: 4.7,
    reviews: 98,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Highly recommended that participants have one of the following certifications: SAFe® 5 Scrum Master (SSM) Certification, Certified Scrum Master (CSM) certification, or Professional Scrum Master (PSM) certification.",
    materials: "Video lectures, PDF slides, advanced coaching exercises, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Advanced Scrum Master"],
    learnings: [
      "Advanced leadership skills for teams, programs, and enterprises",
      "Facilitating communication across multiple teams",
      "Scalable engineering and DevOps practices",
      "Using Kanban principles for continuous value flow",
      "Supporting stakeholder interactions at program and enterprise levels"
    ]
  }),

  createCourse({
    id: 11,
    avatar: "/course-logo/SAFe_SDP.png",
    role: "Developer",
    type: "Corporate Workshop",
    slug: "certified-safe-devops-practitioner",
    title: "SAFe® DevOps",
    duration: "2 days",
    level: "Intermediate",
    certificate: "SAFe® DevOps Practitioner (via Scaled Agile)",
    price: "$1000",
    rating: 4.6,
    reviews: 112,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Previous experience as a developer or tester in an IT organization highly desired, whether from actual industry experience or theory.",
    materials: "Video lectures, PDF slides, DevOps tool exercises, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe DevOps Practitioner"],
    learnings: [
      "DevOps mindset for Agile team members",
      "CALMR approach to DevOps",
      "Building customized development/deployment pipelines",
      "Tools and practices to speed and secure develop/deploy pipeline",
      "Problem definition through deployment and support"
    ]
  }),

  createCourse({
    id: 12,
    avatar: "/course-logo/SAFe_ARCH.svg",
    role: "Developer",
    type: "Corporate Workshop",
    slug: "certified-safe-architect",
    title: "SAFe® for Architects",
    duration: "3 days",
    level: "Expert",
    certificate: "SAFe® Architect (via Scaled Agile)",
    price: "$1500",
    rating: 4.8,
    reviews: 67,
    effort: "3 days",
    length: "24 hours",
    prerequisites: "Previous experience as a developer in an IT organization highly desired, whether from actual industry experience or theory.",
    materials: "Video lectures, PDF slides, architecture case studies, design exercises, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Architect"],
    learnings: [
      "Architecting to enable DevOps and Release on Demand",
      "Incorporating vision, intent and roadmaps in designs",
      "Aligning architecture with business value",
      "Contributing to Agile/Lean organization as architect",
      "Enabling continuous system-of-systems flow"
    ]
  }),

  createCourse({
    id: 13,
    avatar: "/course-logo/SAFe_SP.png",
    role: "Management",
    type: "Corporate Workshop",
    slug: "certified-safe-practitioner",
    title: "Certified SAFe Practitioner",
    duration: "2 days",
    level: "Intermediate",
    certificate: "SAFe® Practitioner (via Scaled Agile)",
    price: "$1000",
    rating: 4.5,
    reviews: 178,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Some experience with Agile software development principles and practices will be helpful, whether from actual industry experience or reading.",
    instructorCerts: ["SPC", "CSP", "SAFe Practitioner"],
    learnings: [
      "Iterative software development in SAFe environment",
      "Managing product backlogs from user stories and requirements",
      "Daily responsibilities of Agile practitioner",
      "Using Scrum, Kanban, and Extreme Programming in SAFe",
      "Customer-centric mindset and design thinking approach"
    ]
  }),

  createCourse({
    id: 14,
    avatar: "/course-logo/SAFe_RTE.png",
    role: "Devloper",
    type: "Corporate Workshop",
    slug: "certified-safe-release-train-engineer",
    title: "Certified SAFe® Release Train Engineer",
    duration: "3 days",
    level: "Advanced",
    certificate: "SAFe® Release Train Engineer (via Scaled Agile)",
    price: "$1500",
    rating: 4.7,
    reviews: 83,
    effort: "3 days",
    length: "24 hours",
    prerequisites: "Experience with Agile software development principles and practices is necessary, whether from actual industry experience or theory.",
    materials: "Video lectures, PDF slides, RTE simulation exercises, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe RTE"],
    learnings: [
      "Implementing Agile Release Trains (ARTs) using SAFe®",
      "Advanced leadership, coaching and Scrum Master responsibilities",
      "Creating, managing and deploying ARTs",
      "Key Lean-Agile concepts and practices for enterprise",
      "Power and shortcomings of ARTs in enterprise setting"
    ]
  }),

  createCourse({
    id: 15,
    avatar: "/course-logo/SAFe_ASE.svg",
    role: "Developer",
    type: "Corporate Workshop",
    slug: "certified-safe-agile-software-engineer",
    title: "Certified SAFe® Agile Software Engineer",
    duration: "3 days",
    level: "Intermediate",
    certificate: "SAFe® Agile Software Engineer (via Scaled Agile)",
    price: "$1500",
    rating: 4.6,
    reviews: 105,
    effort: "3 days",
    length: "24 hours",
    prerequisites: "Some experience with Agile software development principles and practices will be helpful, whether from actual industry experience or reading.",
    materials: "Video lectures, PDF slides, coding exercises, DevOps practices, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Agile Software Engineer"],
    learnings: [
      "Foundational Lean-Agile and DevOps principles",
      "Iterative software development in SAFe environment",
      "Managing product backlogs and demonstrating value",
      "Customer-centric mindset and design thinking",
      "Agile software development process from developer perspective"
    ]
  }),

  createCourse({
    id: 16,
    avatar: "/course-logo/SAFe_LPM.png",
    role: "Management",
    type: "Corporate Workshop",
    slug: "certified-safe-lean-portfolio-manager",
    title: "Certified SAFe® Lean Portfolio Manager",
    duration: "3 days",
    level: "Advanced",
    certificate: "SAFe® Lean Portfolio Manager (via Scaled Agile)",
    price: "$1500",
    rating: 4.7,
    reviews: 72,
    effort: "3 days",
    length: "24 hours",
    prerequisites: "Some experience with Agile software management principles and practices will be helpful, whether from actual industry experience or from reading.",
    materials: "Video lectures, PDF slides, portfolio management exercises, case studies, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Lean Portfolio Manager"],
    learnings: [
      "Managing enterprise-wide portfolio of Agile projects",
      "Establishing portfolio vision and Lean portfolio budgeting",
      "Using portfolio tools like Portfolio Kanban",
      "Power and shortcomings of Lean portfolio management",
      "SAFe techniques for portfolio management"
    ]
  }),

  createCourse({
    id: 17,
    avatar: "/course-logo/SAFe_APM.svg",
    role: "Product Owner",
    type: "Corporate Workshop",
    slug: "certified-safe-agile-product-manager",
    title: "Certified SAFe® Agile Product Manager",
    duration: "3 days",
    level: "Advanced",
    certificate: "SAFe® Agile Product Manager (via Scaled Agile)",
    price: "$1500",
    rating: 4.6,
    reviews: 89,
    effort: "3 days",
    length: "24 hours",
    prerequisites: "Experience with managing Agile software development projects is highly desired, whether from actual industry experience or theory.",
    materials: "Video lectures, PDF slides, product management exercises, case studies, practice exams, online community access",
    instructorCerts: ["SPC", "CSP", "SAFe Agile Product Manager"],
    learnings: [
      "Lean-Agile principles for product management",
      "Advanced leadership and management responsibilities in SAFe",
      "Creating, managing and deploying ARTs from product perspective",
      "Key Lean-Agile concepts for software development and product management",
      "Product management in Lean-Agile environment"
    ]
  }),

  createCourse({
    id: 18,
    avatar: "/course-logo/PSPO.png",
    role: "Product Owner",
    slug: "professional-scrum-product-owner",
    title: "Professional Scrum Product Owner",
    duration: "2 days",
    level: "Intermediate",
    certificate: "PSPO (via Scrum.org)",
    price: "$1000",
    rating: 4.7,
    reviews: 143,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Some experience with Agile software development principles and practices will be helpful, whether from actual industry experience or reading.",
    materials: "Video lectures, PDF slides, product backlog exercises, practice exams, online community access",
    instructorCerts: ["CSP", "PMP", "PSPO"],
    learnings: [
      "Product owner's perspective on iterative software development",
      "Creating user stories and managing product backlogs",
      "Demonstrating value and incremental delivery",
      "Product owner's roles and responsibilities",
      "Using Scrum, Kanban, and Extreme Programming as product owner"
    ]
  }),

  createCourse({
    id: 19,
    avatar: "/course-logo/PSDI.png",
    role: "Developer",
    slug: "professional-scrum-developer",
    title: "Professional Scrum Developer",
    duration: "3 days",
    level: "Intermediate",
    certificate: "PSD (via Scrum.org)",
    price: "$1500",
    rating: 4.5,
    reviews: 96,
    effort: "3 days",
    length: "24 hours",
    prerequisites: "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.",
    materials: "Video lectures, PDF slides, hands-on development exercises, practice exams, online community access",
    instructorCerts: ["CSP", "PMP", "PSD"],
    learnings: [
      "In-depth understanding of Scrum lessons from Agile Manifesto and Scrum Guide",
      "Hands-on activities from real-world situations",
      "Participating in actual iterative development effort",
      "Proper technique demonstration for certification exam",
      "Agile team membership and real-world challenge resolution"
    ]
  }),

  createCourse({
    id: 20,
    avatar: "/course-logo/CALI.png",
    role: "Management",
    type: "Corporate Workshop",
    slug: "certified-agile-leadership-cal1",
    title: "Certified Agile Leadership",
    duration: "2 days",
    level: "Intermediate",
    certificate: "CAL1 (via Scrum Alliance)",
    price: "$1000",
    rating: 4.6,
    reviews: 124,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "Previous experience as a manager in an IT organization highly desired, whether from actual industry experience or theory.",
    materials: "Video lectures, PDF slides, leadership exercises, case studies, practice exams, online community access",
    instructorCerts: ["CSP", "PMP", "CAL"],
    learnings: [
      "Applying Agile principles to leadership",
      "Effective leadership of distributed and diverse teams",
      "Promoting Scrum values in organizational context",
      "Agile techniques for organizational and management challenges",
      "Valuing individuals and interactions over processes and tools"
    ]
  }),

  createCourse({
    id: 21,
    avatar: "/course-logo/PMP.png",
    role: "Management",
    slug: "project-management-professional",
    title: "Project Management Professional",
    duration: "4 days",
    level: "Advanced",
    certificate: "PMP (via PMI)",
    price: "$2000",
    rating: 4.8,
    reviews: 231,
    effort: "4 days",
    length: "32 hours",
    prerequisites: "A four-year degree, three years of leading projects, and 35 hours of project management education/training OR A high school diploma, five years of leading projects, and 35 hours of project management education/training.",
    materials: "Video lectures, PDF slides, PMBOK guide, practice exams, online community access",
    instructorCerts: ["PMP", "CSP", "PgMP"],
    learnings: [
      "Project, program, and portfolio management best practices",
      "Five process groups: Initiating, Planning, Executing, Monitoring and Controlling, Closing",
      "Ten Knowledge Areas of project management",
      "Inputs, tools and techniques, and outputs for each knowledge area",
      "PMP exam preparation strategies and tips"
    ]
  }),

  createCourse({
    id: 22,
    avatar: "/course-logo/PMI-ACP.png",
    role: "Scrum Master",
    slug: "pmi-agile-certified-practitioner",
    title: "PMI Agile Certified Practitioner",
    duration: "2 days",
    level: "Intermediate",
    certificate: "PMI-ACP (via PMI)",
    price: "$1000",
    rating: 4.7,
    reviews: 167,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "2,000 hours of experience working on teams in general projects OR a current PMP® or PgMP® certification, plus 1,500 hours experience working on project teams in an agile environment, and 21 training hours in the practices of agile.",
    materials: "Video lectures, PDF slides, Agile methodology exercises, practice exams, online community access",
    instructorCerts: ["PMI-ACP", "PMP", "CSP"],
    learnings: [
      "Best practices and principles of Agile methodologies",
      "Scrum, Kanban, extreme programming (XP), test-driven development (TDD) and Lean",
      "Implementing agile principles into the workplace",
      "PMI-ACP certification test preparation",
      "Leading teams and organizations to market success using Agile"
    ]
  })
];

export const coursesData = courses;