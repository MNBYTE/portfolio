"use client";

import { DesignProject } from "@/data/design-projects";
import {
  X,
  ExternalLink,
  Clock,
  User,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  project: DesignProject;
  onClose: () => void;
}

export default function CaseStudyModal({
  project,
  onClose,
}: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    null
  );

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
            className="
              fixed inset-0
              bg-black/80
              backdrop-blur-sm
            "
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              max-w-6xl
              max-h-[90vh]
              overflow-y-auto
              overflow-x-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              shadow-2xl
            "
          >
            {/* Ambient modal glow */}
            <div
              className="
                pointer-events-none
                absolute
                -top-40
                left-1/2
                -translate-x-1/2
                w-[600px]
                h-[400px]
                rounded-full
                bg-primary/10
                blur-3xl
              "
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="
                absolute
                top-4
                right-4
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border border-white/20
                bg-black/40
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/15
                hover:border-white/30
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl md:h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-48
                  bg-gradient-to-t
                  from-black/80
                  via-black/30
                  to-transparent
                "
              />

              {/* Badges */}
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                {project.featured && (
                  <span
                    className="
                      rounded-full
                      border border-white/20
                      bg-white/15
                      px-4
                      py-2
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
                    border border-white/20
                    bg-black/30
                    px-4
                    py-2
                    text-xs
                    text-white/80
                    backdrop-blur-md
                  "
                >
                  {project.year}
                </span>
              </div>

              {/* Hero title */}
              <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/50">
                  {project.category}
                </p>

                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 text-white md:p-8 lg:p-10">
              {/* Back */}
              <button
                type="button"
                onClick={onClose}
                className="
                  mb-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-white
                "
              >
                ← Back to Case Studies
              </button>

              {/* Category */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span
                  className="
                    rounded-full
                    border border-white/15
                    bg-white/10
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-white/80
                    backdrop-blur-md
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {project.title}
              </h2>

              <p className="mb-8 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
                {project.description}
              </p>

              {/* Project Meta */}
              <div
                className="
                  mb-10
                  grid
                  grid-cols-1
                  gap-3
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-4
                  backdrop-blur-md
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/10
                    "
                  >
                    <User className="h-4 w-4 text-white/70" />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      Role
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/10
                    "
                  >
                    <Clock className="h-4 w-4 text-white/70" />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.duration}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/10
                    "
                  >
                    <Calendar className="h-4 w-4 text-white/70" />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      Year
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left / Main Content */}
                <div className="space-y-10 lg:col-span-2">
                  {/* About */}
                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-px w-8 bg-white/20" />
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                        Overview
                      </p>
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-white">
                      About the Project
                    </h3>

                    <p className="leading-relaxed text-white/65">
                      {project.fullDescription}
                    </p>
                  </section>

                  {/* Problem & Solution */}
                  <section>
                    <div className="grid gap-4 md:grid-cols-2">
                      {/* Problem */}
                      <div
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border border-white/10
                          bg-white/[0.04]
                          p-6
                          backdrop-blur-xl
                          transition-all duration-300
                          hover:bg-white/[0.07]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-12
                            -top-12
                            h-32
                            w-32
                            rounded-full
                            bg-red-500/10
                            blur-3xl
                            transition-opacity
                            group-hover:opacity-100
                          "
                        />

                        <div className="relative">
                          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-red-300/60">
                            Challenge
                          </p>

                          <h3 className="mb-3 text-xl font-bold text-white">
                            The Problem
                          </h3>

                          <p className="text-sm leading-relaxed text-white/60">
                            {project.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border border-white/10
                          bg-white/[0.04]
                          p-6
                          backdrop-blur-xl
                          transition-all duration-300
                          hover:bg-white/[0.07]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-12
                            -top-12
                            h-32
                            w-32
                            rounded-full
                            bg-emerald-500/10
                            blur-3xl
                          "
                        />

                        <div className="relative">
                          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-300/60">
                            Approach
                          </p>

                          <h3 className="mb-3 text-xl font-bold text-white">
                            The Solution
                          </h3>

                          <p className="text-sm leading-relaxed text-white/60">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Design Process */}
                  <section>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-px w-8 bg-white/20" />
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                        Process
                      </p>
                    </div>

                    <h3 className="mb-5 text-2xl font-bold text-white">
                      Design Process
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.process.map((step, index) => (
                        <div
                          key={index}
                          className="
                            group
                            flex
                            items-start
                            gap-4
                            rounded-xl
                            border border-white/10
                            bg-white/[0.04]
                            p-4
                            backdrop-blur-md
                            transition-all duration-300
                            hover:bg-white/[0.08]
                          "
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              border border-white/10
                              bg-gradient-to-br
                              from-black
                              to-white/[0.15]
                              text-xs
                              font-bold
                              text-white
                            "
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="pt-1 text-sm leading-relaxed text-white/70">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Gallery */}
                  {project.gallery.length > 0 && (
                    <section>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-white/20" />
                        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                          Visuals
                        </p>
                      </div>

                      <h3 className="mb-5 text-2xl font-bold text-white">
                        Gallery
                      </h3>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {project.gallery.map((image, index) => (
                          <button
                            type="button"
                            key={image}
                            onClick={() =>
                              setSelectedImage(image)
                            }
                            className="
                              group
                              relative
                              aspect-video
                              overflow-hidden
                              rounded-xl
                              border border-white/10
                              bg-white/[0.04]
                              text-left
                            "
                          >
                            <Image
                              src={image}
                              alt={`${project.title} screen ${
                                index + 1
                              }`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                              "
                            />

                            <div
                              className="
                                absolute
                                inset-0
                                bg-black/10
                                transition-colors
                                group-hover:bg-black/0
                              "
                            />

                            <div
                              className="
                                absolute
                                bottom-3
                                left-3
                                rounded-full
                                border border-white/15
                                bg-black/40
                                px-3
                                py-1
                                text-xs
                                text-white/70
                                backdrop-blur-md
                              "
                            >
                              View screen {index + 1}
                            </div>
                          </button>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Outcome */}
                  <section>
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.05]
                        p-6
                        backdrop-blur-xl
                        md:p-8
                      "
                    >
                      <div
                        className="
                          absolute
                          -right-20
                          -top-20
                          h-48
                          w-48
                          rounded-full
                          bg-primary/15
                          blur-3xl
                        "
                      />

                      <div className="relative">
                        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                          Result
                        </p>

                        <h3 className="mb-4 text-2xl font-bold text-white">
                          Outcome
                        </h3>

                        <p className="leading-relaxed text-white/65">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-5">
                  {/* Tools */}
                  <div
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <h3 className="mb-5 text-lg font-bold text-white">
                      Tools Used
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="
                            rounded-full
                            border border-white/10
                            bg-white/[0.07]
                            px-3
                            py-2
                            text-xs
                            text-white/70
                            backdrop-blur-md
                          "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <h3 className="mb-5 text-lg font-bold text-white">
                      Project Details
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-wider text-white/35">
                          Category
                        </p>

                        <p className="text-sm font-medium text-white/80">
                          {project.category}
                        </p>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div>
                        <p className="mb-1 text-xs uppercase tracking-wider text-white/35">
                          Role
                        </p>

                        <p className="text-sm font-medium text-white/80">
                          {project.role}
                        </p>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div>
                        <p className="mb-1 text-xs uppercase tracking-wider text-white/35">
                          Duration
                        </p>

                        <p className="text-sm font-medium text-white/80">
                          {project.duration}
                        </p>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div>
                        <p className="mb-1 text-xs uppercase tracking-wider text-white/35">
                          Year
                        </p>

                        <p className="text-sm font-medium text-white/80">
                          {project.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  {project.behance &&
                    project.behance !== "#" && (
                      <div
                        className="
                          rounded-2xl
                          border border-white/10
                          bg-white/[0.04]
                          p-5
                          backdrop-blur-xl
                        "
                      >
                        <p className="mb-4 text-sm text-white/50">
                          Want to explore the full design work?
                        </p>

                        <a
                          href={project.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border border-white/20
                            bg-gradient-to-br
                            from-black
                            to-white/[0.15]
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-white
                            backdrop-blur-md
                            transition-all duration-300
                            hover:bg-white/20
                            hover:border-white/30
                          "
                        >
                          <ExternalLink className="h-4 w-4" />
                          View on Behance
                        </a>
                      </div>
                    )}
                </aside>
              </div>

              {/* Bottom Actions */}
              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-white/10
                  pt-8
                  sm:flex-row
                "
              >
                {project.behance &&
                  project.behance !== "#" && (
                    <a
                      href={project.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border border-white/20
                        bg-gradient-to-br
                        from-black
                        to-white/[0.15]
                        px-6
                        py-4
                        text-sm
                        font-bold
                        text-white
                        backdrop-blur-md
                        transition-all duration-300
                        hover:bg-white/20
                        hover:border-white/30
                      "
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Full Case Study
                    </a>
                  )}

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border border-white/15
                    bg-white/[0.06]
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-white/70
                    backdrop-blur-md
                    transition-all duration-300
                    hover:bg-white/15
                    hover:text-white
                  "
                >
                  <X className="h-5 w-5" />
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
              className="
                fixed
                inset-0
                bg-black/95
                backdrop-blur-md
              "
            />

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                relative
                z-10
                h-[80vh]
                w-full
                max-w-6xl
              "
            >
              <Image
                src={selectedImage}
                alt={`${project.title} preview`}
                fill
                sizes="100vw"
                className="rounded-xl object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}