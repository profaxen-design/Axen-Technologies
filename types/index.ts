// ─── Author ────────────────────────────────────────────────────────────────────
export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

// ─── Team Member ───────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  expertise: string[];
}

// ─── Service ───────────────────────────────────────────────────────────────────
export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  badge?: string;
  features: string[];
  benefits: string[];
  techStack: string[];
  process: ServiceProcess[];
  industries: string[];
  href: string;
}

// ─── Portfolio ─────────────────────────────────────────────────────────────────
export type PortfolioCategory =
  | "all"
  | "ai"
  | "web"
  | "mobile"
  | "automation"
  | "data";

export interface ImpactMetric {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: Exclude<PortfolioCategory, "all">;
  client: string;
  clientIndustry: string;
  duration: string;
  year: number;
  tags: string[];
  techStack: string[];
  result: string;
  resultMetric: string;
  coverImage: string;
  images?: string[];
  challenge: string;
  solution: string;
  impact: ImpactMetric[];
  testimonial?: Testimonial & { id?: string };
  featured: boolean;
}

// ─── Blog ──────────────────────────────────────────────────────────────────────
export type BlogCategory =
  | "ai"
  | "software-development"
  | "automation"
  | "tech-trends"
  | "business-growth";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: BlogCategory;
  tags: string[];
  readTime: number;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  featured: boolean;
}

// ─── Industry ──────────────────────────────────────────────────────────────────
export interface IndustryStat {
  label: string;
  value: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  stats?: IndustryStat[];
  caseStudySlug?: string;
}

// ─── Careers ───────────────────────────────────────────────────────────────────
export type JobType = "full-time" | "part-time" | "contract" | "remote";

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits?: string[];
  salaryRange?: string;
  postedAt: string;
}

// ─── Testimonial (Homepage) ────────────────────────────────────────────────────
export interface TestimonialCard {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  service: string;
}
