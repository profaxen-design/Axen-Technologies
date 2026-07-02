import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, ExternalLink } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { jobOpenings } from "@/lib/content/careers";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers — Join Axen Technology",
  description: "Build the future of technology with us. Open roles in AI/ML engineering, full-stack development, mobile, DevOps, design, and business development.",
};

const typeColors: Record<string, string> = {
  "full-time": "text-green-400 border-green-400/30 bg-green-400/10",
  "part-time": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "contract": "text-orange-400 border-orange-400/30 bg-orange-400/10",
  "remote": "text-purple-400 border-purple-400/30 bg-purple-400/10",
};

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-glow opacity-25" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="eyebrow mb-4">Join Our Team</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Build the{" "}
              <span className="gradient-text">Future of Technology</span>
              {" "}With Us
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              We hire exceptional people and give them hard problems to solve. If you want to build AI systems that actually work, web apps that actually scale, and products that actually matter — you&apos;ll fit in here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture values */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Why Engineers Choose Axen
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {[
              { title: "Real Problems", desc: "Every project is a genuinely hard problem for a real business — not internal tooling or maintenance work." },
              { title: "Learning Culture", desc: "₹50,000 annual learning budget per person. Conference tickets, courses, books — your growth is our investment." },
              { title: "Autonomy", desc: "You own your domain. We hire people smart enough to make good decisions and trust them to make them." },
              { title: "Impact Visible", desc: "You&apos;ll see the product you built go live, meet the users who use it, and see the metrics it moves." },
            ].map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div className="p-6 rounded-2xl border border-glass-border bg-surface h-full">
                  <h3 className="text-base font-display font-semibold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-surface/30">
        <div className="container">
          <ScrollReveal className="mb-12">
            <div className="eyebrow mb-4">Open Positions</div>
            <h2 className="text-3xl font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {jobOpenings.length} Roles Currently Open
            </h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-4" staggerDelay={0.07}>
            {jobOpenings.map((job) => (
              <StaggerItem key={job.id}>
                <div className="group p-6 md:p-8 rounded-2xl border border-glass-border bg-surface hover:border-primary/25 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{job.experience}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-xs font-mono rounded-full px-3 py-1 border ${typeColors[job.type] || "text-primary border-primary/40 bg-primary/10"}`}>
                        {job.type.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed mb-4">{job.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Key Responsibilities</div>
                    <ul className="space-y-1.5">
                      {job.responsibilities.slice(0, 4).map((r) => (
                        <li key={r} className="text-xs text-text-muted flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements tags */}
                  <div className="mb-5">
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Requirements</div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.requirements.slice(0, 4).map((r) => (
                        <span key={r} className="tag text-xs">{r.slice(0, 50)}{r.length > 50 ? "…" : ""}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                    <span className="text-xs text-text-muted">Posted {formatDate(job.postedAt)}</span>
                    <Link href={`/contact?role=${encodeURIComponent(job.title)}`}>
                      <Button variant="primary" size="sm" className="gap-1.5">
                        Apply Now <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* General application CTA */}
      <section className="section-padding text-center">
        <div className="container max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Don&apos;t See Your Role? <span className="gradient-text">Apply Anyway.</span>
            </h2>
            <p className="text-text-muted mb-8">We regularly hire for roles we haven&apos;t posted yet. If you&apos;re exceptional at what you do, we want to hear from you.</p>
            <Link href="mailto:careers@axentechnology.in">
              <Button variant="outline" size="lg">Send Us Your Resume <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
