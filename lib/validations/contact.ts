import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Please enter a valid name"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  company: z.string().max(100, "Company name must be under 100 characters").optional(),
  phone: z
    .string()
    .regex(
      /^(\+91[\s-]?)?([6-9]\d{9})$/,
      "Please enter a valid Indian mobile number"
    )
    .optional()
    .or(z.literal("")),
  budget: z
    .enum([
      "",
      "under-5L",
      "5L-15L",
      "15L-50L",
      "50L-1Cr",
      "above-1Cr",
      "not-sure",
    ])
    .optional(),
  service: z
    .enum([
      "",
      "ai-solutions",
      "web-development",
      "mobile-apps",
      "software-development",
      "cloud-devops",
      "data-analytics",
      "ui-ux-design",
      "other",
    ])
    .optional(),
  message: z
    .string()
    .min(20, "Please tell us a bit more about your project (at least 20 characters)")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export const budgetOptions = [
  { value: "", label: "Select your budget range" },
  { value: "under-5L", label: "Under ₹5 Lakhs" },
  { value: "5L-15L", label: "₹5 – ₹15 Lakhs" },
  { value: "15L-50L", label: "₹15 – ₹50 Lakhs" },
  { value: "50L-1Cr", label: "₹50 Lakhs – ₹1 Crore" },
  { value: "above-1Cr", label: "Above ₹1 Crore" },
  { value: "not-sure", label: "Not sure yet" },
];

export const serviceOptions = [
  { value: "", label: "Which service are you interested in?" },
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-apps", label: "Mobile App Development" },
  { value: "software-development", label: "Software Development" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "other", label: "Something else" },
];
