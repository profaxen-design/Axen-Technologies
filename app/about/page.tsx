import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { teamMembers, testimonials } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Values",
  description: "Axen Technology was founded on the conviction that ambitious Indian businesses deserve world-class technology partners. Learn about our story, team, and values.",
};

const values = [
  { title: "Excellence", desc: "Good enough is never good enough. Every line of code, every design decision is held to the same bar." },
  { title: "Innovation", desc: "We adopt emerging technology when it delivers genuine value — not because it's trendy." },
  { title: "Client First", desc: "Your success is our metric. We measure ourselves by the results we deliver, not the hours we bill." },
  { title: "Integrity", desc: "We tell you what's achievable, not what you want to hear. Honest scopes. Honest timelines. No surprises." },
  { title: "Speed", desc: "The best solution delivered too late isn't the best solution. We move with urgency and precision." },
  { title: "Global Thinking", desc: "Mumbai-based, globally minded. We build to the standards that compete on the world stage." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(204,0,0,0.12) 0%, transparent 60%)" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="eyebrow mb-4">About Axen</div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                We Build{" "}
                <span className="gradient-text">Digital Futures</span>
              </h1>
              <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-3xl">
                Axen Technology was founded on a simple conviction: ambitious Indian businesses deserve world-class technology partners without the world-class agency markup. Five years and 150+ projects later, that conviction hasn&apos;t changed.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Our Story
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    In 2020, our founder Rohan Axen walked away from a comfortable product role at a Mumbai unicorn to start Axen Technology with a single laptop, a clear thesis, and a deep frustration.
                  </p>
                  <p>
                    The frustration: Indian businesses were being served technology solutions built for Western markets, by firms that didn&apos;t understand the specific constraints of scaling in India — the multilingual requirements, the infrastructure realities, the regulatory landscape, the talent pool economics.
                  </p>
                  <p>
                    The thesis: a small, elite team of engineers and designers who combined enterprise-grade technical chops with genuine understanding of the Indian market could deliver better outcomes than any generic agency — and do it at a price that made business sense.
                  </p>
                  <p>
                    150+ delivered projects, 50+ satisfied clients, and a team of 25+ specialists later — that thesis is proven.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Years in business" },
                  { value: "150+", label: "Projects delivered" },
                  { value: "50+", label: "Clients served" },
                  { value: "25+", label: "Team specialists" },
                  { value: "12+", label: "Industries served" },
                  { value: "98%", label: "Client satisfaction" },
                ].map(({ value, label }) => (
                  <div key={label} className="p-6 rounded-2xl border border-glass-border bg-surface text-center hover:border-primary/20 transition-colors">
                    <div className="text-3xl font-display font-bold text-primary mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{value}</div>
                    <div className="text-sm text-text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 h-full">
                <div className="eyebrow mb-4">Our Mission</div>
                <h2 className="text-2xl font-display font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Making World-Class Technology Accessible
                </h2>
                <p className="text-text-muted leading-relaxed">
                  To be the technology partner that ambitious businesses — from seed-stage startups to established enterprises — choose when the stakes are too high for average. We do this by combining elite engineering talent, a genuine product mindset, and an obsession with business outcomes over technical elegance.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl border border-glass-border bg-surface h-full">
                <div className="eyebrow mb-4">Our Vision</div>
                <h2 className="text-2xl font-display font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Building India&apos;s Technology Future
                </h2>
                <p className="text-text-muted leading-relaxed">
                  To be the firm that built the technology infrastructure of India&apos;s next generation of globally competitive businesses — known not for our logo on pitch decks, but for the measurable business outcomes we delivered for every client we worked with.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">What We Stand For</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Six Values That Drive{" "}
              <span className="gradient-text">Every Decision</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {values.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div className="group p-6 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="text-base font-display font-semibold text-white group-hover:text-primary transition-colors" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">The Team</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              The People Behind{" "}
              <span className="gradient-text">Your Project</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group p-6 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary-dark/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:border-primary transition-colors">
                    <span className="text-2xl font-display font-bold text-primary" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-semibold text-white mb-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{member.name}</h3>
                  <div className="text-sm text-primary mb-3">{member.role}</div>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-3">{member.bio}</p>
                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                    {member.expertise.slice(0, 2).map((exp) => (
                      <span key={exp} className="tag text-xs">{exp}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal className="text-center mt-10">
            <p className="text-text-muted text-sm mb-4">Plus 20+ engineers, designers, and AI specialists</p>
            <Link href="/careers">
              <Button variant="outline" size="md">Join Our Team <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="text-4xl md:text-5xl mb-6">💡</div>
            <blockquote className="text-xl md:text-2xl font-display font-medium text-white leading-relaxed mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              &ldquo;The best technology solution is not the most sophisticated one. It&apos;s the one that solves the right problem, ships on time, and can be maintained by the team that inherits it. Everything else is ego.&rdquo;
            </blockquote>
            <div className="text-sm text-text-muted">— Rishi Kapoor, CTO, Axen Technology</div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface/30">
        <div className="container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Work With a Team That{" "}
              <span className="gradient-text">Gets It Done</span>
            </h2>
            <p className="text-text-muted mb-8">Let&apos;s talk about your project. No sales pitch, just an honest conversation about what we can build together.</p>
            <Link href="/contact">
              <Button variant="primary" size="lg" magnetic>Get In Touch <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
