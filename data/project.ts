export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "TeamHire",
    description: "Recruitment platform",
    image: "/teamhire.png",
  },
];
