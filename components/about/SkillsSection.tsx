import { FadeUp } from "@/components/common/Motion";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <FadeUp>
        <h2 className="text-4xl font-display mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}