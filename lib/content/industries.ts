import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    icon: "HeartPulse",
    description:
      "We build digital health platforms, AI-powered diagnostics, patient management systems, and telemedicine solutions that meet the unique compliance, security, and reliability standards healthcare demands.",
    services: ["AI Solutions", "Web Development", "Mobile Apps", "Software Development", "Data Analytics"],
    challenges: [
      "Regulatory compliance (HIPAA-equivalent for India)",
      "Interoperability between legacy hospital systems",
      "Patient data security and privacy",
      "24/7 availability requirements",
    ],
    solutions: [
      "AI triage and symptom assessment",
      "Electronic Health Record (EHR) platforms",
      "Telemedicine and remote monitoring apps",
      "Predictive patient outcome analytics",
    ],
    stats: [
      { label: "Healthcare Projects", value: "18+" },
      { label: "Patients Served", value: "250K+" },
    ],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    slug: "finance",
    icon: "Building2",
    description:
      "From RBI-compliant mobile banking apps to AI-driven fraud detection and algorithmic trading platforms, we build fintech products that hold up under the scrutiny of regulators, auditors, and millions of daily transactions.",
    services: ["AI Solutions", "Mobile Apps", "Software Development", "Data Analytics", "Cloud & DevOps"],
    challenges: [
      "RBI compliance and data localization",
      "Real-time fraud detection at scale",
      "Legacy core banking system integration",
      "Security posture for financial data",
    ],
    solutions: [
      "AI fraud detection and risk scoring",
      "Digital banking and payments apps",
      "Algorithmic trading platforms",
      "Financial analytics and reporting dashboards",
    ],
    stats: [
      { label: "Fintech Projects", value: "12+" },
      { label: "Transactions Processed", value: "₹500Cr+" },
    ],
  },
  {
    id: "education",
    name: "Education & EdTech",
    slug: "education",
    icon: "GraduationCap",
    description:
      "Adaptive learning platforms, student analytics, LMS implementations, and AI tutoring systems for educational institutions and EdTech startups targeting India's 250M+ student population.",
    services: ["AI Solutions", "Web Development", "Mobile Apps", "Data Analytics"],
    challenges: [
      "Multilingual content delivery",
      "Low-bandwidth optimization for tier-2/3 cities",
      "Engagement and retention at scale",
      "Assessment integrity and academic fraud prevention",
    ],
    solutions: [
      "AI-powered adaptive learning engines",
      "Video streaming optimized for Indian networks",
      "Student performance analytics",
      "Automated assessment and feedback",
    ],
    stats: [
      { label: "EdTech Projects", value: "9+" },
      { label: "Students Reached", value: "50K+" },
    ],
  },
  {
    id: "retail",
    name: "E-commerce & Retail",
    slug: "retail",
    icon: "ShoppingBag",
    description:
      "Headless commerce platforms, AI-powered recommendation engines, inventory automation, and mobile shopping experiences that convert at the aggressive performance standards Indian e-commerce demands.",
    services: ["Web Development", "Mobile Apps", "AI Solutions", "Data Analytics"],
    challenges: [
      "Peak traffic scalability (Diwali, Big Billion Days scale)",
      "Mobile-first experience for tier-2 markets",
      "Cart abandonment and conversion optimization",
      "Inventory and supply chain complexity",
    ],
    solutions: [
      "Headless commerce architecture",
      "AI product recommendations",
      "Real-time inventory management",
      "Conversion-optimized mobile shopping apps",
    ],
    stats: [
      { label: "E-commerce Projects", value: "22+" },
      { label: "GMV Processed", value: "₹1,000Cr+" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & PropTech",
    slug: "real-estate",
    icon: "Building",
    description:
      "Property listing platforms, virtual tour technology, AI-powered valuation models, and CRM systems for India's booming real estate market — from individual brokerages to RERA-compliant enterprise platforms.",
    services: ["Web Development", "Mobile Apps", "AI Solutions", "Data Analytics"],
    challenges: [
      "Trust and transparency in property transactions",
      "Complex search and filtering for property discovery",
      "RERA compliance documentation",
      "Virtual experiences for remote buyers",
    ],
    solutions: [
      "AI property valuation models",
      "Virtual tour and 3D visualization",
      "RERA-compliant documentation platforms",
      "CRM for property sales lifecycle",
    ],
    stats: [
      { label: "PropTech Projects", value: "7+" },
      { label: "Properties Listed", value: "100K+" },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    icon: "Factory",
    description:
      "Digital transformation for India's manufacturing sector — IoT data platforms, predictive maintenance AI, supply chain automation, and ERP systems that bring Industry 4.0 capabilities within reach of Indian manufacturers.",
    services: ["AI Solutions", "Software Development", "Data Analytics", "Cloud & DevOps"],
    challenges: [
      "Legacy equipment and OT/IT integration",
      "Predictive maintenance to reduce downtime",
      "Supply chain visibility and optimization",
      "Quality control automation",
    ],
    solutions: [
      "IoT sensor data platforms",
      "Predictive maintenance ML models",
      "Supply chain analytics dashboards",
      "Computer vision quality inspection",
    ],
    stats: [
      { label: "Manufacturing Projects", value: "8+" },
      { label: "Downtime Reduced", value: "35%" },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    slug: "logistics",
    icon: "Truck",
    description:
      "Route optimization, shipment tracking, warehouse management, and last-mile delivery automation for logistics companies navigating India's complex geography and diverse delivery infrastructure.",
    services: ["Software Development", "AI Solutions", "Mobile Apps", "Data Analytics"],
    challenges: [
      "Last-mile delivery complexity in Indian geography",
      "Real-time tracking across multiple carriers",
      "Demand forecasting and fleet optimization",
      "COD management and reconciliation",
    ],
    solutions: [
      "AI route optimization engines",
      "Real-time shipment tracking platforms",
      "Warehouse management systems",
      "Delivery partner apps",
    ],
    stats: [
      { label: "Logistics Projects", value: "10+" },
      { label: "Deliveries Optimized", value: "2M+" },
    ],
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    slug: "saas",
    icon: "Cpu",
    description:
      "We are the engineering partner for SaaS companies that need to move faster than their in-house team allows. From MVP development to enterprise-grade scaling, we've helped SaaS founders go from idea to revenue in 90 days.",
    services: ["Web Development", "Software Development", "Cloud & DevOps", "AI Solutions", "UI/UX Design"],
    challenges: [
      "Rapid MVP development without technical debt",
      "Scaling from pilot to enterprise without rewrites",
      "Multi-tenant architecture and data isolation",
      "Integration ecosystem development",
    ],
    solutions: [
      "SaaS architecture design and development",
      "Marketplace and API integration layers",
      "Enterprise SSO and security",
      "Usage metering and billing infrastructure",
    ],
    stats: [
      { label: "SaaS Products Built", value: "25+" },
      { label: "Fastest MVP", value: "6 weeks" },
    ],
  },
  {
    id: "media",
    name: "Media & Entertainment",
    slug: "media",
    icon: "Play",
    description:
      "Streaming platforms, content management systems, AI-driven content personalization, and creator economy tools for India's rapidly evolving media and entertainment landscape.",
    services: ["Web Development", "Mobile Apps", "AI Solutions", "Data Analytics"],
    challenges: [
      "High-quality video streaming on low-bandwidth connections",
      "Content personalization at scale",
      "Monetization model complexity (SVOD, AVOD, TVOD)",
      "Rights management and geo-blocking",
    ],
    solutions: [
      "Adaptive bitrate streaming platforms",
      "AI content recommendation engines",
      "Creator monetization platforms",
      "Content analytics and audience insights",
    ],
    stats: [
      { label: "Media Projects", value: "6+" },
      { label: "Content Served", value: "10M+ min/month" },
    ],
  },
  {
    id: "legal",
    name: "Legal & LegalTech",
    slug: "legal",
    icon: "Scale",
    description:
      "AI document review, contract management platforms, legal research assistants, and client intake systems that help Indian law firms and LegalTech startups deliver faster, more accurate legal services.",
    services: ["AI Solutions", "Web Development", "Software Development"],
    challenges: [
      "Accuracy requirements for legal document processing",
      "Bar Council of India compliance",
      "Multi-jurisdictional regulatory complexity",
      "Client confidentiality and data security",
    ],
    solutions: [
      "AI contract review and risk flagging",
      "Legal research AI assistants",
      "Matter management and billing platforms",
      "Court filing automation",
    ],
    stats: [
      { label: "LegalTech Projects", value: "4+" },
      { label: "Review Time Saved", value: "70%" },
    ],
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
