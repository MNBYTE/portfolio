"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/common/Motion";
import { GraduationCap, Rocket, Zap, Code } from "lucide-react";

const timeline = [
  {
    year: "2025",
    icon: GraduationCap,
    title: "Full-Stack Developer",
    subtitle: "Graduate",
    description: "ADSE in software development and engineering with a focus on full-stack web development",
    glow: "from-purple-500/40 to-fuchsia-500/40",
  },
  {
    year: "2024",
    icon: Rocket,
    title: "Backend Developer",
    subtitle: "Diploma Center",
    description: "HDSE in Software Development and Engineering",
    glow: "from-cyan-500/40 to-blue-500/40",
  },
  {
    year: "2023",
    icon: Zap,
    title: "Frontend Developer",
    subtitle: "Diploma in Information Systems Management",
    description: "Specialized in React and modern web technologies",
    glow: "from-orange-500/40 to-amber-500/40",
  },
  {
    year: "2022",
    icon: Code,
    title: "Web Designer",
    subtitle: "Diploma Center",
    description: "Certified Proficiency in Information Systems Management",
    glow: "from-green-500/40 to-emerald-500/40",
  },
];

export default function Journey() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            My <span className="text-white">Journey</span>
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-[34px] md:left-[40px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.year} delay={index * 0.12}>
                  <motion.div
                    className="relative flex gap-6"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {/* Icon bubble */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="
                          relative w-16 h-16 md:w-20 md:h-20 rounded-2xl
                          bg-gradient-to-br from-black to-white
                          backdrop-blur-xl
                          border border-white/20
                          flex items-center justify-center
                          shadow-[0_0_30px_rgba(255,255,255,0.15)]
                          overflow-hidden
                        "
                      >
                        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                        <Icon className="relative w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Glass card */}
                    <div className="flex-1 pb-6">
                      <motion.div
                        className="
                          relative p-6 md:p-7 rounded-2xl
                          bg-white/5
                          backdrop-blur-2xl
                          border border-white/10
                          overflow-hidden
                        "
                        whileHover={{ scale: 1.01 }}
                      >
                        {/* Gradient glow */}
                        <div
                          className={`
                            pointer-events-none absolute inset-0
                            bg-gradient-to-br ${item.glow}
                            opacity-20
                          `}
                        />

                        <div className="relative flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.subtitle}
                            </p>
                          </div>

                          <div className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 border border-white/20">
                            {item.year}
                          </div>
                        </div>

                        <p className="relative text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}