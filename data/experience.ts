// Professional experience timeline. Order = reverse chronological.

export interface ExperienceImage {
  // EDIT: drop files into the matching /public/images/experience/<slug>/ folder.
  src: string;
  alt: string;
  isPlaceholder?: boolean;
}

export interface ExperienceEntry {
  slug: string;
  org: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  highlights: string[];
  capabilities: string[];
  images: ExperienceImage[];
}

export const experience: ExperienceEntry[] = [
  {
    slug: "neuroleap",
    org: "NeuroLeap Corp",
    role: "Data Engineering Intern",
    dates: "January 2026 — Present",
    summary:
      "Developed and maintained data pipelines integrating diverse data sources, improving data accessibility and supporting machine-learning workflows for AI-driven neurodevelopmental assessment tools.",
    highlights: [
      // EDIT: add specific tools, datasets, or measurable outcomes once shareable.
    ],
    capabilities: [
      "Data engineering",
      "ML infrastructure",
      "Healthcare technology",
      "Interdisciplinary systems",
    ],
    images: [],
  },
  {
    slug: "amplify-analytix",
    org: "Amplify Analytix",
    role: "Data Analytics Consulting Intern",
    dates: "June 2023 — June 2024",
    summary:
      "Developed pricing-optimization and product-performance dashboards for multiple clients, translating large datasets into decisions that shaped pricing and product placement.",
    highlights: [
      "Developed pricing-optimization and product-performance dashboards for multiple clients using data-visualization tools",
      "Analyzed large datasets to identify trends and deliver actionable insights that improved pricing strategies and product placement",
    ],
    capabilities: [
      "Analytics consulting",
      "Data visualization",
      "Client communication",
      "Business decision translation",
    ],
    images: [],
  },
  {
    slug: "magikid-robotics",
    org: "Magikid Robotics",
    role: "Lead Coach & Curriculum Developer",
    dates: "December 2022 — September 2025",
    summary:
      "Coached competitive robotics teams and taught over 100 students robotics, coding, and engineering design, while building the standardized curriculum used across programs.",
    highlights: [
      "Coached two competitive VEX teams",
      "Taught more than 100 students ages 4–14 in robotics, coding, and engineering design",
      "Designed standardized curriculum used across multiple programs",
      "Managed instructor scheduling and coordinated team operations",
    ],
    capabilities: [
      "Coaching",
      "Curriculum development",
      "Program operations",
      "STEM education",
    ],
    images: [
      {
        src: "/images/experience/magikid/3d-printer-demo.jpg",
        alt: "Navya showing students a 3D printer at Magikid Robotics",
      },
      {
        src: "/images/experience/magikid/vex-coaching-session.jpg",
        alt: "Navya coaching students building a VEX robot on a competition table",
      },
    ],
  },
];
