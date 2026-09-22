"use client";

import Image from "next/image";
import {
  ExternalLink,
  Eye,
  Calendar,
  Clock,
} from "lucide-react";

import { DesignProject } from "@/data/design-projects";

type CaseStudyCardProps = {
  project: DesignProject;
  onOpen: (project: DesignProject) => void;
};

export default function CaseStudyCard({
  project,
  onOpen,
}: CaseStudyCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all duration-300
        hover:bg-white/[0.08]
        hover:-translate-y-1
      "
    >
      {/* Inner glass glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          bg-gradient-to-b
          from-white/10
          via-white/[0.02]
          to-transparent
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Ambient hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-10
          -z-10
          rounded-full
          bg-gradient-to-br
          from-cyan-400/20
          via-blue-500/10
          to-purple-500/20
          opacity-0
          blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Badges */}
      <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
        {project.featured && (
          <span
            className="
              rounded-full
              border border-white/20
              bg-white/15
              px-3 py-1
              text-xs
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            ⭐ Featured
          </span>
        )}

        <span
          className="
            rounded-full
            border border-white/15
            bg-black/30
            px-3 py-1
            text-xs
            text-white/80
            backdrop-blur-md
          "
        >
          {project.year}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Glass overlay */}
        <div
          className="
            absolute
            inset-0
            z-10
            bg-black/20
            backdrop-blur-[1px]
          "
        />

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Bottom image gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-10
            h-24
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative p-6">

        {/* Category */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className="
              rounded-full
              border border-white/15
              bg-white/10
              px-3 py-1
              text-xs
              text-white/80
              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mb-2
            text-xl
            font-semibold
            text-white
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mb-4
            line-clamp-2
            text-sm
            leading-relaxed
            text-white/60
          "
        >
          {project.description}
        </p>

        {/* Tools */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="
                rounded
                bg-white/10
                px-2 py-1
                text-xs
                font-mono
                text-white/60
                backdrop-blur-sm
              "
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Project Meta */}
        <div
          className="
            mb-6
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            text-xs
            text-white/50
          "
        >
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {project.year}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {project.duration}
          </span>

          <span className="text-white/30">
            {project.role}
          </span>
        </div>

        {/* Divider */}
        <div className="mb-5 h-px w-full bg-white/10" />

        {/* Actions */}
        <div className="flex gap-2">

          {/* View Case Study */}
          <button
            type="button"
            onClick={() => onOpen(project)}
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
            <Eye className="h-4 w-4" />
            View Case Study
          </button>

          {/* Behance */}
          {project.behance &&
            project.behance !== "#" && (
              <a
                href={project.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) =>
                  event.stopPropagation()
                }
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
                aria-label={`View ${project.title} externally`}
              >
                Figma UI
              </a>
            )}
        </div>
      </div>
    </div>
  );
}