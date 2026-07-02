import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, Building2, GraduationCap, ShoppingBag, Building, Factory, Truck, Cpu, Play, Scale } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Industries We Serve — Healthcare, Finance, E-commerce & More",
  description: "Axen Technology serves 10+ industries including healthcare, fintech, e-commerce, education, and manufacturing with domain-specific technology solutions.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse, Building2, GraduationCap, ShoppingBag, Building, Factory, Truck, Cpu, Play, Scale,
};

export default function IndustriesPage() {
  return (
    <div className="pt-24">
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-glow opacity-25" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="eyebrow mb-4">Domain Expertise</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              We Know Your{" "}
              <span className="gradient-text">Industry</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Generic technology solutions fail because they ignore industry-specific constraints. We bring domain expertise that makes the difference between a demo and a deployment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.07}>
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Building;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group p-7 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {industry.name}
                        </h2>
                        <p className="text-sm text-text-muted leading-relaxed">{industry.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Key Solutions</div>
                        <ul className="space-y-1.5">
                          {industry.solutions.slice(0, 3).map((s) => (
                            <li key={s} className="text-xs text-text-muted flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {industry.stats && (
                        <div>
                          <div className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Track Record</div>
                          <div className="space-y-1.5">
                            {industry.stats.map(({ label, value }) => (
                              <div key={label}>
                                <div className="text-sm font-bold text-primary">{value}</div>
                                <div className="text-xs text-text-muted">{label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Services pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {industry.services.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-surface/30 text-center">
        <div className="container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-text-muted mb-8">
              We&apos;ve worked across many more verticals. If your industry isn&apos;t listed, there&apos;s a good chance we&apos;ve solved a similar problem before. Let&apos;s talk.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" magnetic>Start a Conversation <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
