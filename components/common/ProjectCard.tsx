import { Project } from "@/data/projects";
import { Github, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-all hover:shadow-2xl hover:border-white/30">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="rounded-full bg-white/20 px-2 py-1 text-xs text-white">
            {project.year}
          </span>
        </div>

        <p className="mb-4 text-sm text-white/80">{project.description}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1 text-xs text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/projects`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/30"
          >
            <Eye className="h-4 w-4" />
            View
          </Link>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/30"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/30"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
