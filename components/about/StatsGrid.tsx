"use client";

import { FadeUp } from "@/components/common/Motion";
import { Code, Briefcase, Users, Zap } from "lucide-react";
import CountUp from "@/components/common/CountUp";

const stats = [
  { icon: Code, value: 10, suffix: "+", label: "PROJECTS", glow: "from-cyan-400/40 to-blue-500/40" },
  { icon: Briefcase, value: 5, suffix: "+", label: "YEARS", glow: "from-purple-400/40 to-pink-500/40" },
  { icon: Users, value: 10, suffix: "+", label: "SATISFIED CLIENTS", glow: "from-green-400/40 to-emerald-500/40" },
  { icon: Zap, value: 10, suffix: "+", label: "FLUENT STACKS", glow: "from-orange-400/40 to-yellow-500/40" },
];

export default function StatsGrid() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[700px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeUp key={stat.label} delay={index * 0.1}>
                <div
                  className="
                    relative group
                    rounded-3xl p-6
                    bg-white/[0.05]
                    border border-white/10
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:bg-white/[0.08]
                  "
                >
                  {/* Glow layer */}
                  <div
                    className={`
                      absolute inset-0 -z-10 rounded-3xl opacity-0
                      bg-gradient-to-br ${stat.glow}
                      blur-2xl
                      transition-opacity duration-300
                      group-hover:opacity-100
                    `}
                  />

                  {/* Icon */}
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-black to-white border border-white/10 backdrop-blur">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      <CountUp end={stat.value} />
                      {stat.suffix}
                    </div>

                    <p className="text-xs md:text-sm tracking-widest text-white/60">
                      {stat.label}
                    </p>
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