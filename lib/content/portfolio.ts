import type { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "medisync-ai-healthcare-platform",
    title: "MediSync AI Healthcare Platform",
    description:
      "A full-stack AI-powered healthcare management platform that reduced patient wait times by 67% and cut administrative overhead by 45% across a 12-clinic network in Maharashtra.",
    shortDescription:
      "AI healthcare platform that slashed wait times 67% across 12 clinics.",
    category: "ai",
    client: "MediSync Health Pvt. Ltd.",
    clientIndustry: "Healthcare",
    duration: "6 months",
    year: 2024,
    tags: ["AI", "Healthcare", "Machine Learning", "Web App"],
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI GPT-4", "PostgreSQL", "AWS", "TensorFlow"],
    result: "67% reduction in patient wait times",
    resultMetric: "67%",
    coverImage: "/images/portfolio/project-1.webp",
    images: ["/images/case-studies/medisync-1.webp", "/images/case-studies/medisync-2.webp"],
    challenge:
      "MediSync operated 12 clinics across Maharashtra with entirely manual appointment scheduling, patient triage, and record management. Doctors spent nearly 40% of their time on administrative tasks rather than patient care. No-show rates were 28%, double the industry benchmark, hemorrhaging ₹18 lakhs in lost revenue monthly.",
    solution:
      "We built an end-to-end AI healthcare platform with three core intelligence layers: a predictive no-show model that proactively re-schedules at-risk appointments, an NLP-driven triage assistant that pre-screens symptoms and routes patients to the right specialist, and an automated billing reconciliation engine. The entire system integrates with existing EMR workflows — zero disruption to clinical staff.",
    impact: [
      { label: "Wait Time Reduction", value: "67", suffix: "%", description: "Average patient waiting time" },
      { label: "Admin Cost Saved", value: "45", suffix: "%", description: "Administrative overhead" },
      { label: "Revenue Recovered", value: "₹18L", description: "Monthly revenue from no-show reduction" },
      { label: "Clinics Live", value: "12", description: "Simultaneously deployed" },
    ],
    testimonial: {
      quote:
        "Axen didn't just build software — they rebuilt how we operate. Our doctors spend 40% more time with patients now. That's the metric that matters most to us.",
      author: "Dr. Vikram Nair",
      role: "CEO",
      company: "MediSync Health Pvt. Ltd.",
      avatar: "/images/avatars/testimonial-4.webp",
    },
    featured: true,
  },
  {
    id: "2",
    slug: "shopnow-ecommerce-transformation",
    title: "ShopNow E-Commerce Transformation",
    description:
      "Complete re-platform of India's fastest-growing D2C fashion brand from a legacy monolith to a headless Next.js + microservices architecture, resulting in 340% improvement in page load speed and 89% increase in mobile conversion rate.",
    shortDescription:
      "Headless re-platform boosted mobile conversions 89% for D2C fashion brand.",
    category: "web",
    client: "ShopNow India",
    clientIndustry: "E-commerce & Retail",
    duration: "4 months",
    year: 2024,
    tags: ["E-commerce", "Next.js", "Headless", "Performance"],
    techStack: ["Next.js", "TypeScript", "Shopify Storefront API", "Node.js", "Redis", "Vercel", "Stripe"],
    result: "89% increase in mobile conversion rate",
    resultMetric: "89%",
    coverImage: "/images/portfolio/project-2.webp",
    images: ["/images/case-studies/shopnow-1.webp", "/images/case-studies/shopnow-2.webp"],
    challenge:
      "ShopNow's legacy WooCommerce store was collapsing under Tier-1 city traffic spikes. Page loads averaged 6.8 seconds on mobile — a conversion death sentence in India's mobile-first market. Flash sale events routinely crashed the site, causing an estimated ₹50L+ in lost revenue per event. Cart abandonment was 81%, nearly 15 points above the e-commerce average.",
    solution:
      "We re-architected ShopNow on a headless commerce stack: Next.js 14 App Router on the frontend with Shopify as the commerce engine behind a GraphQL API layer. We implemented aggressive ISR (Incremental Static Regeneration) for product pages, Redis-backed cart sessions, and edge-cached category pages. A custom analytics dashboard now shows real-time inventory, conversion funnels, and campaign performance in a single view.",
    impact: [
      { label: "Page Load Speed", value: "340", suffix: "%", description: "Performance improvement" },
      { label: "Mobile Conversion", value: "89", suffix: "%", description: "Conversion rate increase" },
      { label: "Cart Abandonment", value: "31", suffix: "%", description: "Reduction in cart abandonment" },
      { label: "Peak Traffic", value: "50K", suffix: "+", description: "Concurrent users handled" },
    ],
    testimonial: {
      quote:
        "Our last Diwali sale processed ₹2.4 crore in 6 hours without a single downtime incident. That has never happened before. Axen's architecture held where every previous solution failed us.",
      author: "Priya Patel",
      role: "Founder",
      company: "ShopNow India",
      avatar: "/images/avatars/testimonial-2.webp",
    },
    featured: true,
  },
  {
    id: "3",
    slug: "dataflow-analytics-platform",
    title: "DataFlow Real-Time Analytics Suite",
    description:
      "Enterprise business intelligence platform processing 50M+ events per day for a Mumbai-based SaaS company, replacing a 3-week reporting lag with real-time dashboards that leadership can act on immediately.",
    shortDescription:
      "Real-time BI platform turning 3-week reporting lags into instant insights.",
    category: "data",
    client: "DataFlow Analytics Pvt. Ltd.",
    clientIndustry: "SaaS / Analytics",
    duration: "5 months",
    year: 2023,
    tags: ["Data Analytics", "BI", "Real-Time", "Enterprise"],
    techStack: ["Apache Kafka", "Snowflake", "dbt", "Python", "Airflow", "Grafana", "BigQuery", "Tableau"],
    result: "50M+ events processed daily in real-time",
    resultMetric: "50M+",
    coverImage: "/images/portfolio/project-3.webp",
    images: ["/images/case-studies/dataflow-1.webp"],
    challenge:
      "DataFlow's leadership team was flying blind. Their 3-week reporting cycle meant strategic decisions were always based on last month's data. The engineering team was spending 60% of their time maintaining brittle ETL scripts rather than building product. Three different departments had three different definitions of 'active user', causing constant boardroom conflicts.",
    solution:
      "We designed a modern data stack from the ground up: Kafka for real-time event streaming, Snowflake as the central data warehouse, dbt for transformation logic and documentation, and Airflow for orchestration. We built role-specific dashboards in Tableau for C-suite, product, and marketing teams — each showing the metrics that matter for their decisions, with a shared semantic layer ensuring every team works from the same definitions.",
    impact: [
      { label: "Reporting Lag", value: "3 wks → Live", description: "Real-time vs. 3-week delay" },
      { label: "Events/Day", value: "50M+", description: "Daily event processing volume" },
      { label: "Engineering Hours Saved", value: "60", suffix: "%", description: "Time freed from ETL maintenance" },
      { label: "Time to Insight", value: "< 30s", description: "Dashboard query response time" },
    ],
    testimonial: {
      quote:
        "We used to argue about numbers in every leadership meeting. Now we all look at the same dashboard. Axen delivered this in 5 months when I thought it would take a year. Seriously impressive.",
      author: "Arjun Mehta",
      role: "CTO",
      company: "DataFlow Analytics",
      avatar: "/images/avatars/testimonial-3.webp",
    },
    featured: true,
  },
  {
    id: "4",
    slug: "finedge-mobile-banking-app",
    title: "FinEdge Mobile Banking App",
    description:
      "A fully RBI-compliant mobile banking app for a neo-bank startup, featuring biometric authentication, UPI integration, AI-driven spend analysis, and real-time fraud detection — shipped in 5 months and live on both App Store and Play Store.",
    shortDescription: "RBI-compliant neobank app with AI fraud detection, shipped in 5 months.",
    category: "mobile",
    client: "FinEdge Payments Pvt. Ltd.",
    clientIndustry: "Fintech",
    duration: "5 months",
    year: 2024,
    tags: ["Mobile", "Fintech", "AI", "React Native"],
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS", "OpenAI", "Razorpay", "Firebase"],
    result: "5-month delivery, 4.8★ App Store rating",
    resultMetric: "4.8★",
    coverImage: "/images/portfolio/project-4.webp",
    images: ["/images/case-studies/finedge-1.webp"],
    challenge:
      "FinEdge needed to launch a mobile banking product before their Series A close — a tight timeline in a heavily regulated industry. Previous development partners had estimated 12–18 months. The product needed biometric auth, UPI, real-time notifications, and an AI spend-analysis feature, all to RBI data localization standards.",
    solution:
      "We used React Native for a single codebase across iOS and Android, reducing timeline by ~40%. A modular architecture let us build and test compliance, auth, and payment features in parallel. The AI spend categorization engine was built on a fine-tuned classification model trained on Indian transaction descriptions. We worked directly with FinEdge's legal team on RBI compliance documentation throughout development.",
    impact: [
      { label: "Time to Market", value: "5 months", description: "vs. 12-18 month competitor quotes" },
      { label: "App Store Rating", value: "4.8", suffix: "★", description: "Average across iOS and Android" },
      { label: "First Month Users", value: "12K+", description: "Active users within 30 days of launch" },
      { label: "Fraud Detection", value: "99.2", suffix: "%", description: "Accuracy on test dataset" },
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "eduspark-ai-learning-platform",
    title: "EduSpark AI Learning Platform",
    description:
      "An adaptive AI learning platform for K-12 students that personalises curriculum difficulty in real-time based on performance patterns, increasing student test scores by an average of 34% across 3,000 enrolled students.",
    shortDescription: "Adaptive AI learning platform that raised student scores 34%.",
    category: "ai",
    client: "EduSpark Learning Solutions",
    clientIndustry: "EdTech",
    duration: "7 months",
    year: 2023,
    tags: ["AI", "EdTech", "Machine Learning", "Web Platform"],
    techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "AWS", "Redis", "Socket.io"],
    result: "34% average improvement in student test scores",
    resultMetric: "34%",
    coverImage: "/images/portfolio/project-5.webp",
    images: ["/images/case-studies/eduspark-1.webp"],
    challenge:
      "EduSpark's one-size-fits-all learning modules were leaving fast learners bored and struggling students overwhelmed. Teacher-to-student ratios of 1:40 made personalized instruction impossible. Dropout rates from the platform reached 58% after the first month.",
    solution:
      "We built an adaptive learning engine using Item Response Theory (IRT) combined with a neural network that profiles each student's knowledge state and learning velocity across 150+ skill nodes. The system adjusts question difficulty, pacing, and content format in real time. Teachers get a dashboard showing exactly which students need intervention and on which concepts.",
    impact: [
      { label: "Score Improvement", value: "34", suffix: "%", description: "Average student test score gain" },
      { label: "Platform Retention", value: "78", suffix: "%", description: "30-day retention (up from 42%)" },
      { label: "Students", value: "3K+", description: "Active enrolled students" },
      { label: "Skill Nodes", value: "150+", description: "Adaptive curriculum graph" },
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "logixpro-supply-chain-automation",
    title: "LogixPro Supply Chain Automation",
    description:
      "End-to-end supply chain automation for a pan-India logistics company, eliminating manual order processing for 2,000+ daily shipments and reducing order errors from 8.3% to under 0.4%.",
    shortDescription: "Automation cut order errors from 8.3% to 0.4% for 2K+ daily shipments.",
    category: "automation",
    client: "LogixPro Logistics",
    clientIndustry: "Logistics",
    duration: "4 months",
    year: 2024,
    tags: ["Automation", "Logistics", "Integration", "Operations"],
    techStack: ["Node.js", "Python", "PostgreSQL", "RabbitMQ", "AWS Lambda", "Docker", "Zapier API"],
    result: "Order errors reduced from 8.3% to 0.4%",
    resultMetric: "0.4%",
    coverImage: "/images/portfolio/project-6.webp",
    images: ["/images/case-studies/logixpro-1.webp"],
    challenge:
      "LogixPro's operations team was manually processing 2,000+ orders per day across 5 different software systems with no integration between them. Data re-entry errors caused 8.3% of shipments to have incorrect details — resulting in returns, re-deliveries, and ₹12L in monthly penalty charges from enterprise clients.",
    solution:
      "We built a central automation hub that integrates all 5 systems via API and event-driven architecture. Orders flow automatically from intake through verification, warehouse allocation, carrier selection, and label generation. An anomaly detection layer flags unusual orders for human review rather than letting errors propagate downstream. The entire pipeline processes in under 8 seconds per order.",
    impact: [
      { label: "Order Error Rate", value: "8.3% → 0.4%", description: "Shipment error reduction" },
      { label: "Processing Time", value: "< 8s", description: "Per order (vs. 4 min manual)" },
      { label: "Daily Shipments", value: "2K+", description: "Fully automated volume" },
      { label: "Monthly Savings", value: "₹12L+", description: "Penalty charges eliminated" },
    ],
    featured: false,
  },
];

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined =>
  portfolioItems.find((p) => p.slug === slug);

export const getFeaturedPortfolio = (): PortfolioItem[] =>
  portfolioItems.filter((p) => p.featured);

export const getPortfolioByCategory = (category: string): PortfolioItem[] =>
  category === "all"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === category);

export const portfolioSlugs = portfolioItems.map((p) => p.slug);
