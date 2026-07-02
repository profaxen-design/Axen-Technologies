import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rohan Axen",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Rohan founded Axen Technology with a conviction that ambitious Indian businesses deserve world-class technology partners without the world-class agency markup. A former product lead at a Mumbai-based unicorn, he's spent the last 6 years turning that conviction into a 150+ project track record.",
    avatar: "/images/team/founder.webp",
    linkedin: "https://linkedin.com/in/rohanaxen",
    expertise: ["Product Strategy", "Business Development", "AI Vision", "Team Building"],
  },
  {
    id: "2",
    name: "Rishi Kapoor",
    role: "Chief Technology Officer",
    department: "Engineering",
    bio: "Rishi has been building scalable systems since before cloud computing was a phrase. With deep expertise in distributed systems and AI infrastructure, he sets the technical direction for every project Axen ships — and holds the bar on code quality.",
    avatar: "/images/team/cto.webp",
    linkedin: "https://linkedin.com/in/rishikapoor",
    twitter: "https://twitter.com/rishikapoor",
    expertise: ["System Architecture", "AI/ML Infrastructure", "DevOps", "Engineering Management"],
  },
  {
    id: "3",
    name: "Ananya Verma",
    role: "Head of Product Design",
    department: "Design",
    bio: "Ananya brings 8 years of UX craft from two Mumbai-based unicorn startups, where she built design systems used by millions of users. At Axen, she leads a design practice that believes every pixel is a business decision — and she has the conversion metrics to prove it.",
    avatar: "/images/team/head-design.webp",
    linkedin: "https://linkedin.com/in/ananyaverma",
    expertise: ["UX Strategy", "Design Systems", "User Research", "Interaction Design"],
  },
  {
    id: "4",
    name: "Meera Joshi",
    role: "Lead Engineer",
    department: "Engineering",
    bio: "Meera leads Axen's frontend and full-stack delivery team. A Next.js and TypeScript specialist who previously shipped features for 50M+ users at Flipkart, she's obsessed with performance, accessibility, and code that future developers actually want to maintain.",
    avatar: "/images/team/lead-dev.webp",
    linkedin: "https://linkedin.com/in/meerajoshi",
    expertise: ["Next.js", "TypeScript", "Performance Engineering", "Accessibility"],
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "Axen built our AI-powered chatbot system in 3 months, slashing customer support costs by 60% while actually improving CSAT. Their team understood our business constraints as well as the technical ones — that combination is extremely rare.",
    author: "Rajesh Sharma",
    role: "CEO",
    company: "TechVenture India",
    avatar: "/images/avatars/testimonial-1.webp",
    rating: 5,
    service: "AI Solutions",
  },
  {
    id: "2",
    quote:
      "Our Diwali sale processed ₹2.4 crore in 6 hours without a single downtime incident after Axen rebuilt our e-commerce platform. Mobile conversions are up 89%. The platform they built handles peak traffic that would have crashed our old site in 20 minutes.",
    author: "Priya Patel",
    role: "Founder",
    company: "ShopNow India",
    avatar: "/images/avatars/testimonial-2.webp",
    rating: 5,
    service: "Web Development",
  },
  {
    id: "3",
    quote:
      "We went from 3-week reporting cycles to real-time dashboards in 5 months. Our leadership team stopped arguing about numbers and started making decisions. That shift alone paid for the entire project in the first quarter.",
    author: "Arjun Mehta",
    role: "CTO",
    company: "DataFlow Analytics",
    avatar: "/images/avatars/testimonial-3.webp",
    rating: 5,
    service: "Data Analytics",
  },
];
