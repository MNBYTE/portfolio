import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-display font-bold">Husl</h3>
          <p className="mt-4 opacity-70 max-w-sm">
            Building scalable digital products with design, code, and strategy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 opacity-80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 opacity-80">
            <li><a href="#" target="_blank">LinkedIn</a></li>
            <li><a href="#" target="_blank">Twitter / X</a></li>
            <li><a href="#" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6 text-sm opacity-50">
        © {new Date().getFullYear()} Husl. All rights reserved.
      </div>
    </footer>
  );
}
