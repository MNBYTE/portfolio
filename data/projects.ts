export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  screenshots?: string[]; // <-- Added screenshots array
  tags: string[];
  github: string;
  live: string;
  features: string[];
  category: string;
  year: number;
  featured: boolean;
  status: "complete" | "in-progress" | "incomplete";
  stats: {
    lines: string;
    likes: string;
    date: string;
  };
  badges: {
    featured?: boolean;
    version?: string;
  };
  technologies: {
    name: string;
    color: string;
  }[];
  projectInfo: {
    created: string;
    updated: string;
    category: string;
    subCategory: string;
    tags: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Beeseek",
    description:
      "Created entire server side & web functionalities of a service marketplace for domestic help",
    fullDescription:
      "BeeSeek is a platform designed to connect verified service professionals (agents) with clients in Nigeria, focusing on reliability and secure payments built with Nextjs and Supabase, handling real-time waitlist, user experienece, and content management.",
    image: "/imgs/beeseek.png",
    screenshots: [
      "/imgs/beeseek_1.png",
      "/imgs/beeseek_2.png",
      "/imgs/beeseek_3.png",
    ],
    tags: ["frontend", "backend", "v1"],
    github: "",
    live: "https://beeseek.site",
    features: [
      "Real-time search",
      "User authentication & authorization",
      "Content feed algorithm",
      "Waitlist management system",
    ],
    category: "FullStack Development",
    year: 2025,
    featured: true,
    status: "complete",
    stats: {
      lines: "132.7k Lines",
      likes: "1.5k",
      date: "Oct 2025",
    },
    badges: {
      featured: true,
      version: "v1.0",
    },
    technologies: [
      { name: "Frontend", color: "bg-brown" },
      { name: "Service Marketplace Fullstack", color: "bg-yellow-500" },
    ],
    projectInfo: {
      created: "Oct 14, 2025",
      updated: "jan 30, 2025",
      category: "Web Applications",
      subCategory: "Service Marketplace",
      tags: ["#nextjs", "#tailwind", "#framermotion", "v3"],
    },
  },
  {
    id: 2,
    title: "HikeAll",
    description: "Hike All serves as a digital companion for planning and navigating outdoor activities",
    fullDescription: "HikeAll is meant to be the world’s most popular outdoor exploration platform, connecting users to more curated trail guides. It operates on a freemium model designed to help users find their way outside through a combination of expert-verified data and community-driven content.",
    image: "/imgs/hikeall_home.png",
    screenshots: [
      "/imgs/hikeall_help.png",
      "/imgs/hikeall_log.png",
      "/imgs/hikeall+.png",
    ],
    github: "https://github.com/MNBYTE/HikeAll",
    live: "https://hike-all.vercel.app/",
    features: [
      "Dynamic Forecasting",
      "Hike Trail guides",
      "Guest Access: access trails without an account",
      "Offline Navigation",
    ],
    category: "Web Applications",
    year: 2024,
    featured: true,
    status: "complete",
    stats: {
      lines: "83.9k Lines",
      likes: "890",
      date: "Oct 7, 2025",
    },
    badges: {
      version: "v1",
    },
    technologies: [
      { name: "Angular", color: "bg-green-500" },
      { name: "Bootstrap", color: "bg-brown" },
      { name: "Navigation Guide Platform", color: "bg-yellow-500" },
    ],
    projectInfo: {
      created: "Oct 7, 2025",
      updated: "Dec 3, 2025",
      category: "Web Applications",
      subCategory: "Trail Guide & Navigation Platforms",
      tags: ["#navigation", "#trailguide", "#userexpedition", "#angular", "#responsive"],
    },
    tags: []
  },
  {
  id: 3,
  title: "The Village Well",
  description: "A nonprofit platform focused on empowering communities through sustainable development, clean water access, education, and livelihood programs.",
  fullDescription: "The Village Well is a nonprofit initiative dedicated to providing long‑term sustainable solutions for underserved communities around the world. It focuses on clean water access by drilling wells and installing filtration systems, educational programs, healthcare, livelihood training, and environmental action to help families thrive and build self‑reliant futures. The platform highlights impact metrics such as wells built, lives impacted, and communities served, and invites visitors to donate or get involved to help drive positive change globally.",  
  image: "/imgs/villagewell_home.png", // Replace with actual Hero or main screenshot when available
  screenshots: [
    "/imgs/villagewell_programs.png",  // add corresponding images from your assets
    "/imgs/villagewell_impact.png",
    "/imgs/villagewell_getinvolved.png"
  ],
  github: "https://github.com/MNBYTE/The-Village-well",
  live: "https://the-village-well.vercel.app/",
  features: [
    "Empowering Communities Globally",
    "Clean Water & Well Building Programs",
    "Education & Scholarship Support",
    "Livelihood Training & Microfinance",
    "Healthcare Initiatives",
    "Environmental Action Programs",
    "Volunteer & Donation Opportunities"
  ],
  category: "Web Applications",
  year: 2025,
  featured: true,
  status: "complete",
  stats: {
    lines: "12k+ Lines",    // estimated / placeholder
    likes: "420",          // placeholder if you track likes
    date: "Dec 15, 2025"   // approximate rollout date
  },
  badges: {
    version: "v1.0"
  },
  technologies: [
    { name: "Next.js", color: "bg-black" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Framer Motion", color: "bg-purple-500" },
    { name: "Vercel", color: "bg-gray-900" }
  ],
  projectInfo: {
    created: "Nov 12, 2025",
    updated: "Dec 15, 2025",
    category: "Web Applications",
    subCategory: "Nonprofit Impact & Community Platforms",
    tags: ["#community", "#sustainability", "#cleanwater", "#education", "#ngo"]
  },
  tags: ["nextjs", "tailwindcss", "framer-motion", "vercel"]
  },
  {
  id: 4,
  title: "StreamEase",
  description: "A modern movie discovery and streaming companion platform for exploring trending, popular, and top-rated films.",
  fullDescription: "StreamEase is a sleek movie discovery platform designed to help users explore trending, popular, and top-rated films in one seamless interface. Built to enhance the entertainment browsing experience, it allows users to discover new movies, manage a personal watchlist, and explore detailed movie information including ratings, genres, and overviews. With a clean and responsive design, StreamEase delivers an intuitive and engaging way to navigate the world of cinema.",
  image: "/imgs/streamease_home.png",
  screenshots: [
    "/imgs/streamease_watchlist.png",
    "/imgs/streamease_discovery.png",
    "/imgs/streamease_contact.png",
  ],
  github: "https://github.com/MNBYTE/StreamEase",
  live: "https://stream-ease-ten.vercel.app/",
  features: [
    "Trending & Popular Movie Listings",
    "Advanced Movie Search & Discovery",
    "Personal Watchlist Management",
    "Detailed Movie Information Pages",
    "Responsive Design for Mobile & Desktop",
    "Smooth UI Transitions & Animations"
  ],
  category: "Web Applications",
  year: 2025,
  featured: true,
  status: "complete",
  stats: {
    lines: "83.9k Lines",
    likes: "890",
    date: "Oct 7, 2025",
  },
  badges: {
    version: "v1",
  },
  technologies: [
    { name: "Angular", color: "bg-green-500" },
    { name: "Bootstrap", color: "bg-brown" },
    { name: "Movie Discovery Platform", color: "bg-yellow-500" },
    { name: "TECHWIZ - PROJECT", color: "bg-gray-900" },
  ],
  projectInfo: {
    created: "Oct 7, 2025",
    updated: "Dec 3, 2025",
    category: "Web Applications",
    subCategory: "Entertainment & Streaming Platforms",
    tags: ["#movies", "#streaming", "#watchlist", "#angular", "#responsive"],
  },
  tags: ["movies", "streaming", "entertainment", "watchlist"]
  },
  {
    id: 5,
    title: "StayTime",
    description: "A productivity‑focused time tracking and session timer app to help users stay focused and manage work/break intervals.",
    fullDescription: "StayTime is a sleek timer and productivity tool designed to help users track time, structure focused work sessions, and improve daily productivity. Built with modern web technologies including Next.js, Tailwind CSS, and Framer Motion, StayTime features intuitive controls for starting/stopping timers, visual feedback for session progress, and smooth animated transitions to enhance user experience. It is ideal for students, professionals, and anyone looking to manage time more effectively.",
    image: "/imgs/staytime_home.png", // Replace with the main hero screenshot from your assets
    screenshots: [
      "/imgs/staytime_challenges.png",        // Screenshot of the timer UI
      "/imgs/staytime_cmode.png",     // Screenshot of session history or options
      "/imgs/staytime_faq.png"      // Screenshot of settings or statistics
    ],
    github: "https://github.com/MNBYTE/StayTime",
    live: "https://staytime.vercel.app/",
    features: [
      "Interactive Timer (Start / Stop / Reset)",
      "Work & Break Interval Support",
      "Responsive UI with Tailwind CSS",
      "Smooth Animations via Framer Motion",
      "Mobile & Desktop Friendly",
      "No Login Required"
    ],
    category: "Web Applications",
    year: 2025,
    featured: true,
    status: "complete",
    stats: {
      lines: "18k+ Lines",      // Estimated lines of code
      likes: "230",              // Placeholder if you track social likes
      date: "Nov 12, 2025"       // Approximate launch date
    },
    badges: {
      version: "v1.0"
    },
    technologies: [
      { name: "Next.js", color: "bg-black" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
      { name: "Framer Motion", color: "bg-purple-500" },
      { name: "Vercel", color: "bg-gray-900" }
    ],
    projectInfo: {
      created: "Oct 18, 2025",
      updated: "Dec 8, 2025",
      category: "Web Applications",
      subCategory: "Productivity & Time Management Tools",
      tags: ["#productivity", "#timer", "#nextjs", "#tailwindcss", "#framer-motion"]
    },
    tags: ["nextjs", "tailwindcss", "framer-motion", "vercel", "productivity"]
  },
  {
  id: 6,
  title: "Historical Monument",
  description: "An immersive web showcase celebrating nine iconic world historical monuments.",
  fullDescription: "Historical Monument Nine is a curated interactive experience that highlights nine of the world’s most fascinating historical monuments. Built with Next.js for high performance, styled with Tailwind CSS for responsive design, and enhanced with Framer Motion for smooth animations, the site guides users through monument overviews, historical facts, architectural highlights, and cultural significance. It’s designed to educate and inspire global curiosity about heritage and history.",
  image: "/imgs/historicalmonument_home.png", // Main hero image
  screenshots: [
    "/imgs/historicalmonument1.png",      // List of the nine monuments
    "/imgs/historicalmonument2.png",    // Detailed single monument view
    "/imgs/historicalmonument3.png",
    "/imgs/historicalmonument4.png"      // About / info section
  ],
  github: "https://github.com/MNBYTE/HistoricalMonument",
  live: "https://historical-monument-nine.vercel.app/",
  features: [
    "Interactive monument cards with animations",
    "Responsive UI built with Tailwind CSS",
    "Smooth transitions using Framer Motion",
    "Monument description pages with history and facts",
    "Accessible navigation and mobile-friendly layout",
    "Static and dynamic content rendering with Next.js"
  ],
  category: "Web Applications",
  year: 2025,
  featured: true,
  status: "complete",
  stats: {
    lines: "9k+ Lines",     // estimated
    likes: "150",           // placeholder for project popularity
    date: "Dec 10, 2025"    // approximate deploy date
  },
  badges: {
    version: "v1.0"
  },
  technologies: [
    { name: "HTML", color: "bg-black" },
    { name: "Bootstrap", color: "bg-teal-500" },
    { name: "Angular Route", color: "bg-purple-500" },
    { name: "EPROJECT", color: "bg-gray-900" }
  ],
  projectInfo: {
    created: "Nov 25, 2023",
    updated: "Dec 10, 2023",
    category: "Web Applications",
    subCategory: "Educational & Cultural Experiences",
    tags: [
      "#history",
      "#monuments",
      "#interactive",
      "#html",
      "#bootstrap",
      "#angular"
    ]
  },
  tags: ["html", "bootstrap", "angular", "history"]
},
  // ... add screenshots similarly for other projects
];

export const featuredProjects = projects.filter((p) => p.featured);
