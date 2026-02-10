"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/common/Motion";

export default function ProjectsHero() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_65%)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <motion.div
            className="
              relative rounded-3xl px-8 py-14 md:px-14
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              overflow-hidden
            "
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 140 }}
          >
            {/* Gradient glow overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent opacity-30" />

            {/* Title */}
            <motion.h1
              className="relative text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              PROJECT{" "}
              <span className="text-white/50">PORTFOLIO</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="relative text-base md:text-lg text-white/60 font-mono max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Explore my collection of projects, experiments, and creative
              solutions, from product thinking to production-ready systems.
            </motion.p>

            {/* Decorative animated line */}
            <motion.div
              className="mx-auto mt-10 h-[2px] w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}