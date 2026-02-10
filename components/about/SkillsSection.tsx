import { FadeUp } from "@/components/common/Motion";
import { skills, technologies } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <FadeUp>
        <h2 className="text-4xl font-display mb-8">Skills & Technologies</h2>
        
        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div key={category}>
              <h3 className="text-xl font-semibold capitalize mb-4 text-primary">
                {category}
              </h3>
              <div className="space-y-3">
                {skillList.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies I Use</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}