"use client";

import { motion } from "framer-motion";
import { Search, Star, Filter } from "lucide-react";

interface Filters {
  featured: boolean;
  status: string;
  sortBy: string;
}

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export default function ProjectFilters({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
}: ProjectFiltersProps) {
  return (
    <section className="relative mb-16">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)]" />
      </div>

      <motion.div
        className="
          relative rounded-3xl p-8 md:p-10
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          overflow-hidden
        "
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Gradient glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent opacity-30" />

        {/* Search */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search projects by title, description, features, or tags…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="
              w-full rounded-2xl
              bg-white/5
              border border-white/10
              px-12 py-4
              text-sm md:text-base
              text-white
              placeholder-white/40
              outline-none
              transition-all
              focus:border-white/50
              focus:bg-white/10
            "
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Filters toggle */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2 }}
            onClick={() =>
              onFiltersChange({ ...filters, featured: !filters.featured })
            }
            className="
              flex items-center gap-2 rounded-xl
              border border-white/15
              bg-white/5
              px-5 py-2.5
              text-sm font-semibold text-white
              backdrop-blur
              transition-all
              hover:bg-white/10
            "
          >
            <Filter className="h-4 w-4" />
            Filters
          </motion.button>

          {/* Featured */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2 }}
            onClick={() =>
              onFiltersChange({ ...filters, featured: !filters.featured })
            }
            className={`
              flex items-center gap-2 rounded-xl
              px-5 py-2.5 text-sm font-semibold
              border transition-all backdrop-blur
              ${
                filters.featured
                  ? "bg-yellow-500/20 border-yellow-400/40 text-yellow-300"
                  : "bg-white/5 border-white/15 text-white hover:bg-white/10"
              }
            `}
          >
            <Star className="h-4 w-4" />
            Featured
          </motion.button>
        </motion.div>

        {/* Bottom animated divider */}
        <motion.div
          className="mt-8 h-[2px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}