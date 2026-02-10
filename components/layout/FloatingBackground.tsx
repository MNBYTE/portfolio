"use client";
import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Shape 1 - subtle purple glow */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        initial={{ x: -100, y: -100 }}
        animate={{ x: [-100, 100, -100], y: [-100, 150, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Shape 2 - soft teal glow */}
      <motion.div
        className="absolute right-0 top-1/3 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -120, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shape 3 - pink glow */}
      <motion.div
        className="absolute left-1/3 bottom-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 120, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
