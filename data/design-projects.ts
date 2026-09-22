export interface DesignProject {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tools: string[];
  role: string;
  duration: string;
  year: number;
  behance?: string;
  problem: string;
  solution: string;
  process: string[];
  outcome: string;
  featured: boolean;

}

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "NairaFlow",
    category: "FinTech · Mobile Banking",
    description:
      "A modern mobile banking experience designed to make everyday money management feel simple, transparent, and secure.",
    fullDescription:
      "A concept fintech banking experience focused on the complete digital banking journey — from onboarding and KYC verification to sending money, managing cards, tracking spending, and handling sensitive financial actions with confidence.",
    image: "/imgs/nf4.png",

    gallery: [
    "/imgs/nf1.png",
    "/imgs/nf2.png",
    "/imgs/nf3.png",
    "/imgs/nf4.png",
    ],
    tools: ["Figma", "FigJam", "Illustrator"],
    role: "Product Designer",
    duration: "4 weeks",
    year: 2026,
    behance: "https://www.figma.com/design/zmVImktiWPWhFkey3PwBcj/UIUX?node-id=238-2&t=Bo3OBpmrk9n51gho-1",
    problem:
      "Digital banking involves several high-trust moments — creating an account, completing KYC, sending money, managing cards, and confirming financial transactions. The challenge was to make these flows feel straightforward while giving users enough feedback and reassurance at every critical step.",
    solution:
      "Designed a complete mobile banking experience around a clear information hierarchy and predictable interaction patterns. The experience includes guided onboarding and KYC, a balance-focused dashboard, money transfers, transaction history, budgeting tools, card management, security confirmations, and clear success, error, and failed-payment states.",
    process: [
      "Mapped the core banking user journey",
      "Reviewed patterns from leading fintech and banking products",
      "Defined information architecture and primary user flows",
      "Created low-fidelity wireframes and interaction states",
      "Designed a reusable fintech design system",
      "Built high-fidelity screens and micro-interactions",
      "Designed dark mode and accessibility-conscious states",
      "Tested key flows for clarity and error recovery",
    ],
    outcome:
      "The final concept creates a cohesive banking experience where users can move from onboarding to everyday financial management without unnecessary complexity, while critical actions remain clear, confirmed, and easy to recover from.",
    featured: true,

  },

  {
    id: 2,
    title: "SKYP3R Admin Dashboard",
    category: "SaaS · Admin Dashboard · Web",
    description:
      "A data-rich administration dashboard designed to help teams monitor operations, users, transactions, and platform activity.",
    fullDescription:
      "A web-based admin dashboard for SKYP3R, designed around operational visibility and efficient decision-making. The interface brings key metrics, users, transactions, activity, and management tools into a structured workspace without overwhelming administrators.",
    image: "/imgs/admin2.png",

    gallery: [
    "/imgs/admin1.png",
    "/imgs/admin2.png",
    "/imgs/admin3.png",
    "/imgs/admin4.png",
    ],
    tools: ["Figma", "FigJam", "Illustrator"],
    role: "Product Designer",
    duration: "5 weeks",
    year: 2026,
    behance: "https://www.figma.com/design/zmVImktiWPWhFkey3PwBcj/UIUX?node-id=43-2&t=Bo3OBpmrk9n51gho-1",
    problem:
      "Administrators often need to monitor several areas of a digital product at once. Without a clear hierarchy, dashboards can become dense collections of numbers, tables, and controls that make it difficult to identify what needs attention.",
    solution:
      "Created a structured admin experience that prioritizes the most important operational information first, while keeping deeper data and management actions accessible through dedicated sections. The system uses cards, charts, tables, filters, status indicators, and contextual actions to make complex platform data easier to scan and manage.",
    process: [
      "Defined administrator goals and core dashboard tasks",
      "Mapped dashboard information architecture",
      "Identified primary KPIs and operational metrics",
      "Created wireframes for dashboard and management views",
      "Designed tables, charts, filters, and status systems",
      "Built a reusable web dashboard design system",
      "Designed empty, loading, error, and success states",
      "Refined layouts for desktop and responsive web experiences",
    ],
    outcome:
      "The resulting dashboard provides administrators with a clearer operational workspace, combining high-level performance visibility with the detailed controls needed to manage day-to-day platform activity.",
    featured: true,
  },

  {
    id: 3,
    title: "SmartShopper",
    category: "Retail Tech · Mobile App",
    description:
      "A self-checkout shopping experience designed to help shoppers scan, pay, and leave the store without waiting in line.",
    fullDescription:
      "SmartShopper is a Nigerian self-checkout concept designed around a faster in-store shopping journey. The experience connects product scanning, cart management, payment, receipt generation, and checkout confirmation into one streamlined mobile flow.",
   image: "/imgs/skyp2.png",

    gallery: [
    "/imgs/skyp1.png",
    "/imgs/skyp2.png",
    "/imgs/skyp3.png",
    "/imgs/skyp4.png",
    ],
    tools: ["Figma", "FigJam", "Illustrator"],
    role: "Product Designer",
    duration: "5 weeks",
    year: 2026,
    behance: "https://www.figma.com/design/zmVImktiWPWhFkey3PwBcj/UIUX?node-id=1-2&t=Bo3OBpmrk9n51gho-1",
    problem:
      "Traditional checkout can introduce unnecessary waiting and friction, especially during busy shopping periods. A self-checkout experience needs to make scanning, reviewing the cart, paying, and confirming the purchase feel fast while still giving shoppers confidence that everything was processed correctly.",
    solution:
      "Designed a mobile-first self-checkout journey that guides shoppers from scanning products to payment with minimal friction. The experience includes a live cart, product scanning, price and quantity updates, cart review, payment selection, transaction confirmation, digital receipts, and clear recovery states when something goes wrong.",
    process: [
      "Mapped the in-store shopping and checkout journey",
      "Identified friction points in traditional checkout",
      "Defined the self-checkout information architecture",
      "Designed scanning and cart interaction flows",
      "Created payment and confirmation states",
      "Designed error and recovery experiences",
      "Built high-fidelity mobile UI and component system",
      "Reviewed the experience across common shopping scenarios",
    ],
    outcome:
      "The final experience turns self-checkout into a clear step-by-step mobile journey, reducing unnecessary decisions while keeping shoppers informed about their cart, payment status, and completed purchase.",
    featured: true,

  },
];

export const featuredDesignProjects = designProjects.filter(
  (p) => p.featured
);