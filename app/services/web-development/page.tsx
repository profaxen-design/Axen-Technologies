import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Globe } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Web Development — High-Performance Next.js & React Applications",
  description:
    "Custom web application development using Next.js, React, and TypeScript. E-commerce platforms, SaaS products, and enterprise web apps. Mumbai-based, globally delivered.",
};

export default function WebDevPage() {
  const service = getServiceBySlug("web-development")!;

  return (
    <div className="pt-24">
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(204,0,0,0.12) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="eyebrow mb-4">{service.title}</div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Web Applications That{" "}
                <span className="gradient-text">Convert & Scale</span>
              </h1>
              <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
                {service.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"><Button variant="primary" size="lg" magnetic>Start a Project <ArrowRight className="w-4 h-4" /></Button></Link>
                <Link href="/portfolio"><Button variant="ghost" size="lg" className="border border-glass-border">View Our Work</Button></Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>What&apos;s Included</h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {service.features.map((f) => (
              <StaggerItem key={f}>
                <div className="p-5 rounded-xl border border-glass-border bg-surface flex items-start gap-3 hover:border-primary/25 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-muted">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface/30">
        <div className="container max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Why Clients Choose Us For Web Development
            </h2>
          </ScrollReveal>
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {service.benefits.map((b, i) => (
              <StaggerItem key={b}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-glass-border bg-surface">
                  <span className="text-2xl font-display font-bold text-primary/30 shrink-0" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    0{i + 1}
                  </span>
                  <p className="text-text-muted pt-1 text-sm md:text-base">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="mb-10">
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Technology Stack</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl border border-glass-border bg-surface text-sm font-mono text-text-muted hover:border-primary/30 hover:text-white transition-all">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Our Web Development Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {service.process.map(({ step, title, description }, i) => (
              <ScrollReveal key={step} delay={i * 0.07}>
                <div className="group p-6 rounded-xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300">
                  <div className="text-3xl font-display font-bold text-primary/20 mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>0{step}</div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Ready To Build Your <span className="gradient-text">Web Platform?</span>
            </h2>
            <p className="text-text-muted mb-8">We&apos;ll scope your project, provide a fixed-price proposal, and have a dedicated team ready to start within 2 weeks.</p>
            <Link href="/contact"><Button variant="primary" size="lg" magnetic>Get a Free Quote <ArrowRight className="w-4 h-4" /></Button></Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
