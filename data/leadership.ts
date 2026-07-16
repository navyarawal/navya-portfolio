// Leadership & Impact — headline stats plus the organizations behind them.

export interface ImpactStat {
  value: string;
  label: string;
}

export const impactStats: ImpactStat[] = [
  { value: "$10K+", label: "raised in corporate partnerships" },
  { value: "$30K", label: "in donations & fees managed" },
  { value: "100+", label: "students taught" },
  { value: "4", label: "schools with sustained robotics programs" },
  { value: "6", label: "large-scale competitions organized" },
  { value: "800+", label: "volunteers coordinated" },
  { value: "13", label: "member technical team led" },
];

export interface LeadershipImage {
  // EDIT: drop files into the matching /public/images/leadership/<slug>/ folder.
  src: string;
  alt: string;
  isPlaceholder?: boolean;
}

export interface LeadershipEntry {
  slug: string;
  org: string;
  role: string;
  dates: string;
  highlights: string[];
  images: LeadershipImage[];
}

export const leadership: LeadershipEntry[] = [
  {
    slug: "tri-valley-robotics",
    org: "Tri-Valley Robotics",
    role: "Director of Outreach & Coach",
    dates: "June 2024 — December 2025",
    highlights: [
      "Built corporate partnerships that raised more than $10,000 for FLL and FTC teams",
      "Organized STEM outreach events",
      "Expanded community robotics programs",
      "Coached three FIRST robotics teams",
    ],
    images: [
      // EDIT: add to /public/images/leadership/tri-valley/
    ],
  },
  {
    slug: "ftc",
    org: "First Tech Challenge",
    role: "President & Captain",
    dates: "October 2021 — June 2024",
    highlights: [
      "Led a 13-member robotics team through hardware design, CAD, fabrication, and Java programming",
      "Became Gold Division Finalists and Connect Award winners at the NorCal Regional Championships",
    ],
    images: [
      // EDIT: add to /public/images/leadership/ftc/
    ],
  },
  {
    slug: "csf",
    org: "California Scholarship Federation",
    role: "Co-President & Treasurer",
    dates: "December 2022 — September 2025",
    highlights: [
      "Managed approximately $30,000 in donations and fees",
      "Tracked volunteer hours",
      "Created community events for more than 1,000 students",
    ],
    images: [
      // EDIT: add to /public/images/leadership/csf/
    ],
  },
  {
    slug: "vex-robotics",
    org: "VEX Robotics Tournaments",
    role: "Judge, Emcee & Field Staff",
    dates: "December 2022 — September 2025",
    highlights: [
      "Helped organize six large-scale competitions serving more than 100 teams",
      "Coordinated operations involving more than 800 volunteers",
      "Evaluated robot design and performance",
      "Received the President's Volunteer Service Award, Gold level",
    ],
    images: [
      // EDIT: add to /public/images/leadership/vex/
    ],
  },
];
