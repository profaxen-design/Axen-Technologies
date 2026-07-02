import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Mobile App Development — iOS & Android Apps, React Native & Flutter",
  description: "Cross-platform mobile app development for iOS and Android using React Native and Flutter. App Store-ready mobile apps delivered from Mumbai.",
};

export default function MobileAppsPage() {
  const service = getServiceBySlug("mobile-apps")!;
  return (
    <div className="pt-24">
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(204,0,0,0.12) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="eyebrow mb-4">{service.title}</div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Mobile Apps That Users{" "}<span className="gradient-text">Love & Return To</span>
              </h1>
              <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">{service.description}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"><Button variant="primary" size="lg" magnetic>Start Your App <ArrowRight className="w-4 h-4" /></Button></Link>
                <Link href="/portfolio"><Button variant="ghost" size="lg" className="border border-glass-border">See App Portfolio</Button></Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="mb-12"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Mobile Services Included</h2></ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {service.features.map((f) => (
              <StaggerItem key={f}><div className="p-5 rounded-xl border border-glass-border bg-surface flex items-start gap-3 hover:border-primary/25 transition-colors"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-text-muted">{f}</span></div></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="section-padding bg-surface/30">
        <div className="container max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Why Choose Axen For Mobile Development</h2></ScrollReveal>
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {service.benefits.map((b, i) => (
              <StaggerItem key={b}><div className="flex items-start gap-4 p-5 rounded-xl border border-glass-border bg-surface"><span className="text-2xl font-display font-bold text-primary/30 shrink-0" style={{ fontFamily: "Space Grotesk, sans-serif" }}>0{i + 1}</span><p className="text-text-muted pt-1 text-sm md:text-base">{b}</p></div></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="mb-10"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Technology Stack</h2></ScrollReveal>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-xl border border-glass-border bg-surface text-sm font-mono text-text-muted hover:border-primary/30 hover:text-white transition-all">{tech}</span>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-12"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>App Development Process</h2></ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {service.process.map(({ step, title, description }, i) => (
              <ScrollReveal key={step} delay={i * 0.07}><div className="group p-6 rounded-xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300"><div className="text-3xl font-display font-bold text-primary/20 mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>0{step}</div><h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3><p className="text-xs text-text-muted leading-relaxed">{description}</p></div></ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding text-center">
        <div className="container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Ready To Build Your <span className="gradient-text">Mobile App?</span></h2>
            <p className="text-text-muted mb-8">From concept to App Store in as little as 3 months. Let&apos;s scope your app together.</p>
            <Link href="/contact"><Button variant="primary" size="lg" magnetic>Get a Free Quote <ArrowRight className="w-4 h-4" /></Button></Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
