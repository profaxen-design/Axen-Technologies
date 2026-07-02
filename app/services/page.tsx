import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Globe, Smartphone, Code2, Cloud, BarChart3, Palette, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services — Full-Stack Technology Solutions",
  description:
    "Axen Technology offers AI solutions, web development, mobile apps, software engineering, cloud & DevOps, data analytics, and UI/UX design. Mumbai-based, globally delivered.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Globe, Smartphone, Code2, Cloud, BarChart3, Palette,
};

const industries = [
  "Healthcare & MedTech", "Fintech & Banking", "E-commerce & Retail",
  "Education & EdTech", "Real Estate & PropTech", "SaaS & Technology",
  "Logistics & Supply Chain", "Manufacturing", "Media & Entertainment", "Legal & LegalTech",
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-glow opacity-30" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="eyebrow mb-4">What We Build</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Full-Stack{" "}
              <span className="gradient-text">Digital Services</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Seven specialized services. One integrated team. All engineered to move your business from where it is to where it needs to be.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Brain;
              return (
                <StaggerItem key={service.id}>
                  <div className="group p-8 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover relative overflow-hidden">
                    {service.badge && (
                      <span className="absolute top-5 right-5 text-[10px] font-mono text-primary border border-primary/50 rounded px-1.5 py-0.5 animate-pulse-dot">
                        {service.badge}
                      </span>
                    )}
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {service.title}
                        </h2>
                        <p className="text-sm text-text-muted">{service.shortDescription}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.slice(0, 6).map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-xs text-text-muted">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>

                    <Link href={service.href}>
                      <Button variant="primary" size="sm" className="gap-1.5">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">Industry Expertise</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              We Know Your{" "}
              <span className="gradient-text">Industry</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <div className="px-5 py-3 rounded-full border border-glass-border bg-surface text-sm text-text-muted hover:border-primary/30 hover:text-white hover:bg-surface-2 transition-all duration-200 cursor-default">
                  {ind}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Not Sure Which Service{" "}
              <span className="gradient-text">You Need?</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-8">
              Tell us about your business challenge. We&apos;ll recommend the right service mix and give you a clear plan of attack.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" magnetic>
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
