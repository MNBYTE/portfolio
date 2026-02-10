import { Project } from "@/data/projects";
import { ExternalLink, Github, Eye, Calendar } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const statusLabels = {
    complete: "Complete",
    "in-progress": "In Progress",
    incomplete: "Incomplete",
  };

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition
        hover:bg-white/[0.08]
      "
    >
      {/* Inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />

      {/* Badges */}
      <div className="absolute left-4 top-4 z-10 flex gap-2">
        {project.badges.featured && (
          <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            ⭐ Featured
          </span>
        )}
        {project.badges.version && (
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            {project.badges.version}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Glass overlay */}
        <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[1px]" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="
                rounded-full
                border border-white/15
                bg-white/10
                px-3 py-1
                text-xs text-white/80
                backdrop-blur-md
              "
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mb-4">
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            {statusLabels[project.status]}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="mb-2 text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-white/60">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/10 px-2 py-1 text-xs font-mono text-white/60 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-6 flex items-center gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {project.stats.date}
          </span>
          <span>📊 {project.stats.lines}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onOpen(project)}
            className="
              flex flex-1 items-center justify-center gap-2
              rounded-xl
              border border-white/20
              bg-gradient-to-br from-black to-white
              px-4 py-2
              text-sm font-medium text-white
              backdrop-blur-md
              transition
              hover:bg-white/25
            "
          >
            <Eye className="h-4 w-4" />
            View
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              rounded-xl
              border border-white/15
              bg-gradient-to-br from-black to-white
              px-4 py-2
              text-sm text-white/70
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              rounded-xl
              border border-white/15
              bg-gradient-to-br from-black to-white
              px-4 py-2
              text-sm text-white/70
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
