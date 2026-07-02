"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogByCategory, getFeaturedBlog } from "@/lib/content/blog";
import { formatDate, cn } from "@/lib/utils";
import type { BlogCategory } from "@/types";

const categories: { label: string; value: BlogCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Software Dev", value: "software-development" },
  { label: "Automation", value: "automation" },
  { label: "Tech Trends", value: "tech-trends" },
  { label: "Business", value: "business-growth" },
];

const categoryColors: Record<string, string> = {
  ai: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  "software-development": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  automation: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  "tech-trends": "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  "business-growth": "text-green-400 border-green-400/30 bg-green-400/10",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const featured = getFeaturedBlog();
  const filtered = getBlogByCategory(activeCategory).filter(p => !p.featured || activeCategory !== "all");
  const gridPosts = activeCategory === "all" ? blogPosts.filter(p => !p.featured) : filtered;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-glow opacity-25" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="eyebrow mb-4">Insights & Ideas</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Knowledge That{" "}
              <span className="gradient-text">Moves You Forward</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Practical insights from engineers who build AI systems, web platforms, and enterprise software for a living — not content marketers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section-padding">
          <div className="container">
            <ScrollReveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block"
                data-cursor="Read"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10 rounded-3xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  {/* Cover placeholder */}
                  <div
                    className="rounded-2xl h-64 lg:h-auto overflow-hidden relative"
                    style={{ background: "linear-gradient(135deg, #1a0505 0%, #0d0808 100%)" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-display font-bold text-primary/15" style={{ fontFamily: "Space Grotesk, sans-serif" }}>AI</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={cn("text-xs font-mono rounded px-2 py-1 border uppercase tracking-wider", categoryColors[featured.category] || "text-primary border-primary/40 bg-primary/10")}>
                        Featured · {featured.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(featured.publishedAt)}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime} min read</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors mb-4 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {featured.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-2 border border-glass-border flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{featured.author.name[0]}</span>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">{featured.author.name}</div>
                        <div className="text-xs text-text-muted">{featured.author.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-primary font-medium mt-5">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <div className="py-6 border-b border-glass-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === value
                    ? "bg-primary text-white border border-primary"
                    : "border border-glass-border text-text-muted hover:text-white hover:border-white/20"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {gridPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-glass-border bg-surface overflow-hidden hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full"
                    data-cursor="Read"
                  >
                    {/* Cover */}
                    <div className="h-44 relative" style={{ background: "linear-gradient(135deg, #1a0505 0%, #0d0808 100%)" }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-primary/15" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {post.title.split(" ")[0].slice(0, 3)}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={cn("text-[10px] font-mono rounded px-2 py-1 border uppercase tracking-wider", categoryColors[post.category] || "text-primary border-primary/40 bg-primary/10")}>
                          {post.category.replace("-", " ")}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.publishedAt)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</span>
                      </div>
                      <h2 className="text-base font-display font-semibold text-white group-hover:text-primary transition-colors mb-3 leading-snug" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        {post.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-2.5 mt-auto pt-4 border-t border-glass-border">
                        <div className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{post.author.name[0]}</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white">{post.author.name}</div>
                          <div className="text-xs text-text-muted">{post.author.role}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding bg-surface/30">
        <div className="container max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="eyebrow mb-4">Newsletter</div>
            <h2 className="text-3xl font-display font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Get Weekly Tech Insights
            </h2>
            <p className="text-text-muted mb-8">
              Practical articles on AI, software engineering, and building scalable technology. No spam — unsubscribe any time.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => { e.preventDefault(); }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-surface border border-glass-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary/60 transition-all"
              />
              <Button type="submit" variant="primary" className="whitespace-nowrap">Subscribe →</Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
