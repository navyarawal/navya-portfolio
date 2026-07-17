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
    role: "Co-Founder & Lead Developer",
    dates: "March 2026 — June 2026",
    accent: "gold",
    featured: true,
    order: 1,
    summary:
      "An alarm app paired with NFC technology that forces you out of bed to defeat habitual snoozing — built and tested with real users across UCLA's campus.",
    results: [
      "100+ stickers sold and 73 app downloads across UCLA's campus",
      "9 five-star reviews from early users",
    ],
    capabilities: [
      "Product experimentation",
      "NFC / hardware-software integration",
      "User research",
      "Go-to-market testing",
      "Founder-led growth",
    ],
    gallery: [
      {
        src: "/images/sunny/product-promo.jpeg",
        alt: "Sunny app promo graphic: 'POV: your alarm finally fights back' with app screenshot showing streak tracking",
      },
      {
        src: "/images/sunny/nfc-tags.jpg",
        alt: "Sunny NFC tag stickers, printed with a smiling sun design",
      },
      {
        src: "/images/sunny/campus-launch.jpg",
        alt: "Sunny campus launch table with NFC tags, a phone showing the onboarding flow, and promo cards",
      },
    ],
    documents: [],
    links: [
      { label: "Instagram", href: "https://instagram.com/sunnyalarm.app" },
      { label: "Website", href: "https://sunnyalarm.com" },
    ],
    caseStudy: {
      problem:
        "Nearly half of Americans snooze their alarm on over 80% of their mornings — snoozing is habitual, not intentional. On a college campus, three things compound it: sleep inertia from endless snoozing and doom-scrolling, sleep schedules wrecked by class and event timing, and shared dorms where one roommate's snooze habit becomes everyone's problem.",
      role: "Co-Founder & Lead Developer",
      team: "Co-founded with Hannah He and Alex Cismaru.",
      process:
        "Designed an alarm flow that only disarms when the user taps an NFC tag placed away from the bed, forcing a physical action to fully wake up. Ran the product through repeated rounds of testing with UCLA students, using direct feedback to refine the alarm behavior and onboarding.",
      technicalApproach:
        "Paired a mobile alarm application with NFC tag scanning as the unlock mechanism, requiring physical movement to disable the alarm rather than a screen tap.",
      decisions:
        "Chose a physical NFC sticker over a purely software solution — a screen tap is too easy to do half-asleep, so the app doesn't count you as awake until you've physically gotten up to it. Went to market through in-person channels first — tabling, door-to-door sales, a matcha pop-up bundle — rather than paid ads, treating early sales conversations as user research.",
      challenges:
        "Three challenges recurred through the quarter: finding people whose sleep habits actually made them want to change (a bad sleep schedule alone wasn't enough — motivation mattered more), continuously fixing bugs and refining the UI and sticker design and cost, and figuring out the sales motion itself — pricing, product-market fit, and the supply chain for the physical stickers.",
      results:
        "Sold 100+ stickers and reached 73 app downloads and 226 app page views, with 9 five-star reviews. Ran go-to-market through direct, in-person channels — Bruinwalk tabling (40+ sold), door-to-door sales in the dorms (30+ sold), a matcha pop-up bundle, and free samples to grow the early user base — alongside organic Instagram growth.",
      reflection:
        "The biggest surprise came out of user research: the assumption going in was that snoozing itself was the core problem, but interviewing 12 potential users surfaced a more specific, counter-intuitive one — roommates disturbing each other's sleep with their alarms. That reframed the sticker from an individual habit-breaker into a shared-space problem, and changed how we pitched and sold it in person.",
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
    results: [
      "~82% classification accuracy on histopathology image data",
      "Matched competitive results using a fraction of the layers and training epochs of deeper models",
    ],
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
      {
        label: "Research Paper",
        href: "/documents/osteosarcoma-cnn/osteosarcoma-research-paper.pdf",
      },
    ],
    links: [],
    caseStudy: {
      problem:
        "Osteosarcoma diagnosis from histopathology images is traditionally manual and time-intensive — a well-trained model could help flag classifications faster and support pathologists.",
      role: "Research Assistant (UCSB Summer Research Academy) — model development, training, and evaluation.",
      team: "Co-authored with Aviva Wang and Amy Li. I built and trained the model and wrote the abstract and introduction; Aviva and I wrote the methods and results together; Amy compiled the references and reviewed prior work. Mentored by researchers at UC Santa Barbara through the Summer Research Academy.",
      process:
        "Preprocessed and augmented 1,144 H&E-stained histopathology images (rotation, shifts, flips) from the Cancer Imaging Archive, split into a 7:2:1 train/validation/test set, then iterated on model architecture and image resolution to find a configuration that actually learned within the available compute before evaluating on held-out data.",
      technicalApproach:
        "A custom convolutional neural network — three convolution + max-pool blocks (32 → 64 → 128 channels) followed by two dense layers with dropout and a softmax output — trained on images resized to 375 × 375, the point that preserved enough diagnostic detail without exceeding available memory.",
      decisions:
        "Chose to design a small custom CNN from scratch instead of fine-tuning a deeper pretrained model like VGG19, prioritizing a model that could actually finish training on the compute available. Spent significant time tuning the image resize dimensions specifically, landing on 375 × 375 pixels after testing showed that was the balance point.",
      challenges:
        "Started with transfer learning on VGG19, matching prior state-of-the-art work, but kept running out of GPU on Google Colab with no realistic way to finish enough epochs on CPU. Switched to a smaller custom CNN, but the first version wasn't learning at all — just guessing one class for every image — because resizing down to 224 × 224 had thrown away too much detail. After testing several sizes under the same compute ceiling, 375 × 375 turned out to be the balance point. The next problem was overfitting, which dropout layers between the fully connected layers fixed.",
      results:
        "Reached 82.41% accuracy (0.81 weighted precision, 0.77 recall, 0.78 F1) using only 12 layers and 50 training epochs — a fraction of the resources used by comparable models like VGG19 (93.9% accuracy, 19 layers, 1,500 epochs) and MobileNetV2 (91%, 53 layers, 100 epochs). The model most often confused non-tumor images for viable tumors.",
      reflection:
        "The accuracy gap against deeper, pretrained models was the point, not a shortfall — the simplest model that still worked needed a fraction of the compute those models required to hit 90%+. It reframed how I think about tradeoffs in applied ML: sometimes the right benchmark isn't maximum accuracy, but the most accessible tool a pathologist could actually run.",
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
        "Growing up visiting Nepal, I often showed my EV3 robot to local friends whose schools lacked STEM resources — their wide-eyed curiosity tempered by having no way to act on it. That memory stayed with me and became Rookie Robotics: schools in Nepal lacked access to robotics equipment and technical curriculum, and one-time donations rarely translate into programs that last beyond the initial gift.",
      role: "Founder — fundraising, curriculum, logistics, and long-term program design.",
      team: "Founder-led — partnered with Tri-Valley Robotics and FiSec Global Inc. for funding support, and worked directly with school administrators and instructors in Damak, Nepal to run the program locally.",
      process:
        "Raised funds and robotics equipment, then worked directly with schools to deploy equipment, train instructors, and build curriculum designed to keep programs running independently after launch.",
      technicalApproach:
        "Combined equipment sourcing and logistics with a structured curriculum built for sustained use by local instructors rather than one-off workshops.",
      decisions:
        "Built a full curriculum from scratch and sourced LEGO SPIKE kits rather than adapting an existing program, and personally contributed $4,000 toward the initial launch.",
      challenges:
        "A few months before launch, two of the schools asked to add fifty more students than originally planned — a request I couldn't turn down, but with no time left to run additional fundraisers. I went back to organizations that had supported the program before, and after several meetings with Tri-Valley Robotics and FiSec Global Inc., secured $1,000 toward the roughly $1,600 gap. I covered the rest by picking up extra shifts at work, closing the gap in time to buy the additional kits and secure the remaining resources.",
      results:
        "Raised and deployed more than $5,000 in robotics equipment, established permanent programs at four schools, and received the Girl Scouts Gold Award for the project.",
      reflection:
        "Every extra shift was worth it the moment I taught the kickoff workshop and watched the first batch of students design and code their first robots — their curiosity turning into confidence in real time. The schools have kept their programs running since, and are preparing to compete this year.",
    },
  },
  {
    slug: "phosphobuddy",
    title: "PhosphoBuddy",
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
      {
        src: "/images/phosphobuddy/dsrsd-award-ceremony.png",
        alt: "PhosphoBuddy team receiving recognition at the Dublin San Ramon Services District, standing beside their science fair board",
      },
      {
        src: "/images/phosphobuddy/berkeley-competition-1st-place.jpg",
        alt: "Team accepting the 1st place award on stage at the UC Berkeley Bioengineering Competition",
      },
    ],
    documents: [
      {
        label: "Research Week Presentation Poster",
        href: "/documents/phosphobuddy/research-week-presentation-poster.pdf",
      },
    ],
    links: [],
    caseStudy: {
      problem:
        "Excess phosphorus in wastewater drives harmful algal blooms and ecosystem damage — conventional filtration is often costly or chemically intensive.",
      role: "Lead Hardware Developer — system design, prototyping, and testing.",
      team: "Team Dougherty B — Aarush De, Navya Rawal, Richa Tiwari, and Diya Rajaram, mentored by Darrence Tran and coached by Luis Huertas.",
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
