import { FadeUp } from "@/components/common/Motion";
import TypingText from "@/components/common/TypingText";
import { personalInfo } from "@/data/personal";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-white/5 blur-[160px]" />
      </div>

      {/* Glass container */}
      <div
        className="
          relative z-10 mx-auto max-w-5xl w-full
          rounded-2xl sm:rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(0,0,0,0.6)]
          px-6 py-12 sm:px-8 sm:py-16 md:py-20
        "
      >
        {/* Availability badge */}
        <FadeUp>
          <div
            className="
              mb-6 sm:mb-8 inline-flex items-center gap-2
              rounded-full
              border border-white/15
              bg-white/10
              px-3 py-1.5 sm:px-4 sm:py-2
              text-white/80
              backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs sm:text-sm font-medium">
              {personalInfo.availability}
            </span>
          </div>
        </FadeUp>

        {/* Name */}
        <FadeUp delay={0.1}>
          <h1 className="mb-4 sm:mb-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight">
            {personalInfo.name}
          </h1>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.2}>
          <p className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70">
            {personalInfo.title}
          </p>
        </FadeUp>

        {/* Typing text */}
        <FadeUp delay={0.3}>
          <div className="mb-8 sm:mb-10 h-6 sm:h-8 text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-white/90">
            <TypingText text={personalInfo.typingTexts.join(" | ")} />
          </div>
        </FadeUp>

        {/* Bio */}
        <FadeUp delay={0.4}>
          <p className="mx-auto mb-10 sm:mb-12 md:mb-14 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/60 px-2 sm:px-0">
            {personalInfo.bio}
          </p>
        </FadeUp>

        {/* Actions */}
        <FadeUp delay={0.5}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <a
              href="/projects"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl
                border border-white/20
                bg-gradient-to-br from-black to-white
                px-6 py-2.5 sm:px-8 sm:py-3
                text-sm sm:text-base
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/25
              "
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            {/* Secondary CTA */}
            <a
              href={personalInfo.social.resume}
              download
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl
                border border-white/15
                bg-white
                px-6 py-2.5 sm:px-8 sm:py-3
                text-sm sm:text-base
                text-black font-medium
                backdrop-blur-md
                transition
                hover:bg-transparent hover:text-white
              "
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}