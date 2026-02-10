import AboutHero from "@/components/about/AboutHero";
import StatsGrid from "@/components/about/StatsGrid";
import MyStory from "@/components/about/MyStory";
import Journey from "@/components/about/Journey";
import ResumeDownload from "@/components/about/ResumeDownload";
import NewsletterCTA from "@/components/common/NewsletterCTA";

export const metadata = {
  title: "About - Portfolio",
  description: "Learn more about my journey and experience",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StatsGrid />
      <MyStory />
      <Journey />
      <ResumeDownload />
    </main>
  );
}