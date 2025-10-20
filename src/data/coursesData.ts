export interface Course {
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
  instructors: {
    name: string;
    title: string;
    experience: string;
    certs: string[];
    avatar: string;
    bio: string;
  }[];
  learnings: string[];
  feedback: {
    name: string;
    title: string;
    date: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
  id: number;
}

export const coursesData = [
  {
    id: 1,
    slug: "certified-scrummaster-csm",
    title: "Certified ScrumMaster (CSM)",
    type: "Certification Course",
    date: "Jan 15, 2025 - Jan 17, 2025",
    duration: "3 Days",
    level: "Beginner to Intermediate",
    language: "English",
    format: "Live Online / In-Person",
    certificate: "Scrum Alliance CSM",
    price: "$1,000",
    rating: 4.8,
    reviews: 247,
    effort: "2 days",
    length: "16 hours",
    prerequisites: "None required",
    materials: "All materials included",
    instructors: [
      {
        name: "Sarah Johnson",
        title: "Senior Agile Coach",
        experience: "15+ years",
        certs: ["CST", "CSP", "SAFe SPC"],
        avatar: "/public/instructors/sarah.png",
        bio: "Certified Scrum Trainer with extensive experience in enterprise transformations."
      },
      {
        name: "Michael Chen",
        title: "Agile Transformation Lead",
        experience: "12+ years",
        certs: ["CST", "ICP-ACC"],
        avatar: "/public/instructors/michael.png",
        bio: "Passionate about helping teams achieve peak performance through Agile practices."
      }
    ],
    learnings: [
      "Understand the Scrum framework",
      "Facilitate Scrum ceremonies effectively",
      "Build high-performing Scrum teams",
      "Manage product backlogs efficiently",
      "Handle common Scrum challenges"
    ],
    feedback: [
      {
        name: "Emily Rodriguez",
        title: "Product Manager",
        date: "Dec 2024",
        avatar: "/default.png",
        rating: 5,
        comment:
          "Exceptional training! The instructors were knowledgeable and the hands-on exercises really helped solidify the concepts.",
      },
      {
        name: "David Thompson",
        title: "Software Engineer",
        date: "Nov 2024",
        avatar: "/default.png",
        rating: 5,
        comment:
          "Best Scrum training I've attended. Great balance of theory and practice. Highly recommend!",
      },
      {
        name: "Lisa Wang",
        title: "Team Lead",
        date: "Nov 2024",
        avatar: "/default.png",
        rating: 4,
        comment:
          "Very comprehensive course. The real-world examples were incredibly valuable for understanding implementation.",
      },
      {
        name: "James Patel",
        title: "Business Analyst",
        date: "Oct 2024",
        avatar: "/default.png",
        rating: 5,
        comment:
          "The instructors were engaging and made complex topics easy to understand. I feel confident applying Scrum in my team now.",
      },
    ],
  },
  // more courses here...
];
