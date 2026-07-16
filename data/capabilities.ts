// Capability groups. Deliberately phrase-based rather than tool logos or
// percentage bars. Only technologies explicitly named in project/experience
// data are listed by name (CNNs, Raspberry Pi, NFC, CAD, Java) — everything
// else is described by function. EDIT: extend with a finalized skills list
// once available; do not add specific languages/frameworks/databases beyond
// what the project work has actually used.

export interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "software-data",
    title: "Software & Data",
    description:
      "Building and maintaining the pipelines and systems that move and make sense of data.",
    items: [
      "Data pipeline development",
      "Data accessibility & integration",
      "Analytics dashboards",
      "Data visualization",
      "Machine learning workflows",
      "Java",
    ],
  },
  {
    id: "ai-research",
    title: "Artificial Intelligence & Research",
    description:
      "Designing, training, and evaluating models — and communicating what they find.",
    items: [
      "Convolutional neural networks (CNNs)",
      "Image classification & computer vision",
      "Model training & evaluation",
      "NDVI / remote sensing analysis",
      "Experimental design",
      "Quantitative analysis",
      "Technical writing & presentation",
    ],
  },
  {
    id: "hardware-engineering",
    title: "Hardware & Engineering",
    description:
      "Turning a system on paper into a working, testable prototype.",
    items: [
      "Robotics design & fabrication",
      "CAD",
      "Raspberry Pi / embedded systems",
      "NFC integration",
      "Sensor integration",
      "Rapid prototyping",
      "Biological & environmental engineering systems",
    ],
  },
  {
    id: "product-entrepreneurship",
    title: "Product & Entrepreneurship",
    description:
      "Getting an idea in front of real users, then acting on what they say.",
    items: [
      "Product experimentation",
      "User research & feedback loops",
      "Go-to-market testing",
      "Fundraising",
      "Partnership development",
      "Pitching & competition presentation",
      "Startup execution",
    ],
  },
  {
    id: "leadership-communication",
    title: "Leadership & Communication",
    description:
      "Building the teams and programs that make the work possible — and keeping them running.",
    items: [
      "Team leadership",
      "Coaching & mentorship",
      "Curriculum development",
      "Public speaking & emceeing",
      "Event & operations management",
      "Consulting",
      "Community outreach",
    ],
  },
];
