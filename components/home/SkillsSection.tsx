import { FadeUp } from "@/components/common/Motion";
import { skills, technologies } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-28"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-15%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <FadeUp>
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
            Skills &{" "}
            <span className="text-white/80">
              Technologies
            </span>
          </h2>
          <p className="mb-20 text-center text-white/60">
            Tools and technologies I work with on a daily basis
          </p>
        </FadeUp>

        {/* Skill Cards */}
        <div className="mb-20 grid gap-10 md:grid-cols-3">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <FadeUp key={category} delay={catIndex * 0.1}>
              <div
                className="
                  group relative
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-6
                  transition
                  hover:bg-white/[0.08]
                "
              >
                {/* Inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                <h3 className="relative mb-6 text-lg font-semibold capitalize text-white">
                  {category}
                </h3>

                <div className="space-y-5">
                  {skillList.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-white/80">
                          {skill.name}
                        </span>
                        <span className="text-white/50">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Glass progress bar */}
                      <div className="relative h-2 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
                        <div
                          className="
                            absolute left-0 top-0 h-full
                            rounded-full
                            bg-white/40
                            transition-all duration-1000 ease-out
                          "
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(catIndex * skillList.length + index) * 120}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Technology Pills */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border border-white/15
                  bg-white/10
                  px-4 py-2
                  text-sm font-medium
                  text-white/80
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
