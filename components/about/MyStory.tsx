import { FadeUp } from "@/components/common/Motion";
import Image from "next/image";
import AvengersImg from "@/assets/avengers.jpg";

export default function MyStory() {
  return (
    <section className="relative px-4 py-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[900px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <FadeUp>
          <h2 className="mb-12 text-4xl font-bold md:text-5xl text-white">
            My <span className="text-white">Story</span>
          </h2>
        </FadeUp>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Text Content */}
          <FadeUp delay={0.1}>
            <div
              className="
                rounded-3xl
                bg-white/[0.05]
                border border-white/10
                backdrop-blur-xl
                p-8
                space-y-6
                text-white/70
                leading-relaxed
              "
            >
              <p>
                My journey into tech started with curiosity, a desire to understand
                how digital products work and how they can solve real problems.
                What began as experimentation gradually evolved into a passion for
                building systems that are not only functional, but meaningful and scalable.
              </p>

              <p>
                I’ve worked across multiple domains, from recruitment platforms
                that enable seamless collaboration, to retail innovation solutions
                like <span className="text-white/90 font-medium">Smart Shopper</span>,
                where I contribute as a Product Designer and Manager, shaping
                self-checkout experiences for Nigerian stores.
                At <span className="text-white/90 font-medium">Beeseek</span>,
                I work as a Web Developer, building scalable, user-focused applications
                that power core platform experiences in emerging markets.
              </p>

              <p>
                Over time, I evolved into a Full-Stack Developer and
                product-focused builder, working across frontend, backend,
                and product design. I enjoy turning complex ideas into
                clear, usable experiences, with a strong focus on architecture,
                scalability, and intentional software design.
              </p>
            </div>
          </FadeUp>

          {/* Visual / Highlight Card */}
            <FadeUp delay={0.2}>
            <div
              className="
              relative h-[420px]
              overflow-hidden
              rounded-3xl
              bg-white/[0.05]
              border border-white/10
              backdrop-blur-xl
              group
              "
            >
              {/* Image */}
              <Image
              src={AvengersImg}
              alt="My journey"
              fill
              priority
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/20 to-gray-800/40" />

              {/* Inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-white/10 blur-2xl" />
              </div>
            </div>
            </FadeUp>
        </div>
      </div>
    </section>
  );
}