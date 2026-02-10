"use client";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { FadeUp } from "@/components/common/Motion";
import { useMemo } from "react";

interface ProjectGridProps {
  onOpen: (project: Project) => void;
  searchQuery: string;
  filters: {
    featured: boolean;
    status: string;
    sortBy: string;
  };
}

export default function ProjectGrid({ onOpen, searchQuery, filters }: ProjectGridProps) {
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          p.features.some((feature) => feature.toLowerCase().includes(query))
      );
    }

    // Featured filter
    if (filters.featured) {
      filtered = filtered.filter((p) => p.featured);
    }

    // Status filter
    if (filters.status !== "all") {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    // Sort
    filtered.sort((a, b) => {
      if (filters.sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (filters.sortBy === "date") {
        return b.year - a.year;
      } else if (filters.sortBy === "likes") {
        return parseInt(b.stats.likes) - parseInt(a.stats.likes);
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, filters]);

  return (
    <div>
      <p className="text-sm font-semibold mb-8">
        {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? "S" : ""} FOUND
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <FadeUp key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} onOpen={onOpen} />
          </FadeUp>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-muted-foreground">
            No projects found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}