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
        name: "Raj Heda",
        title: "Senior Agile Coach",
        experience: "27+ years",
        certs: ["CSM", "CSP", "SAFe PC"],
        avatar: "/public/instructors/raj.png",
        bio: "Raj Heda has been teaching software development and Agile courses for over 27 years. He has extensive experience leading teams in Agile transformation, with successful results. Raj currently teaches in the Boston area at Boston University and Brandeis University."
      },
    ],
    learnings: [
      "Understand the Scrum framework and its principles",
      "Learn roles, events and artifacts in Scrum",
      "Facilitate Scrum ceremonies effectively",
      "Remove impediments and enable team success",
      "Scale Agile practices across organizations",
      "Apply servant leadership principles",
      "Build high-performing Scrum teams",
      "Manage product backlogs efficiently",
      "Implement continuos improvement practices",
      "Handle common Scrum challenges",
      "Create culture of collaboration",
      "Measure team velocity and productivity",
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
