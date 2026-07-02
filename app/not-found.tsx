import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(204,0,0,0.08) 0%, transparent 70%)" }}
      />

      <div className="container text-center relative z-10 py-24">
        {/* Glitchy 404 */}
        <div className="relative inline-block mb-8">
          <div
            className="text-[10rem] md:text-[16rem] font-display font-bold leading-none select-none"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(204,0,0,0.08) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            aria-hidden="true"
          >
            404
          </div>
          {/* Red overlay text */}
          <div
            className="absolute inset-0 text-[10rem] md:text-[16rem] font-display font-bold leading-none"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "rgba(204,0,0,0.15)",
              transform: "translate(4px, 4px)",
            }}
            aria-hidden="true"
          >
            404
          </div>
        </div>

        <h1
          className="text-2xl md:text-4xl font-display font-bold text-white mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          This Page Doesn&apos;t Exist
        </h1>
        <p className="text-text-muted text-base md:text-lg mb-10 max-w-md mx-auto">
          The URL you typed, followed, or were sent doesn&apos;t match anything on our site. It may have moved or been deleted.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link href="/">
            <Button variant="primary" size="lg" magnetic>
              <Home className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="lg" className="border border-glass-border">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs text-text-muted mb-4 uppercase tracking-widest">Popular pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Services", href: "/services" },
              { label: "AI Solutions", href: "/services/ai-solutions" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-full border border-glass-border text-sm text-text-muted hover:text-white hover:border-primary/30 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
