"use client";

import { FadeUp } from "@/components/common/Motion";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden text-center">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        {/* radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)]" />

      </div>

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="relative">
            {/* Floating Icon */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block mb-10"
            >
              <div
                className="
                  relative w-20 h-20 mx-auto rounded-2xl
                  bg-gradient-to-br from-white/10 to-white/5
                  backdrop-blur-xl
                  border border-white/20
                  flex items-center justify-center
                  shadow-[0_0_30px_rgba(255,255,255,0.15)]
                  overflow-hidden
                "
              >
                {/* glass shine */}
                <div className="absolute inset-0 bg-white/10 pointer-events-none" />

                <Mail className="relative w-10 h-10 text-white drop-shadow-lg" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Get In <span className="text-white/50">Touch</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-white/60 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Have a project in mind or just want to chat? I&apos;m available for new
              opportunities!
            </motion.p>

            {/* Animated divider */}
            <motion.div
              className="mx-auto mt-10 h-[2px] w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}