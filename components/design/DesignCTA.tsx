import { FadeUp } from "../common/Motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DesignCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="p-12 rounded-2xl bg-card border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a product that needs <span className="text-primary">great design?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s talk about how thoughtful design can move your product forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}