"use client";
import { useState } from "react";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectModal from "@/components/projects/ProjectModal";
import { Project } from "@/data/project";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main className="px-6">
      <ProjectGrid onOpen={setActiveProject} />
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}
