import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import NewsletterCTA from "@/components/common/NewsletterCTA";
import SkillsSection from "@/components/home/SkillsSection";

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <FeaturedProjects />
    </main>
  );
}


