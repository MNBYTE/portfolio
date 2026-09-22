import { FadeUp } from "../../components/common/Motion";

export default function DesignHero() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product <span className="text-white/50">Design</span>
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            Designing intuitive interfaces and experiences people love to use
          </p>
        </FadeUp>
      </div>
    </section>
  );
}