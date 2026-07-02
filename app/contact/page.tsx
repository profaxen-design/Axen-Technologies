"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import {
  contactFormSchema,
  type ContactFormData,
  budgetOptions,
  serviceOptions,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = cn(
  "w-full bg-surface border border-glass-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted",
  "focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30",
  "transition-all duration-200"
);

const errorInputClass = "border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20";

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }
      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-glow opacity-40" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="eyebrow mb-4">Get In Touch</div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Let&apos;s Build The{" "}
              <span className="gradient-text">Future Together</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Tell us about your project. We&apos;ll review your brief and respond with a clear scope, realistic timeline, and a dedicated team — within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — takes 3 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="p-8 md:p-10 rounded-2xl border border-glass-border bg-surface">
                  <h2 className="text-2xl font-display font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Tell us about your project
                  </h2>
                  <p className="text-sm text-text-muted mb-8">
                    All fields marked <span className="text-primary">*</span> are required.
                  </p>

                  {submitState === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        Message received!
                      </h3>
                      <p className="text-text-muted text-sm mb-6">
                        We&apos;ll review your brief and get back to you within 24 hours. Check your inbox for a confirmation.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitState("idle")}>
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <FormField label="Full Name" error={errors.name?.message} required>
                          <input
                            {...register("name")}
                            type="text"
                            placeholder="Rajesh Sharma"
                            autoComplete="name"
                            className={cn(inputClass, errors.name && errorInputClass)}
                          />
                        </FormField>
                        <FormField label="Email Address" error={errors.email?.message} required>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="rajesh@company.com"
                            autoComplete="email"
                            className={cn(inputClass, errors.email && errorInputClass)}
                          />
                        </FormField>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <FormField label="Company / Organisation" error={errors.company?.message}>
                          <input
                            {...register("company")}
                            type="text"
                            placeholder="Acme Corp Pvt. Ltd."
                            autoComplete="organization"
                            className={cn(inputClass, errors.company && errorInputClass)}
                          />
                        </FormField>
                        <FormField label="Phone Number" error={errors.phone?.message}>
                          <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+91 98765 43210"
                            autoComplete="tel"
                            className={cn(inputClass, errors.phone && errorInputClass)}
                          />
                        </FormField>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <FormField label="Budget Range" error={errors.budget?.message}>
                          <select
                            {...register("budget")}
                            className={cn(inputClass, "cursor-pointer", errors.budget && errorInputClass)}
                          >
                            {budgetOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-surface">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </FormField>
                        <FormField label="Service Required" error={errors.service?.message}>
                          <select
                            {...register("service")}
                            className={cn(inputClass, "cursor-pointer", errors.service && errorInputClass)}
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-surface">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </FormField>
                      </div>

                      <FormField label="Project Description" error={errors.message?.message} required>
                        <textarea
                          {...register("message")}
                          rows={5}
                          placeholder="Tell us about your project — what you're building, the problem it solves, and any technical requirements or constraints..."
                          className={cn(inputClass, "resize-none", errors.message && errorInputClass)}
                        />
                      </FormField>

                      {submitState === "error" && (
                        <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-400" role="alert">
                          {errorMessage}
                        </div>
                      )}

                      <div className="mt-6">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          loading={submitState === "loading"}
                          className="w-full"
                          magnetic
                        >
                          Send Project Brief <ArrowRight className="w-4 h-4" />
                        </Button>
                        <p className="text-xs text-text-muted text-center mt-3">
                          By submitting, you agree to our{" "}
                          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                          We never share your data.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info — takes 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <ScrollReveal delay={0.1}>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Contact details
                  </h2>
                  <div className="space-y-5">
                    {[
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+91 22 4000 0000",
                        href: "tel:+912240000000",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        value: "hello@axentechnology.in",
                        href: "mailto:hello@axentechnology.in",
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Mumbai, Maharashtra, India 400001",
                        href: undefined,
                      },
                      {
                        icon: Clock,
                        label: "Response Time",
                        value: "Within 24 hours, guaranteed",
                        href: undefined,
                      },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4 p-4 rounded-xl border border-glass-border bg-surface">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-text-muted mb-0.5">{label}</div>
                          {href ? (
                            <a href={href} className="text-sm font-medium text-white hover:text-primary transition-colors">
                              {value}
                            </a>
                          ) : (
                            <div className="text-sm font-medium text-white">{value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What happens next */}
              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                  <h3 className="text-base font-display font-semibold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    What happens next?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: "We review your brief and assign a project lead within 24 hours." },
                      { step: "02", text: "A 30-minute discovery call to understand your goals, constraints, and timeline." },
                      { step: "03", text: "You receive a detailed proposal with fixed scope, pricing, and delivery plan." },
                    ].map(({ step, text }) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="text-xs font-mono text-primary shrink-0 mt-0.5">{step}</span>
                        <p className="text-sm text-text-muted leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
