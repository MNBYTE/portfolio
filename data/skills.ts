export const skills = {
  frontend: [
    { name: "Angular", level: 95 },
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML/CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Nestjs", level: 80 },
    { name: "Express & Fastify", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 78 },
    { name: "AWS", level: 75 },
    { name: "Vercel", level: 88 },
    { name: "Render", level: 97 },
  ]
};

export const technologies = [
  "React", "Angular", "Next.js", "TypeScript", "Node.js", "Nestjs",
  "Tailwind CSS", "Bootstrap", "PostgreSQL", "MongoDB", "Redis",
  "GraphQL", "REST APIs", "Docker", "AWS",
  "Vercel", "Git", "Figma", "Framer Motion"
];

export const allSkills = [
  ...skills.frontend.map(s => s.name),
  ...skills.backend.map(s => s.name),
  ...skills.tools.map(s => s.name)
];