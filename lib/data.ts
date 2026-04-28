export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    shortDescription: "Real-time analytics platform powered by machine learning insights.",
    description:
      "A comprehensive analytics dashboard that leverages machine learning to surface actionable insights from complex datasets. Built with a focus on performance and user experience, it features real-time data streaming, interactive charts, and customizable widgets. The backend processes millions of events per day using a distributed architecture.",
    tags: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    category: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/ai-dashboard.jpg",
    featured: true,
    year: 2024,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Scalable multi-vendor marketplace with real-time inventory management.",
    description:
      "A full-featured e-commerce platform supporting multiple vendors, real-time inventory tracking, and seamless payment processing. Includes an admin panel for vendor management, order tracking, and analytics. Optimized for performance with server-side rendering and edge caching.",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Docker", "AWS"],
    category: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/ecommerce.jpg",
    featured: true,
    year: 2024,
  },
  {
    slug: "design-system",
    title: "Open Source Design System",
    shortDescription: "Accessible component library used by 500+ developers worldwide.",
    description:
      "A comprehensive design system and component library built with accessibility and developer experience in mind. Features 60+ components, dark mode support, full TypeScript types, and extensive documentation. Published on npm with over 10k weekly downloads.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/design-system.jpg",
    featured: true,
    year: 2023,
  },
  {
    slug: "devops-pipeline",
    title: "CI/CD Pipeline Automation",
    shortDescription: "Automated deployment pipeline reducing release time by 80%.",
    description:
      "An end-to-end CI/CD pipeline automation tool that integrates with GitHub Actions, Docker, and Kubernetes. Features automatic testing, security scanning, blue-green deployments, and rollback capabilities. Reduced average deployment time from 45 minutes to under 9 minutes.",
    tags: ["Go", "Kubernetes", "Docker", "GitHub Actions", "Terraform"],
    category: "DevOps",
    githubUrl: "https://github.com",
    image: "/projects/devops.jpg",
    featured: false,
    year: 2023,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    shortDescription: "Cross-platform mobile app with AI-powered workout recommendations.",
    description:
      "A React Native fitness application that uses AI to generate personalized workout plans based on user goals, fitness level, and available equipment. Features workout logging, progress tracking, social challenges, and integration with Apple Health and Google Fit.",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "TensorFlow Lite"],
    category: "Mobile",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/fitness.jpg",
    featured: false,
    year: 2023,
  },
  {
    slug: "blockchain-wallet",
    title: "Web3 Wallet Interface",
    shortDescription: "Multi-chain crypto wallet with DeFi protocol integrations.",
    description:
      "A non-custodial Web3 wallet supporting 10+ blockchain networks with built-in DeFi integrations for swapping, staking, and yield farming. Features hardware wallet support, transaction simulation, and gas optimization suggestions.",
    tags: ["React", "ethers.js", "Solidity", "Web3.js", "TypeScript"],
    category: "Web3",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/blockchain.jpg",
    featured: false,
    year: 2022,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "React Native", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Python", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Redis", level: 4 },
      { name: "Go", level: 3 },
      { name: "MongoDB", level: 4 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 4 },
      { name: "Docker", level: 5 },
      { name: "Kubernetes", level: 3 },
      { name: "CI/CD", level: 4 },
      { name: "Terraform", level: 3 },
      { name: "Vercel", level: 5 },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Figma", level: 4 },
      { name: "Testing (Jest/Cypress)", level: 4 },
      { name: "Agile / Scrum", level: 4 },
      { name: "Web3 / Solidity", level: 3 },
      { name: "AI/ML Integration", level: 4 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "hello@alexmorgan.dev",
};
