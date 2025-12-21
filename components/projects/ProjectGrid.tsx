import { projects, Project } from "../../data/project";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      {projects.map(p => (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}
    </div>
  );
}
