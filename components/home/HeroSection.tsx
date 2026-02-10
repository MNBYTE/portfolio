import { FadeUp } from "@/components/common/Motion";
import TypingText from "@/components/common/TypingText";
import { personalInfo } from "@/data/personal";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-center">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[40vw] w-[40vw] max-h-[600px] max-w-[600px] min-h-[300px] min-w-[300px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[35vw] w-[35vw] max-h-[500px] max-w-[500px] min-h-[250px] min-w-[250px] rounded-full bg-white/5 blur-[160px]" />
      </div>

      {/* Glass container */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-5xl
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(0,0,0,0.6)]
          px-[5vw] py-[8vh]
          sm:px-8 sm:py-16
          md:px-12 md:py-20
        "
      >
        {/* Availability badge */}
        <FadeUp>
          <div
            className="
              mb-[4vh] inline-flex items-center gap-2
              rounded-full
              border border-white/15
              bg-white/10
              px-[3vw] py-[1vh]
              sm:px-4 sm:py-2
              text-white/80
              backdrop-blur-md
            "
          >
            <span className="relative flex h-[2vw] w-[2vw] min-h-[8px] min-w-[8px] max-h-[10px] max-w-[10px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-full w-full rounded-full bg-emerald-400" />
            </span>
            <span className="text-[clamp(0.75rem,2vw,0.875rem)] font-medium">
              {personalInfo.availability}
            </span>
          </div>
        </FadeUp>

        {/* Name */}
        <FadeUp delay={0.1}>
          <h1 className="mb-[3vh] font-display text-[clamp(2rem,8vw,5rem)] font-bold tracking-tight text-white leading-tight">
            {personalInfo.name}
          </h1>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.2}>
          <p className="mb-[2vh] text-[clamp(1.125rem,4vw,1.875rem)] text-white/70">
            {personalInfo.title}
          </p>
        </FadeUp>

        {/* Typing text */}
        <FadeUp delay={0.3}>
          <div className="mb-[5vh] h-[clamp(1.5rem,6vw,2rem)] text-[clamp(1rem,3.5vw,1.5rem)] font-mono text-white/90">
            <TypingText text={personalInfo.typingTexts.join(" | ")} />
          </div>
        </FadeUp>

        {/* Bio */}
        <FadeUp delay={0.4}>
          <p className="mx-auto mb-[6vh] max-w-2xl text-[clamp(0.875rem,2.5vw,1.125rem)] leading-relaxed text-white/60 px-[2vw] sm:px-0">
            {personalInfo.bio}
          </p>
        </FadeUp>

        {/* Actions */}
        <FadeUp delay={0.5}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-[2vh] sm:gap-4">
            {/* Primary CTA */}
            <a
              href="/projects"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl
                border border-white/20
                bg-gradient-to-br from-black to-white
                px-[6vw] py-[1.5vh]
                sm:px-8 sm:py-3
                text-[clamp(0.875rem,2.5vw,1rem)]
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
                px-[6vw] py-[1.5vh]
                sm:px-8 sm:py-3
                text-[clamp(0.875rem,2.5vw,1rem)]
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