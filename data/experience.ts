export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Full-Stack Developer",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    description: [
      "Led development of a customer-facing dashboard serving 100K+ users",
      "Architected microservices infrastructure reducing response time by 40%",
      "Mentored 5 junior developers and conducted code reviews",
      "Implemented CI/CD pipelines improving deployment frequency by 300%"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full-Stack Developer",
    duration: "Jun 2020 - Dec 2021",
    location: "Remote",
    description: [
      "Built MVP from scratch using React and Node.js",
      "Integrated Stripe payment system processing $500K+ annually",
      "Developed RESTful APIs serving 50K+ daily requests",
      "Optimized database queries reducing load time by 60%"
    ],
    technologies: ["React", "Express", "MongoDB", "Redis", "Docker"]
  },
  {
    id: 3,
    company: "Digital Agency Co.",
    position: "Frontend Developer",
    duration: "Jan 2019 - May 2020",
    location: "New York, NY",
    description: [
      "Developed responsive websites for 20+ clients",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Improved website performance scores to 95+ on Lighthouse",
      "Maintained and updated client websites post-launch"
    ],
    technologies: ["React", "Vue.js", "Tailwind CSS", "WordPress"]
  }
];