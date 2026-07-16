// Centralized project data — homepage "The Work" section and case study pages
// both read from this file. To change project order, edit `order`.
// To feature/unfeature a project on the homepage, edit `featured`.

export type Accent = "cobalt" | "red" | "gold" | "green";

export interface GalleryImage {
  // EDIT: drop the real file in the matching /public/images/<slug>/ folder,
  // point `src` at it, and remove `isPlaceholder`. Until then the gallery
  // renders an intentional generated placeholder using `alt` as its label.
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
}

export interface ProjectDocument {
  label: string;
  // EDIT: drop the PDF in /public/documents/ and point href at it.
  href: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface CaseStudyContent {
  problem: string;
  role: string;
  team: string;
  process: string;
  technicalApproach: string;
  decisions: string;
  challenges: string;
  results: string;
  reflection: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  dates: string;
  accent: Accent;
  featured: boolean;
  order: number;
  summary: string;
  results: string[];
  capabilities: string[];
  gallery: GalleryImage[];
  documents: ProjectDocument[];
  links: ExternalLink[];
  caseStudy: CaseStudyContent;
}

const EDIT_PLACEHOLDER = "EDIT: Add this detail once available.";

export const projects: Project[] = [
  {
    slug: "sunny",
    title: "Sunny",
    category: "Product & Entrepreneurship",
    role: "Co-Founder",
    dates: "March 2026 — June 2026",
    accent: "gold",
    featured: true,
    order: 1,
    summary:
      "An alarm app paired with NFC technology that forces you out of bed to defeat habitual snoozing — built and tested with real users across UCLA's campus.",
    results: [
      "Launched and tested across the UCLA campus",
      "Iterated on the product through direct user feedback and repeated testing rounds",
    ],
    capabilities: [
      "Product experimentation",
      "NFC / hardware-software integration",
      "User research",
      "Go-to-market testing",
      "Founder-led growth",
    ],
    gallery: [
      // EDIT: add to /public/images/sunny/ — product screenshots, branding,
      // launch photos, user-testing photos, NFC demos, promo materials.
      {
        src: "/images/sunny/placeholder-1.svg",
        alt: "Sunny product screenshot placeholder",
        isPlaceholder: true,
      },
      {
        src: "/images/sunny/placeholder-2.svg",
        alt: "Sunny NFC tag interaction placeholder",
        isPlaceholder: true,
      },
      {
        src: "/images/sunny/placeholder-3.svg",
        alt: "Sunny campus launch placeholder",
        isPlaceholder: true,
      },
    ],
    documents: [],
    links: [
      // EDIT: add app store link, landing page, demo video, or press coverage.
    ],
    caseStudy: {
      problem:
        "Snoozing is habitual, not intentional — most alarm apps only add friction to the moment of waking instead of changing the behavior loop that causes people to snooze in the first place.",
      role: "Co-Founder — product, experimentation, and campus go-to-market.",
      team: EDIT_PLACEHOLDER,
      process:
        "Designed an alarm flow that only disarms when the user taps an NFC tag placed away from the bed, forcing a physical action to fully wake up. Ran the product through repeated rounds of testing with UCLA students, using direct feedback to refine the tag placement, alarm behavior, and onboarding.",
      technicalApproach:
        "Paired a mobile alarm application with NFC tag scanning as the unlock mechanism, requiring physical movement to disable the alarm rather than a screen tap.",
      decisions: EDIT_PLACEHOLDER,
      challenges: EDIT_PLACEHOLDER,
      results:
        "Launched and tested across the UCLA campus, gathering direct user feedback that shaped iteration on the product.",
      reflection: EDIT_PLACEHOLDER,
    },
  },
  {
    slug: "osteosarcoma-cnn",
    title: "Diagnosis of Osteosarcoma Through CNN",
    category: "Artificial Intelligence & Research",
    role: "UCSB SRA Researcher",
    dates: "June 2023 — July 2023",
    accent: "cobalt",
    featured: true,
    order: 3,
    summary:
      "Developed and trained a convolutional neural network to classify osteosarcoma from histopathology images, reaching roughly 82% accuracy.",
    results: ["~82% classification accuracy on histopathology image data"],
    capabilities: [
      "Convolutional neural networks",
      "Image classification",
      "Research methodology",
      "Model evaluation",
      "Healthcare AI applications",
    ],
    gallery: [
      // EDIT: add selected result figures / diagrams to
      // /public/images/osteosarcoma-cnn/
      {
        src: "/images/osteosarcoma-cnn/placeholder-1.svg",
        alt: "Osteosarcoma CNN diagram placeholder",
        isPlaceholder: true,
      },
    ],
    documents: [
      // EDIT: add research paper / poster PDF to /public/documents/ and
      // reference it here, e.g. { label: "Research Paper", href: "/documents/osteosarcoma-cnn.pdf" }
    ],
    links: [],
    caseStudy: {
      problem:
        "Osteosarcoma diagnosis from histopathology images is traditionally manual and time-intensive — a well-trained model could help flag classifications faster and support pathologists.",
      role: "Research Assistant (UCSB Summer Research Academy) — model development, training, and evaluation.",
      team: EDIT_PLACEHOLDER,
      process:
        "Built and trained a convolutional neural network on histopathology image data, iterating on architecture and training parameters to improve classification performance, then evaluated the model against held-out data.",
      technicalApproach:
        "Convolutional neural network trained for binary/multiclass histopathology image classification, evaluated using standard accuracy metrics.",
      decisions: EDIT_PLACEHOLDER,
      challenges: EDIT_PLACEHOLDER,
      results: "Reached approximately 82% classification accuracy.",
      reflection: EDIT_PLACEHOLDER,
    },
  },
  {
    slug: "rookie-robotics",
    title: "Rookie Robotics",
    category: "Entrepreneurship & Global Impact",
    role: "Founder",
    dates: "December 2022 — December 2025",
    accent: "red",
    featured: true,
    order: 2,
    summary:
      "Founded an initiative to build sustainable robotics programs at schools in Nepal — raising and deploying equipment, training instructors, and establishing programs built to last.",
    results: [
      "$5,000+ in robotics equipment raised and deployed",
      "Permanent programs established at 4 schools",
      "Girl Scouts Gold Award recipient",
    ],
    capabilities: [
      "Fundraising",
      "International program building",
      "Curriculum development",
      "Logistics",
      "Technical education",
    ],
    gallery: [
      {
        src: "/images/rookie-robotics/IMG_0518.jpg",
        alt: "Navya teaching a group of students at a Rookie Robotics workshop in Nepal",
      },
      {
        src: "/images/rookie-robotics/IMG_3522.jpg",
        alt: "Navya walking students through robotics kit components during a classroom session",
      },
      {
        src: "/images/rookie-robotics/IMG_0563.jpg",
        alt: "Students proudly showing off the robot they built together",
      },
    ],
    documents: [],
    links: [],
    caseStudy: {
      problem:
        "Schools in Nepal lacked access to robotics equipment and technical curriculum, and one-time donations rarely translate into programs that last beyond the initial gift.",
      role: "Founder — fundraising, curriculum, logistics, and long-term program design.",
      team: EDIT_PLACEHOLDER,
      process:
        "Raised funds and robotics equipment, then worked directly with schools to deploy equipment, train instructors, and build curriculum designed to keep programs running independently after launch.",
      technicalApproach:
        "Combined equipment sourcing and logistics with a structured curriculum built for sustained use by local instructors rather than one-off workshops.",
      decisions: EDIT_PLACEHOLDER,
      challenges: EDIT_PLACEHOLDER,
      results:
        "Raised and deployed more than $5,000 in robotics equipment, established permanent programs at four schools, and received the Girl Scouts Gold Award for the project.",
      reflection: EDIT_PLACEHOLDER,
    },
  },
  {
    slug: "phosphody",
    title: "Phosphody",
    category: "Environmental Engineering & Hardware",
    role: "Lead Hardware Developer",
    dates: "August 2024 — June 2025",
    accent: "green",
    featured: true,
    order: 4,
    summary:
      "A three-tier wastewater filtration system that removes phosphorus using duckweed, biochar, and bacteria — first place at CCCSEF and the UC Berkeley Bioengineering Competition.",
    results: [
      "1st place — CCCSEF",
      "1st place — UC Berkeley Bioengineering Competition",
      "~$3,000 in lab equipment and $1,000+ in grants secured",
    ],
    capabilities: [
      "Hardware prototyping",
      "Environmental & biological systems engineering",
      "Experimental design",
      "Interdisciplinary research",
      "Competition & pitch presentation",
    ],
    gallery: [
      // EDIT: add to /public/images/phosphody/ — prototype images, system
      // diagrams, testing photos, competition photos, results graphics.
      {
        src: "/images/phosphody/placeholder-1.svg",
        alt: "Phosphody prototype placeholder",
        isPlaceholder: true,
      },
      {
        src: "/images/phosphody/placeholder-2.svg",
        alt: "Phosphody system diagram placeholder",
        isPlaceholder: true,
      },
      {
        src: "/images/phosphody/placeholder-3.svg",
        alt: "Phosphody competition placeholder",
        isPlaceholder: true,
      },
    ],
    documents: [
      // EDIT: add technical report/paper to /public/documents/ and reference here.
    ],
    links: [],
    caseStudy: {
      problem:
        "Excess phosphorus in wastewater drives harmful algal blooms and ecosystem damage — conventional filtration is often costly or chemically intensive.",
      role: "Lead Hardware Developer — system design, prototyping, and testing.",
      team: EDIT_PLACEHOLDER,
      process:
        "Designed a three-tier biological filtration system combining duckweed, biochar, and bacteria, then built and tested prototypes to measure phosphorus removal before presenting the system in competition.",
      technicalApproach:
        "Layered filtration architecture pairing biochar's adsorption properties with duckweed and bacterial phosphorus uptake across three sequential treatment tiers.",
      decisions: EDIT_PLACEHOLDER,
      challenges: EDIT_PLACEHOLDER,
      results:
        "Won first place at CCCSEF and the UC Berkeley Bioengineering Competition, securing approximately $3,000 in laboratory equipment and more than $1,000 in grants.",
      reflection: EDIT_PLACEHOLDER,
    },
  },
  {
    slug: "forest-health-cnn",
    title: "Forest Health Assessment Through CNN",
    category: "Artificial Intelligence & Environment",
    role: "Lead Software Developer",
    dates: "June 2023 — August 2024",
    accent: "green",
    featured: false,
    order: 5,
    summary:
      "A drone-based NDVI imaging system for environmental health monitoring, integrating a Raspberry Pi with CNN-based analysis.",
    results: ["Built and integrated a full drone-to-CNN monitoring pipeline"],
    capabilities: [
      "Computer vision",
      "Raspberry Pi / embedded systems",
      "NDVI remote sensing",
      "CNN model development",
    ],
    gallery: [
      // EDIT: add to /public/images/forest-health/
      {
        src: "/images/forest-health/placeholder-1.svg",
        alt: "Forest health drone imaging placeholder",
        isPlaceholder: true,
      },
    ],
    documents: [
      // EDIT: add research PDF/report/poster to /public/documents/ and reference here.
    ],
    links: [],
    caseStudy: {
      problem:
        "Ground-based forest health assessment is slow and hard to scale — remote imaging paired with automated analysis can cover more ground faster.",
      role: "Lead Software Developer — imaging pipeline and CNN analysis.",
      team: EDIT_PLACEHOLDER,
      process:
        "Integrated a Raspberry Pi with a drone-mounted imaging setup to capture NDVI data, then built a CNN pipeline to analyze the imagery for environmental health indicators.",
      technicalApproach:
        "Raspberry Pi–based drone imaging system feeding NDVI imagery into a CNN model for automated environmental health analysis.",
      decisions: EDIT_PLACEHOLDER,
      challenges: EDIT_PLACEHOLDER,
      results: EDIT_PLACEHOLDER,
      reflection: EDIT_PLACEHOLDER,
    },
  },
  {
    slug: "biobark-methanbotics",
    title: "BioBark & MethanBotics",
    category: "Environmental Engineering & Hardware",
    role: "Lead Hardware Developer",
    dates: "August 2024 — June 2025",
    accent: "gold",
    featured: false,
    order: 6,
    summary:
      "A methane-absorbing synthetic bark paired with probiotic digestion solutions — state finalist for Samsung Solve for Tomorrow.",
    results: [
      "State finalist — Samsung Solve for Tomorrow",
      "$2,500+ in technology awarded",
    ],
    capabilities: [
      "Materials prototyping",
      "Environmental engineering",
      "Biological systems design",
      "Competition presentation",
    ],
    gallery: [
      // EDIT: add to /public/images/biobark-methanbotics/
      {
        src: "/images/biobark-methanbotics/placeholder-1.svg",
        alt: "BioBark prototype placeholder",
        isPlaceholder: true,
      },
    ],
    documents: [],
    links: [],
    caseStudy: {
      problem:
        "Methane emissions from organic waste are a significant and under-addressed contributor to greenhouse gas output.",
      role: "Lead Hardware Developer — material and system prototyping.",
      team: EDIT_PLACEHOLDER,
      process:
        "Developed a synthetic bark material designed to absorb methane, paired with a probiotic-based digestion solution, then prototyped and refined the system for competition presentation.",
      technicalApproach:
        "Synthetic methane-absorbing bark material combined with a probiotic digestion process for organic waste treatment.",
      decisions: EDIT_PLACEHOLDER,
      challenges: EDIT_PLACEHOLDER,
      results:
        "Selected as a state finalist in the Samsung Solve for Tomorrow competition and received more than $2,500 in technology.",
      reflection: EDIT_PLACEHOLDER,
    },
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const additionalProjects = projects
  .filter((p) => !p.featured)
  .sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
