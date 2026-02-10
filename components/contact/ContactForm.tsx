"use client";

import { useState } from "react";
import { FadeUp } from "@/components/common/Motion";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FadeUp>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 160 }}
        className="
          relative p-8 md:p-10 rounded-2xl
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          overflow-hidden
        "
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/20 opacity-20" />

        {/* Header */}
        <div className="relative mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Send a Message
          </h2>
          <p className="text-sm text-white/60">
            Let’s talk about your idea, project, or collaboration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <label className="block text-sm font-medium text-white/70 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Doe"
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-white/50
                transition
              "
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-white/70 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-white/50
                transition
              "
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-sm font-medium text-white/70 mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-white/50
                transition resize-none
              "
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              w-full mt-4 flex items-center justify-center gap-3
              px-6 py-4 rounded-xl
              bg-gradient-to-br from-black to-white
              text-white-foreground
              font-semibold
              shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              hover:bg-white/50
              transition
            "
          >
            Send Message
            <Send className="w-5 h-5" />
          </motion.button>
        </form>
      </motion.div>
    </FadeUp>
  );
}