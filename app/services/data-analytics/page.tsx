import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/lib/content/services";
export const metadata: Metadata = { title: "Data Analytics — Business Intelligence, Real-Time Dashboards & Data Engineering", description: "Business intelligence platforms, data warehouse design, ETL pipelines, and real-time analytics. Turn raw data into actionable revenue insights." };
export default function DataAnalyticsPage() {
  const service = getServiceBySlug("data-analytics")!;
  return (
    <div className="pt-24">
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(204,0,0,0.12) 0%, transparent 60%)" }} />
        <div className="container relative z-10"><div className="max-w-4xl">
          <ScrollReveal><div className="eyebrow mb-4">{service.title}</div><h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Your Data Already Has{" "}<span className="gradient-text">The Answers</span></h1><p className="text-base md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">{service.description}</p></ScrollReveal>
          <ScrollReveal delay={0.2}><div className="flex flex-wrap gap-4"><Link href="/contact"><Button variant="primary" size="lg" magnetic>Start a Data Project <ArrowRight className="w-4 h-4" /></Button></Link></div></ScrollReveal>
        </div></div>
      </section>
      <section className="section-padding"><div className="container"><ScrollReveal className="mb-12"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Analytics Services</h2></ScrollReveal><StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>{service.features.map((f) => (<StaggerItem key={f}><div className="p-5 rounded-xl border border-glass-border bg-surface flex items-start gap-3 hover:border-primary/25 transition-colors"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-text-muted">{f}</span></div></StaggerItem>))}</StaggerContainer></div></section>
      <section className="section-padding bg-surface/30"><div className="container max-w-4xl mx-auto"><ScrollReveal className="text-center mb-12"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>What Data Analytics Delivers</h2></ScrollReveal><StaggerContainer className="space-y-4" staggerDelay={0.08}>{service.benefits.map((b, i) => (<StaggerItem key={b}><div className="flex items-start gap-4 p-5 rounded-xl border border-glass-border bg-surface"><span className="text-2xl font-display font-bold text-primary/30 shrink-0" style={{ fontFamily: "Space Grotesk, sans-serif" }}>0{i + 1}</span><p className="text-text-muted pt-1 text-sm md:text-base">{b}</p></div></StaggerItem>))}</StaggerContainer></div></section>
      <section className="section-padding"><div className="container"><ScrollReveal className="mb-10"><h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Data Stack</h2></ScrollReveal><div className="flex flex-wrap gap-2.5">{service.techStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-xl border border-glass-border bg-surface text-sm font-mono text-text-muted hover:border-primary/30 hover:text-white transition-all">{tech}</span>))}</div></div></section>
      <section className="section-padding text-center"><div className="container max-w-2xl mx-auto"><ScrollReveal><h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Stop Flying <span className="gradient-text">Blind</span></h2><p className="text-text-muted mb-8">Get a free data audit. We&apos;ll show you exactly what insights you&apos;re missing and how to unlock them.</p><Link href="/contact"><Button variant="primary" size="lg" magnetic>Get a Free Data Audit <ArrowRight className="w-4 h-4" /></Button></Link></ScrollReveal></div></section>
    </div>
  );
}
