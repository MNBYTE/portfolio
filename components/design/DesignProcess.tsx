"use client";

import { FadeUp } from "@/components/common/Motion";
import {
  Search,
  PenTool,
  Layers,
  FlaskConical,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "Research the users, business goals, existing experience, and competitive landscape to understand the real problem.",
    glow: "from-orange-400/40 to-amber-500/40",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Define",
    description:
      "Turn insights into clear user flows, information architecture, requirements, and low-fidelity wireframes.",
    glow: "from-cyan-400/40 to-blue-500/40",
  },
  {
    icon: Layers,
    number: "03",
    title: "Design",
    description:
      "Build the visual system, high-fidelity interfaces, components, interactions, and prototypes.",
    glow: "from-purple-400/40 to-pink-500/40",
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Validate",
    description:
      "Test key flows, gather feedback, identify friction, and iterate before handing the final experience over.",
    glow: "from-green-400/40 to-emerald-500/40",
  },
];

export default function DesignProcess() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm tracking-[0.3em] text-white/40 mb-3">
              HOW I WORK
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              My Design{" "}
              <span className="text-white/50">Process</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-white/50">
              A structured process that takes a product from an unclear
              problem to a thoughtful, tested experience.
            </p>
          </div>
        </FadeUp>

        {/* Stat-style process grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeUp key={step.title} delay={index * 0.1}>
                <div
                  className="
                    relative group h-full
                    rounded-3xl p-5 md:p-6
                    bg-white/[0.05]
                    border border-white/10
                    backdrop-blur-xl
                    overflow-hidden
                    transition-all duration-300
                    hover:bg-white/[0.08]
                    hover:-translate-y-1
                  "
                >
                  {/* Glow */}
                  <div
                    className={`
                      absolute inset-0 -z-10
                      rounded-3xl
                      opacity-0
                      bg-gradient-to-br ${step.glow}
                      blur-2xl
                      transition-opacity duration-300
                      group-hover:opacity-100
                    `}
                  />

                  {/* Top row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-xl
                        bg-white/[0.06]
                        border border-white/10
                        backdrop-blur
                      "
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <span className="text-xs font-mono tracking-widest text-white/30">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/50">
                    {step.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 h-px w-full bg-white/10">
                    <div
                      className={`
                        h-px w-0
                        bg-gradient-to-r ${step.glow}
                        transition-all duration-500
                        group-hover:w-full
                      `}
                    />
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}