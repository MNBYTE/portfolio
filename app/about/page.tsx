import AboutIntro from "@/components/about/AboutIntro";
import SkillsSection from "@/components/about/SkillsSection";
import NewsletterCTA from "@/components/common/NewsletterCTA";

export default function AboutPage() {
  return (
    <main className="space-y-32">
      <AboutIntro />
      <SkillsSection />
      <NewsletterCTA />
    </main>
  );
}
