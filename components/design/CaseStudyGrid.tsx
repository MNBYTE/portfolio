"use client";

import { useMemo } from "react";
import {
  designProjects,
  DesignProject,
} from "@/data/design-projects";
import CaseStudyCard from "./CaseStudyCard";
import { FadeUp } from "@/components/common/Motion";

interface CaseStudyGridProps {
  onOpen: (project: DesignProject) => void;
  searchQuery?: string;
  filters?: {
    featured: boolean;
    category: string;
    sortBy: string;
  };
}

export default function CaseStudyGrid({
  onOpen,
  searchQuery = "",
  filters = {
    featured: false,
    category: "all",
    sortBy: "date",
  },
}: CaseStudyGridProps) {
  const filteredProjects = useMemo(() => {
    let filtered = [...designProjects];

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();

      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.fullDescription.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.role.toLowerCase().includes(query) ||
          project.tools.some((tool) =>
            tool.toLowerCase().includes(query)
          )
      );
    }

    // Featured
    if (filters.featured) {
      filtered = filtered.filter(
        (project) => project.featured
      );
    }

    // Category
    if (filters.category !== "all") {
      filtered = filtered.filter((project) =>
        project.category
          .toLowerCase()
          .includes(filters.category.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (filters.sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      if (filters.sortBy === "date") {
        return b.year - a.year;
      }

      if (filters.sortBy === "oldest") {
        return a.year - b.year;
      }

      return 0;
    });

    return filtered;
  }, [searchQuery, filters]);

  return (
    <section
      className="py-12 px-4"
      id="case-studies"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm tracking-[0.3em] text-white/40 mb-3">
              SELECTED WORK
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Case{" "}
              <span className="text-white/50">
                Studies
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-white/50">
              A selection of product design work across
              fintech, SaaS, and retail technology.
            </p>
          </div>
        </FadeUp>

        {/* Results count */}
        <FadeUp>
          <p className="text-sm font-semibold tracking-wide text-white/60 mb-8">
            {filteredProjects.length}{" "}
            CASE {filteredProjects.length === 1 ? "STUDY" : "STUDIES"} FOUND
          </p>
        </FadeUp>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeUp
              key={project.id}
              delay={index * 0.1}
            >
              <CaseStudyCard
                project={project}
                onOpen={onOpen}
              />
            </FadeUp>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <FadeUp>
            <div className="relative py-20 text-center rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/5 blur-3xl" />

              <p className="text-xl font-semibold text-white mb-2">
                No case studies found
              </p>

              <p className="text-sm text-white/40">
                Try adjusting your search or filters.
              </p>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}