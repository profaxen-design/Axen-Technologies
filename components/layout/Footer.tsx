import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Linkedin, Twitter, Instagram, Github } from "@/components/ui/Icons";

const footerServices = [
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Data Analytics", href: "/services/data-analytics" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Industries", href: "/industries" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/axen-technology", icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com/axentechnology", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/axentechnology", icon: Instagram },
  { label: "GitHub", href: "https://github.com/axen-technology", icon: Github },
  { label: "Email", href: "mailto:hello@axentechnology.in", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-surface overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom center, rgba(204,0,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Main footer content */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-9 h-9 rounded-lg border border-primary/60 flex items-center justify-center relative">
                <span className="text-lg font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>A</span>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <div className="text-base font-display font-bold tracking-[0.12em] text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>AXEN</div>
                <div className="text-[10px] text-text-muted tracking-[0.18em] uppercase -mt-0.5">Technology</div>
              </div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-xs">
              The technology partner ambitious businesses choose when they need solutions built for scale, powered by intelligence, and delivered with precision.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a href="tel:+912240000000" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors group">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>+91 22 4000 0000</span>
              </a>
              <a href="mailto:hello@axentechnology.in" className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>hello@axentechnology.in</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-text-muted">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-display font-semibold text-white mb-5 tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white transition-colors animated-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-display font-semibold text-white mb-5 tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white transition-colors animated-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="text-sm font-display font-semibold text-white mb-5 tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Connect
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-glass-border flex items-center justify-center text-text-muted hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  data-cursor=""
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="p-4 rounded-xl border border-glass-border bg-surface-2">
              <p className="text-xs text-text-muted mb-3">Get our weekly tech insights newsletter</p>
              <Link
                href="/blog#newsletter"
                className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary-bright transition-colors"
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-glass-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Axen Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-text-muted hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
