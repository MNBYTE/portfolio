import { Project } from "../../data/project";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className="rounded-3xl p-6 bg-gray-800/50">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="opacity-80">{project.description}</p>
      <button onClick={() => onOpen(project)}>View</button>
    </div>
  );
}
