import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40">
      {/* Glass shell */}
      <div
        className="
          max-w-7xl mx-auto px-6 py-16
          rounded-3xl
          backdrop-blur-xl
          bg-white/10 dark:bg-white/5
          border border-white/20
          shadow-lg shadow-black/5
        "
      >
        <div className="grid md:grid-cols-3 gap-12 text-white/80">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white">
              MNBYTE
            </h3>
            <p className="mt-4 max-w-sm text-white/70">
              Building scalable digital products with design, code, and strategy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Connect
            </h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/olakunle-fafure" target="_blank" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="https://x.com/datechchief" target="_blank" className="hover:text-white transition">Twitter / X</a></li>
              <li><a href="https://github.com/MNBYTE/" target="_blank" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} MNBYTE. All rights reserved.
      </div>
    </footer>
  );
}
