import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Brain, ChevronDown } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "AI Solutions — Machine Learning, Generative AI & Automation",
  description:
    "Custom AI solutions including generative AI, ML models, AI chatbots, predictive analytics, and business automation. Mumbai-based AI development company.",
  keywords: ["AI solutions India", "machine learning development", "generative AI", "AI chatbot development", "LLM fine-tuning"],
};

const aiServices = [
  {
    title: "AI Consulting & Strategy",
    desc: "Identify the highest-ROI AI opportunity in your business, define the roadmap, and build the internal capability to sustain it.",
    details: ["AI readiness assessment", "Use case prioritisation", "Data strategy design", "Build vs. buy analysis"],
  },
  {
    title: "Generative AI Development",
    desc: "GPT-4, Claude, Gemini, and open-source LLM applications fine-tuned on your proprietary data and integrated with your existing workflows.",
    details: ["LLM fine-tuning", "RAG systems", "AI agents", "Prompt engineering"],
  },
  {
    title: "AI Chatbots & Assistants",
    desc: "Intelligent conversational AI that resolves 60–75% of customer queries without human intervention, in your users' language.",
    details: ["Multi-language support", "CRM integration", "Knowledge base RAG", "Escalation flows"],
  },
  {
    title: "Machine Learning Models",
    desc: "Custom ML models trained on your domain data — classification, regression, anomaly detection, recommendation systems.",
    details: ["Model training & evaluation", "Feature engineering", "MLOps pipelines", "Model monitoring"],
  },
  {
    title: "Business Process Automation",
    desc: "Automate repetitive, rule-based processes that drain your team's capacity — document processing, data entry, approval workflows.",
    details: ["RPA implementation", "Document AI", "Workflow automation", "System integration"],
  },
  {
    title: "Computer Vision",
    desc: "Visual AI that can inspect, classify, and analyze images and video streams at production scale — for manufacturing, retail, healthcare.",
    details: ["Quality inspection", "Object detection", "Facial recognition", "Video analytics"],
  },
];

const aiCapabilities = [
  "Predictive Analytics & Forecasting",
  "Recommendation Engines (collaborative + content-based filtering)",
  "Customer Support AI (multi-language, multi-channel)",
  "Document Intelligence & Extraction",
  "Business Intelligence & AI-powered dashboards",
  "Natural Language Processing & text analytics",
  "Sentiment analysis & social listening AI",
  "Fraud detection & anomaly detection",
];

const deliveryProcess = [
  { step: "01", title: "Data Assessment", desc: "Audit existing data assets, identify gaps, and define the AI opportunity with the highest measurable impact." },
  { step: "02", title: "Data Preparation", desc: "Clean, structure, and enrich your data. Quality in equals quality out — we don't skip this step." },
  { step: "03", title: "Model Development", desc: "Build and train custom models, or fine-tune state-of-the-art foundation models for your domain." },
  { step: "04", title: "Rigorous Testing", desc: "Validate accuracy, robustness, and bias resistance across real-world edge cases before production." },
  { step: "05", title: "Deployment", desc: "Deploy to cloud infrastructure with monitoring, auto-scaling, and zero-downtime rollouts." },
  { step: "06", title: "Optimization", desc: "Continuous model monitoring, retraining pipelines, and performance tuning as your data evolves." },
];

const faqs = [
  {
    q: "How much does an AI project cost?",
    a: "AI project costs vary significantly based on complexity. A focused chatbot implementation typically runs ₹5–25 lakhs. A custom ML model with full MLOps infrastructure ranges ₹20–75 lakhs. Enterprise AI platforms with multiple models and integrations start from ₹75 lakhs+. We provide fixed-price proposals after a discovery session.",
  },
  {
    q: "How long does an AI project take to deliver?",
    a: "A production-ready AI chatbot with RAG typically takes 10–14 weeks. A custom ML model (data-ready) takes 8–16 weeks from data assessment to deployment. We structure projects in phased deliveries so you see working software every 2 weeks, not after 6 months.",
  },
  {
    q: "What data do I need to get started?",
    a: "The answer depends on the application. For a customer support chatbot, you need 12–18 months of historical support tickets and your existing knowledge base. For a predictive model, you typically need 12–24 months of historical labeled data. We conduct a data assessment in the first 2 weeks to tell you exactly what you have and what you need.",
  },
  {
    q: "How do you integrate AI with our existing systems?",
    a: "We design every AI system around your existing technology stack, not the other way around. We build APIs that connect to your CRM, ERP, support platform, or custom software. Our integrations are built with reliability-first patterns — retry logic, monitoring, and graceful degradation so your operations never depend on a single point of failure.",
  },
  {
    q: "What kind of ongoing support do you provide?",
    a: "All AI deployments include 90 days of post-launch monitoring and support at no additional cost. Beyond that, we offer managed ML operations (MLOps) retainers that include model monitoring, drift detection, retraining, and performance reporting. AI systems are living products — they need active management to maintain accuracy as your data evolves.",
  },
];

export default function AISolutionsPage() {
  const service = getServiceBySlug("ai-solutions");

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(204,0,0,0.15) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-6">
                <div className="eyebrow">AI Solutions</div>
                <span className="text-[10px] font-mono text-primary border border-primary/50 rounded px-1.5 py-0.5 animate-pulse-dot">HOT</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Unlock The Power of{" "}
                <span className="gradient-text">Artificial Intelligence</span>
              </h1>
              <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-3xl mb-8">
                Axen builds production-ready AI systems that integrate with your existing workflows and deliver measurable ROI — not just impressive demos. From GPT-powered chatbots to custom ML models trained on your business data.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" magnetic>
                    Talk to Our AI Team <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="ghost" size="lg" className="border border-glass-border">
                    View AI Case Studies
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="mb-14">
            <div className="eyebrow mb-4">AI Services</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Six Ways AI Can Transform{" "}
              <span className="gradient-text">Your Business</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {aiServices.map(({ title, desc, details }) => (
              <StaggerItem key={title}>
                <div className="group p-6 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{desc}</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {details.map((d) => (
                      <div key={d} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        <span className="text-xs text-text-muted">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div className="eyebrow mb-4">Capabilities</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Full-Spectrum AI{" "}
                <span className="gradient-text">Capability Stack</span>
              </h2>
              <p className="text-text-muted mb-8 leading-relaxed">
                Every AI capability we build is designed for production reliability, not just impressive benchmarks. We engineer systems that hold up in the real world.
              </p>
              <div className="space-y-3">
                {aiCapabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">{cap}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* AI Visual panel */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative p-8 rounded-3xl border border-glass-border bg-surface overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm font-mono text-white">Axen AI Platform</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-green-400">LIVE</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Customer Support Resolution", value: "73%", color: "bg-primary" },
                    { label: "Document Processing Accuracy", value: "97.3%", color: "bg-blue-500" },
                    { label: "Prediction Model Accuracy", value: "94.8%", color: "bg-green-500" },
                    { label: "Automation Coverage", value: "84%", color: "bg-purple-500" },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs text-text-muted mb-1.5">
                        <span>{label}</span>
                        <span className="text-white">{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${color}`}
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(204,0,0,0.05)" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              AI Delivery That{" "}
              <span className="gradient-text">Doesn't Fail in Production</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            {deliveryProcess.map(({ step, title, desc }, i) => (
              <ScrollReveal key={step} delay={i * 0.07}>
                <div className="group text-center relative">
                  <div className="w-16 h-16 rounded-full border-2 border-glass-border bg-surface flex items-center justify-center mx-auto mb-4 group-hover:border-primary group-hover:bg-primary group-hover:shadow-glow-red-sm transition-all duration-300 relative z-10">
                    <span className="text-sm font-mono font-bold text-text-muted group-hover:text-white transition-colors">{step}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-10">
            <div className="eyebrow mb-4">Industries</div>
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              AI Across Every{" "}
              <span className="gradient-text">Industry</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
            {["Healthcare", "Finance & Banking", "Education & EdTech", "E-commerce & Retail", "Real Estate", "Logistics", "Manufacturing", "Legal"].map((ind) => (
              <StaggerItem key={ind}>
                <div className="px-5 py-2.5 rounded-full border border-glass-border bg-surface text-sm text-text-muted hover:border-primary/30 hover:text-white transition-all cursor-default">
                  {ind}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Common Questions About{" "}
              <span className="gradient-text">AI Projects</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="space-y-4" staggerDelay={0.07}>
            {faqs.map(({ q, a }) => (
              <StaggerItem key={q}>
                <details className="group border border-glass-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-surface transition-colors">
                    <span className="text-base font-semibold text-white pr-4">{q}</span>
                    <ChevronDown className="w-5 h-5 text-text-muted shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed">
                    {a}
                  </div>
                </details>
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
              Ready To Put{" "}
              <span className="gradient-text">AI To Work?</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-8">
              Book a 30-minute discovery call. We&apos;ll assess your data, identify your best AI opportunity, and give you a realistic implementation plan.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" magnetic>
                Talk to Our AI Team <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
