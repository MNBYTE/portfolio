"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/common/Motion";
import { Download, FileText } from "lucide-react";

export default function ResumeDownload() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-2xl">
        <FadeUp>
          <motion.div
            className="
              relative rounded-3xl p-10 md:p-14 text-center
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              overflow-hidden
            "
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 160 }}
          >
            {/* Gradient glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent opacity-30" />

            {/* Floating icon */}
            <motion.div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FileText className="h-8 w-8 text-white" />
            </motion.div>

            <h2 className="relative mb-4 text-3xl md:text-4xl font-bold text-white">
              Want to <span className="text-white/50">know more?</span>
            </h2>

            <p className="relative mb-10 text-sm md:text-base text-white/60 max-w-md mx-auto leading-relaxed">
              Download my resume to explore my full work history, technical skills,
              and professional achievements.
            </p>

            {/* Download button */}
            <motion.a
              href="/assets/FAFURE-OLAKUNLE.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="
                inline-flex items-center gap-3
                rounded-xl px-8 py-4
                bg-gradient-to-br from-black to-white
                backdrop-blur-xl
                border border-white/20
                font-semibold text-white
                shadow-[0_0_30px_rgba(255,255,255,0.15)]
                transition
              "
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}