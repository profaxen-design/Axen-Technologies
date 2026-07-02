"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Brain, Globe, Smartphone, Code2, Cloud, BarChart3, Palette,
  Zap, CheckCircle2, Star, TrendingUp, Users, Award, Cpu
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { useCountUp, useIntersectionObserver } from "@/hooks/useCountUp";
import { services } from "@/lib/content/services";
import { portfolioItems } from "@/lib/content/portfolio";
import { testimonials } from "@/lib/content/team";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

// ─── Animated Hero Background (Canvas particles) ────────────────────────────
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Nodes
    const N = 60;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const MAX_DIST = 150;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(204, 0, 0, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(204, 0, 0, 0.3)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
}

// ─── Stat Counter Card ────────────────────────────────────────────────────────
function StatCounterCard({
  end, suffix = "", prefix = "", label, delay = 0
}: {
  end: number; suffix?: string; prefix?: string; label: string; delay?: number;
}) {
  const [ref, isVisible] = useIntersectionObserver(0.5);
  const value = useCountUp({ end, suffix, prefix, duration: 2200 }, isVisible);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          {value}
        </div>
        <div className="text-sm text-text-muted">{label}</div>
      </motion.div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({
  icon: Icon, title, description, href, badge
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative p-6 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 hover:bg-surface-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col"
      data-cursor="View"
    >
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-mono font-medium text-primary border border-primary/50 rounded px-1.5 py-0.5 animate-pulse-dot">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1.5 mt-4 text-sm text-primary font-medium">
        Learn more
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
      {/* Bottom border reveal on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}

// ─── Testimonial Card ────────────────────────────────────────────────────────
function TestimonialCard({ quote, author, role, company, avatar, rating }: {
  quote: string; author: string; role: string; company: string; avatar: string; rating: number;
}) {
  return (
    <div className="p-6 md:p-8 rounded-2xl border border-glass-border bg-surface hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-sm md:text-base text-text-muted leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-surface-2 border border-glass-border overflow-hidden flex items-center justify-center shrink-0">
          <span className="text-lg font-bold text-primary">{author[0]}</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{author}</div>
          <div className="text-xs text-text-muted">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Process Step ─────────────────────────────────────────────────────────────
const processSteps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your business, goals, and technical landscape." },
  { num: "02", title: "Strategy", desc: "Define the solution architecture, scope, and success metrics." },
  { num: "03", title: "Design", desc: "High-fidelity designs and prototypes validated before development." },
  { num: "04", title: "Development", desc: "Agile sprints with continuous integration and weekly demos." },
  { num: "05", title: "Testing", desc: "Performance, security, and cross-platform QA before launch." },
  { num: "06", title: "Launch", desc: "Zero-downtime deployment with monitoring and post-launch support." },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────
const techCategories = [
  { label: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", techs: ["Node.js", "Python", "FastAPI", "GraphQL"] },
  { label: "Database", techs: ["MongoDB", "PostgreSQL", "Redis", "Supabase"] },
  { label: "AI & ML", techs: ["GPT-4", "TensorFlow", "LangChain", "HuggingFace"] },
  { label: "Cloud & DevOps", techs: ["AWS", "Docker", "Kubernetes", "Vercel"] },
  { label: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
];

// ─── Service Icons Map ────────────────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Globe, Smartphone, Code2, Cloud, BarChart3, Palette,
};

// ═══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      {/* ─── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18">
        {/* Background canvas animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0505] to-[#080808]">
          <HeroCanvas />
          {/* Red radial glow */}
          <div className="absolute inset-0 bg-red-glow opacity-40" />
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/8 text-sm text-primary font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse-dot" />
              Next-Generation Technology Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Building{" "}
              <span className="gradient-text">Intelligent</span>
              <br className="hidden sm:block" /> Digital Solutions{" "}
              <br className="hidden md:block" />
              For{" "}
              <span className="text-white">Future Businesses</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Axen Technology creates AI-powered solutions, software platforms, and digital experiences
              that transform how businesses operate, scale, and compete.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" magnetic className="px-8 py-4 text-base shadow-glow-red-sm">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg" className="border border-glass-border hover:border-white/20">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Floating stat cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, label: "Projects Delivered", value: "150+" },
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: Award, label: "Client Satisfaction", value: "98%" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "glass rounded-2xl p-5 flex items-center gap-4",
                  `animate-float-${i + 1}`
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{value}</div>
                  <div className="text-xs text-text-muted">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: STATS BAR ─────────────────────────────────────────── */}
      <section className="border-y border-glass-border bg-surface relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(204,0,0,0.05) 0%, transparent 70%)" }} />
        <div className="container relative z-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            <StatCounterCard end={150} suffix="+" label="Projects Completed" delay={0} />
            <StatCounterCard end={50} suffix="+" label="Happy Clients" delay={0.08} />
            <StatCounterCard end={20} suffix="+" label="Technologies Used" delay={0.16} />
            <StatCounterCard end={12} suffix="+" label="Industries Served" delay={0.24} />
            <StatCounterCard end={98} suffix="%" label="Client Satisfaction" delay={0.32} />
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: SERVICES SHOWCASE ────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">What We Build</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Full-Spectrum{" "}
              <span className="gradient-text">Technology Services</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg">
              From AI systems to polished mobile apps — every service we offer is engineered to move your business forward measurably.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            staggerDelay={0.08}
          >
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  icon={iconMap[service.icon] || Brain}
                  title={service.shortTitle}
                  description={service.shortDescription}
                  href={service.href}
                  badge={service.badge}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="md" className="gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 4: TECHNOLOGY TICKER ────────────────────────────────── */}
      <section className="py-6 border-y border-glass-border overflow-hidden bg-surface/50">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
            {[
              "Artificial Intelligence",
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "Data Analytics",
              "AI Chatbots",
              "Business Automation",
              "Cloud & DevOps",
              "Machine Learning",
              "React Native",
              "Next.js",
              "Python",
            ].map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-sm md:text-base font-medium text-text-muted px-8 hover:text-white transition-colors cursor-default">
                  {item}
                </span>
                <span className="text-primary text-xs" aria-hidden="true">●</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "Artificial Intelligence",
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "Data Analytics",
              "AI Chatbots",
              "Business Automation",
              "Cloud & DevOps",
              "Machine Learning",
              "React Native",
              "Next.js",
              "Python",
            ].map((item, i) => (
              <span key={`dup-${i}`} className="flex items-center" aria-hidden="true">
                <span className="text-sm md:text-base font-medium text-text-muted px-8">
                  {item}
                </span>
                <span className="text-primary text-xs">●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: AI INNOVATION SPOTLIGHT ─────────────────────────── */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div>
              <ScrollReveal>
                <div className="eyebrow mb-4">AI-Powered Future</div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Transform Your Business With{" "}
                  <span className="gradient-text">Artificial Intelligence</span>
                </h2>
                <p className="text-text-muted text-base md:text-lg mb-8 leading-relaxed">
                  AI is no longer a competitive differentiator — it's table stakes. We build production-ready AI systems that integrate with your existing workflows and deliver measurable ROI, not just impressive demos.
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-4 mb-10" staggerDelay={0.08}>
                {[
                  "Generative AI & LLM Applications",
                  "Predictive Analytics & Business Intelligence",
                  "AI Chatbots & Virtual Assistants",
                  "Business Process Automation",
                  "Computer Vision & Document AI",
                ].map((feature) => (
                  <StaggerItem key={feature}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm md:text-base text-text-muted">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal delay={0.4}>
                <Link href="/services/ai-solutions">
                  <Button variant="primary" size="lg" magnetic>
                    Explore AI Solutions <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

            {/* Right: AI Visual */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Neural network visual */}
                <div className="relative rounded-3xl border border-glass-border bg-surface overflow-hidden p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-sm font-mono font-medium text-white">axen_ai_engine</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-mono text-green-400">ACTIVE</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "Accuracy", value: "98.7%", color: "text-green-400" },
                      { label: "Response", value: "12ms", color: "text-blue-400" },
                      { label: "Models", value: "24", color: "text-primary" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="text-center p-3 rounded-xl bg-surface-2">
                        <div className={`text-xl font-display font-bold ${color}`} style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {value}
                        </div>
                        <div className="text-xs text-text-muted mt-1">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                    {[
                      { label: "Model Training", progress: 87, color: "bg-primary" },
                      { label: "Data Processing", progress: 94, color: "bg-blue-500" },
                      { label: "Inference Speed", progress: 78, color: "bg-green-500" },
                    ].map(({ label, progress, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs text-text-muted mb-1.5">
                          <span>{label}</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Red glow */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ boxShadow: "inset 0 0 60px rgba(204,0,0,0.05)" }} />
                </div>

                {/* Floating label */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 border border-glass-border">
                  <div className="text-xs text-text-muted">Average ROI</div>
                  <div className="text-lg font-display font-bold text-primary" style={{ fontFamily: "Space Grotesk, sans-serif" }}>3.2× in Year 1</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHY CHOOSE AXEN ──────────────────────────────────── */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">Why Axen</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Built Different. Delivered{" "}
              <span className="gradient-text">Better.</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                icon: Zap,
                title: "Innovation First",
                desc: "We stay at the bleeding edge of AI and engineering so you don't have to. Every project leverages the latest tools — applied with engineering rigour, not hype.",
              },
              {
                icon: Cpu,
                title: "Custom Approach",
                desc: "No templates, no out-of-the-box SaaS reskins. Every solution is architected from scratch around your specific business logic, constraints, and growth trajectory.",
              },
              {
                icon: TrendingUp,
                title: "Scalable Development",
                desc: "We design for your current state and your next 10x. The systems we build grow with your business — without expensive rewrites at the first sign of traction.",
              },
              {
                icon: Users,
                title: "User-Centered Design",
                desc: "Technology that users don't adopt is worthless technology. Every interface we design is validated against real user behavior before a single line of production code is written.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="group p-8 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">{desc}</p>
                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SECTION 7: DEVELOPMENT PROCESS ──────────────────────────────── */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">How We Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              A Process Engineered{" "}
              <span className="gradient-text">For Zero Surprises</span>
            </h2>
          </ScrollReveal>

          {/* Process steps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className="group text-center relative">
                  {/* Node */}
                  <div className="w-16 h-16 rounded-full border-2 border-glass-border bg-surface flex items-center justify-center mx-auto mb-4 group-hover:border-primary group-hover:bg-primary group-hover:shadow-glow-red-sm transition-all duration-300 relative z-10">
                    <span className="text-sm font-mono font-bold text-text-muted group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-sm font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: TECHNOLOGY STACK ─────────────────────────────────── */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">Tech Stack</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Enterprise-Grade Technologies,{" "}
              <span className="gradient-text">Expertly Applied</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-5" staggerDelay={0.07}>
            {techCategories.map(({ label, techs }) => (
              <StaggerItem key={label}>
                <div className="p-5 rounded-2xl border border-glass-border bg-surface hover:border-primary/20 transition-all duration-300">
                  <div className="text-xs font-mono text-primary mb-3 uppercase tracking-widest">{label}</div>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SECTION 9: PORTFOLIO PREVIEW ────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="eyebrow mb-4">Our Work</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Results That <span className="gradient-text">Speak</span>
              </h2>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="border border-glass-border hover:border-white/20 shrink-0">
                View all projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {portfolioItems.filter(p => p.featured).map((project) => (
              <StaggerItem key={project.id}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block rounded-2xl border border-glass-border bg-surface overflow-hidden hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  data-cursor="View"
                >
                  {/* Project image placeholder */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #1a0505 0%, #0d0808 50%, #160a0a 100%)" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-primary/20" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        {project.title[0]}
                      </span>
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-mono text-primary border border-primary/40 rounded px-2 py-1 bg-primary/10 backdrop-blur-sm uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Key result */}
                    <div className="p-3 rounded-xl bg-surface-2 mb-4">
                      <div className="text-xs text-text-muted mb-1">Key Result</div>
                      <div className="text-sm font-semibold text-primary">{project.result}</div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SECTION 10: TESTIMONIALS ────────────────────────────────────── */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">Client Stories</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Don't Take Our Word{" "}
              <span className="gradient-text">For It</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard {...t} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SECTION 11: FINAL CTA ───────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(204,0,0,0.12) 0%, rgba(8,8,8,0) 70%)" }}
        />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-6">Ready to start?</div>
              <h2
                className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Ready To Build Something{" "}
                <span className="gradient-text">Extraordinary?</span>
              </h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                Tell us about your project. We'll come back with a clear scope, realistic timeline, and a team that can actually deliver it.
              </p>
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  magnetic
                  className="text-lg px-10 py-5 shadow-glow-red animate-pulse-glow"
                >
                  Talk To Axen <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <p className="mt-5 text-xs text-text-muted">
                Response within 24 hours · No obligation consultation · Mumbai HQ, serving clients globally
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
