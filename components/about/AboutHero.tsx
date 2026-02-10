import { FadeUp } from "@/components/common/Motion";

export default function AboutHero() {
  return (
    <section className="relative py-24 px-4 text-center overflow-hidden">
      {/* Glass background accent */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          {/* Glass Card */}
          <div
            className="
              inline-block px-10 py-12
              rounded-3xl
              bg-white/[0.05]
              border border-white/10
              backdrop-blur-xl
              shadow-lg
            "
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-white to-black-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p className="text-lg text-white/70 font-mono">
              Crafting digital experiences with code and creativity
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}