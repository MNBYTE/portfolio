"use client";

import { Project } from "@/data/projects";
import {
  X,
  // Github,
  ExternalLink,
  Code,
  Calendar,
  Heart,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const statusLabels = {
    complete: "DEVELOPMENT COMPLETE",
    "in-progress": "IN PROGRESS",
    incomplete: "INCOMPLETE",
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="
              relative w-full max-w-6xl max-h-[90vh] overflow-y-auto
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              shadow-lg
              transition
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-10 p-2
                rounded-lg
                bg-white/[0.08]
                border border-white/20
                backdrop-blur-md
                text-white
                transition
                hover:bg-white/[0.15]
              "
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header with Image */}
            <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {project.badges.featured && (
                  <span className="rounded-full px-4 py-2 bg-white/15 border border-white/20 text-xs font-medium text-white backdrop-blur-md">
                    ⭐ Featured
                  </span>
                )}
                {project.badges.version && (
                  <span className="rounded-full px-4 py-2 bg-white/10 border border-white/20 text-xs text-white/70 backdrop-blur-md">
                    {project.badges.version}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="relative p-8 text-white">
              {/* Back Button */}
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
              >
                ← Back to Projects
              </button>

              {/* Category & Status */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
                  {project.category}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
                  {project.projectInfo.subCategory}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
                  {statusLabels[project.status]}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h2>
              <p className="text-white/60 text-lg mb-6">
                {project.description}
              </p>

              {/* View Source Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2
                  rounded-xl
                  bg-white/10
                  border border-white/20
                  backdrop-blur-md
                  text-white/80
                  transition
                  hover:bg-white/20
                "
              >
                {/* Replace Github icon with SVG */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source
              </a>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-3 gap-8 mt-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">About the Project</h3>
                    <p className="text-white/70 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="
                            flex items-start gap-3 p-4
                            rounded-xl
                            bg-white/10
                            border border-white/20
                            backdrop-blur-md
                          "
                        >
                          <span className="text-2xl">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                {/* Screenshots */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Screenshots</h3>
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.screenshots.map((shot, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(shot)}
                            className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-colors cursor-pointer"
                          >
                            <Image src={shot} alt={`Screenshot ${idx + 1}`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center gap-2 mt-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <button
                            key={num}
                            className={`w-2 h-2 rounded-full ${
                              num === 1 ? "bg-white/70" : "bg-white/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Technologies Used */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                    <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                    <div className="space-y-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="
                            flex items-center gap-3 p-3 rounded-lg
                            bg-white/05
                            border border-white/10
                            backdrop-blur-md
                          "
                        >
                          <div className="w-3 h-3 rounded-full bg-white/30" />
                          <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                    <h3 className="text-lg font-bold mb-4">Project Stats</h3>
                    <div className="space-y-4 text-white/80">
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold">Lines of Code</p>
                          <p className="text-2xl font-bold">
                            {project.stats.lines.replace(" Lines", "")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-red-400" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold">Coffee Cups</p>
                          <p className="text-2xl font-bold">42</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold">Status</p>
                          <p className="text-sm font-bold">
                            {statusLabels[project.status]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                    <h3 className="text-lg font-bold mb-4">Project Info</h3>
                    <div className="space-y-3 text-white/80 text-sm">
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Created
                        </span>
                        <span className="font-semibold">
                          {project.projectInfo.created}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Updated
                        </span>
                        <span className="font-semibold">
                          {project.projectInfo.updated}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-white/10">
                        <p className="mb-2">Category</p>
                        <p className="font-semibold">{project.projectInfo.category}</p>
                      </div>
                      <div>
                        <p className="mb-2">Sub-Category</p>
                        <p className="font-semibold">{project.projectInfo.subCategory}</p>
                      </div>
                      <div>
                        <p className="mb-2">Tags</p>
                        <div className="flex flex-wrap gap-2">
                          {project.projectInfo.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/10 rounded text-xs font-mono text-white/70 backdrop-blur-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 flex items-center justify-center gap-2 px-6 py-4
                    rounded-xl
                    bg-gradient-to-br from-black to-white
                    border border-white/20
                    backdrop-blur-md
                    text-white
                    font-bold
                    transition
                    hover:bg-white/25
                  "
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2 px-6 py-4
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    backdrop-blur-md
                    text-white/80
                    font-bold
                    transition
                    hover:bg-white/20
                  "
                >
                  {/* Replace Github icon with SVG */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>

                <button
                  onClick={onClose}
                  className="
                    flex items-center justify-center gap-2 px-6 py-4
                    rounded-xl
                    bg-gradient-to-br from-black to-white
                    border border-white/20
                    backdrop-blur-md
                    text-white/80
                    font-bold
                    transition
                    hover:bg-white/20
                  "
                >
                  <X className="w-5 h-5" />
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-4 right-4 z-10 p-3
                rounded-full
                bg-white/10
                border border-white/20
                backdrop-blur-md
                text-white
                transition
                hover:bg-white/20
              "
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video"
            >
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Screenshot preview"
                  fill
                  className="object-contain rounded-xl"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}