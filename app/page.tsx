import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import NewsletterCTA from "@/components/common/NewsletterCTA";

export default function HomePage() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <StatsSection />
      <NewsletterCTA />
    </main>
  );
}
