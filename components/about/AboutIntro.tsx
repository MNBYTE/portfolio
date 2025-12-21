import { FadeUp } from "@/components/common/Motion";

export default function AboutIntro() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <FadeUp>
        <h2 className="text-4xl font-display mb-8">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I&apos;m a passionate developer focused on creating scalable and user-friendly applications.
          With expertise in modern web technologies, I strive to build products that make a difference.
        </p>
      </FadeUp>
    </section>
  );
}