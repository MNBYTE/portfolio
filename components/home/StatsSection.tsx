import CountUp from "@/components/common/CountUp";
import { FadeUp } from "@/components/common/Motion";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="relative px-4 py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1}>
              <div
                className={`
                  group relative
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  px-6 py-8
                  text-center
                  backdrop-blur-[${14 + index * 2}px]
                  transition-all duration-300
                  hover:bg-white/[0.08]
                  hover:-translate-y-1
                `}
              >
                {/* Inner glow layer */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                {/* Animated glow behind number */}
                <div className="pointer-events-none absolute inset-x-6 top-6 h-10 rounded-full bg-white/20 blur-2xl opacity-0 transition group-hover:opacity-60" />

                <h3 className="relative mb-2 text-4xl font-semibold text-white md:text-5xl">
                  <span className="inline-block transition group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </span>
                </h3>

                <p className="relative text-sm text-white/60 md:text-base">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
