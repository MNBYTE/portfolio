"use client";
import { useState } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectModal from "@/components/projects/ProjectModal";
import { Project } from "@/data/projects";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    featured: false,
    status: "all",
    sortBy: "title"
  });

  return (
    <main>
      <ProjectsHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={selectedFilters}
          onFiltersChange={setSelectedFilters}
        />
        <ProjectGrid
          onOpen={setActiveProject}
          searchQuery={searchQuery}
          filters={selectedFilters}
        />
      </div>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}