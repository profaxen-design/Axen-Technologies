"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Globe, Smartphone, Code2, Cloud, BarChart3, Palette,
  X, Menu, ChevronDown, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "AI Solutions", href: "/services/ai-solutions", icon: Brain, description: "ML, GenAI, chatbots & automation", badge: "HOT" },
  { label: "Web Development", href: "/services/web-development", icon: Globe, description: "High-performance web apps & platforms" },
  { label: "Mobile Apps", href: "/services/mobile-apps", icon: Smartphone, description: "iOS & Android apps, React Native & Flutter" },
  { label: "Software Development", href: "/services/software-development", icon: Code2, description: "Custom enterprise software & ERPs" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud, description: "AWS, Kubernetes, CI/CD pipelines" },
  { label: "Data Analytics", href: "/services/data-analytics", icon: BarChart3, description: "BI dashboards & data engineering" },
  { label: "UI/UX Design", href: "/services/ui-ux-design", icon: Palette, description: "Research-driven design systems" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[rgba(8,8,8,0.95)] backdrop-blur-xl border-b border-glass-border shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
        style={{ height: "72px" }}
      >
        <div className="container flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Axen Technology Home">
            <div className="relative w-9 h-9 rounded-lg border border-primary/60 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-glow-red-sm">
              <span className="text-lg font-display font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>A</span>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full" />
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-display font-bold tracking-[0.12em] text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                AXEN
              </div>
              <div className="text-[10px] text-text-muted tracking-[0.18em] uppercase -mt-0.5 leading-none">
                Technology
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative">
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-text-muted hover:text-white hover:bg-white/5"
                    )}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isServicesOpen && "rotate-180")} />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] glass rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="grid grid-cols-2 gap-1.5">
                          {serviceLinks.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                                data-cursor="View"
                              >
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-white">{service.label}</span>
                                    {service.badge && (
                                      <span className="text-[10px] font-mono font-medium text-primary border border-primary/40 rounded px-1 py-0.5 leading-none animate-pulse-dot">
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-text-muted mt-0.5 leading-snug">{service.description}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-3 pt-3 border-t border-glass-border">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary-bright transition-colors font-medium"
                          >
                            View all services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-primary"
                      : "text-text-muted hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="primary" size="sm" magnetic>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[rgba(8,8,8,0.97)] backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-surface border-l border-glass-border flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-lg text-text-muted hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  ...serviceLinks.map(s => ({ label: `  ${s.label}`, href: s.href, isChild: true })),
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Blog", href: "/blog" },
                  { label: "Careers", href: "/careers" },
                ].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 border-b border-glass-border/50 transition-colors",
                        (link as any).isChild
                          ? "pl-4 text-sm text-text-muted hover:text-white"
                          : "text-base font-medium text-white hover:text-primary"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    Contact Us →
                  </Button>
                </Link>
              </div>

              {/* Contact info */}
              <div className="mt-6 pt-6 border-t border-glass-border text-sm text-text-muted">
                <div>hello@axentechnology.in</div>
                <div className="mt-1">+91 22 4000 0000</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
