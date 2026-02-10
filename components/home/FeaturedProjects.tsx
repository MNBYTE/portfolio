import { FadeUp } from "@/components/common/Motion";
import ProjectCard from "@/components/common/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-28"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <FadeUp>
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
            Featured{" "}
            <span className="text-white/80">
              Projects
            </span>
          </h2>
          <p className="mb-20 text-center text-white/60">
            A selection of my most impactful work
          </p>
        </FadeUp>

        {/* Projects Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects
          .filter((project) => project.id >= 1 && project.id <= 3)
          .map((project, index) => (
          <FadeUp key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="text-center">
            <Link
              href="/projects"
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-white/15
                bg-gradient-to-br from-black to-white
                px-8 py-3
                text-white/80
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
