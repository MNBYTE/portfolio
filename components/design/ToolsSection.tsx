import { FadeUp } from "@/components/common/Motion";

const tools = ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Framer", "Principle", "Notion", "Zeplin"];

export default function ToolsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <FadeUp>
          <p className="text-sm font-semibold text-muted-foreground mb-6">
            TOOLS I DESIGN WITH
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-card border-2 border-foreground text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}