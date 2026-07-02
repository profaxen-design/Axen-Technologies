"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { portfolioItems, getPortfolioByCategory } from "@/lib/content/portfolio";
import type { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: { label: string; value: PortfolioCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "AI Projects", value: "ai" },
  { label: "Web Projects", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Automation", value: "automation" },
  { label: "Data & Analytics", value: "data" },
];

const categoryColors: Record<string, string> = {
  ai: "text-purple-400 border-purple-400/40 bg-purple-400/10",
  web: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  mobile: "text-green-400 border-green-400/40 bg-green-400/10",
  automation: "text-orange-400 border-orange-400/40 bg-orange-400/10",
  data: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const filtered = getPortfolioByCategory(activeCategory);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-glow opacity-30" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="eyebrow mb-4">Our Work</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Results That{" "}
              <span className="gradient-text">Speak Louder</span>
              {" "}Than Promises
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              150+ projects delivered. Here are some of the ones we&apos;re proudest of — with real numbers to back them up.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-glass-border sticky top-[72px] z-30 bg-[rgba(8,8,8,0.9)] backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === value
                    ? "bg-primary text-white border border-primary"
                    : "border border-glass-border text-text-muted hover:text-white hover:border-white/20 bg-transparent"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block rounded-2xl border border-glass-border bg-surface overflow-hidden hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full"
                    data-cursor="View"
                  >
                    {/* Cover */}
                    <div
                      className="relative h-52 overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #1a0505 0%, #0d0808 50%, #160a0a 100%)" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-display font-bold text-primary/20" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {project.title.split(" ").map(w => w[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className={cn("text-xs font-mono rounded px-2 py-1 border uppercase tracking-wider", categoryColors[project.category] || "text-primary border-primary/40 bg-primary/10")}>
                          {project.category}
                        </span>
                      </div>
                      {/* Year */}
                      <div className="absolute top-4 right-4 text-xs font-mono text-text-muted">{project.year}</div>
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                      <div className="mb-1 text-xs text-text-muted">{project.client}</div>
                      <h2 className="text-lg font-display font-semibold text-white group-hover:text-primary transition-colors mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        {project.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Key result */}
                      <div className="p-3 rounded-xl bg-surface-2 mb-4">
                        <div className="text-xs text-text-muted mb-1">Key Result</div>
                        <div className="text-sm font-semibold text-primary">{project.result}</div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="tag">{tech}</span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-sm text-primary font-medium mt-auto">
                        View Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-muted">
              No projects in this category yet. More coming soon.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface/30">
        <div className="container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Your Project Could{" "}
              <span className="gradient-text">Be Next</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-8">
              Let&apos;s add your success story to this page.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" magnetic>
                Start a Project <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
