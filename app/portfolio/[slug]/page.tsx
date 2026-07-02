import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { getPortfolioBySlug, portfolioItems } from "@/lib/content/portfolio";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getPortfolioBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = getPortfolioBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="pt-24">
      {/* Back */}
      <div className="container pt-8 mb-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(204,0,0,0.1) 0%, transparent 60%)" }} />
        <div className="container relative z-10 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-primary border border-primary/40 rounded px-2 py-1 bg-primary/10 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-text-muted">{project.clientIndustry}</span>
              <span className="text-xs text-text-muted">·</span>
              <span className="text-xs text-text-muted">{project.duration}</span>
              <span className="text-xs text-text-muted">·</span>
              <span className="text-xs text-text-muted">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {project.title}
            </h1>
            <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center mb-10">
            <div className="eyebrow mb-3">Results</div>
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Measurable Impact
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5" staggerDelay={0.1}>
            {project.impact.map(({ label, value, suffix = "", description }) => (
              <StaggerItem key={label}>
                <div className="p-6 rounded-2xl border border-glass-border bg-surface text-center hover:border-primary/20 transition-colors">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {value}{suffix}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">{label}</div>
                  {description && <div className="text-xs text-text-muted">{description}</div>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-14">
            <ScrollReveal>
              <div>
                <div className="eyebrow mb-4">The Challenge</div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  What We Were Solving
                </h2>
                <p className="text-text-muted leading-relaxed text-base md:text-lg">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <div className="eyebrow mb-4">The Solution</div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  How We Built It
                </h2>
                <p className="text-text-muted leading-relaxed text-base md:text-lg">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-surface/30">
        <div className="container max-w-4xl mx-auto">
          <ScrollReveal className="mb-8">
            <div className="eyebrow mb-3">Technology</div>
            <h2 className="text-2xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Built With</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl border border-glass-border bg-surface text-sm font-mono text-text-muted hover:border-primary/30 hover:text-white transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="section-padding">
          <div className="container max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 relative overflow-hidden">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 font-light">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-glass-border flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{project.testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{project.testimonial.author}</div>
                    <div className="text-xs text-text-muted">{project.testimonial.role}, {project.testimonial.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-surface/30">
        <div className="container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Your Project Could <span className="gradient-text">Be Next</span>
            </h2>
            <p className="text-text-muted mb-8">
              Ready to achieve results like these? Let&apos;s talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" magnetic>
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" size="lg" className="border border-glass-border">
                  View More Work
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
