import { FadeUp } from "@/components/common/Motion";
import TypingText from "@/components/common/TypingText";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <FadeUp>
        <h1 className="text-6xl font-display">
          <TypingText text="Building Products That Scale" />
        </h1>
      </FadeUp>
    </section>
  );
}
