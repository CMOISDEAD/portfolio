export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  year: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "daidokoro",
    title: "Daidokoro",
    description:
      "Led the end-to-end development of Daidokoro’s production-ready web platform for its Miami-based operations, delivering a unified experience for precision wood cutting, edge-banding, lamination, and custom 3D cabinet design services. Implemented SSR and ISR with Next.js to enhance performance and SEO, reducing load times and improving service discoverability. Integrated a headless Strapi CMS deployed on a self-managed Linux VPS with JWT-based authentication and a MySQL database, enabling scalable content management, service catalogs, and project galleries tailored to a digital-first carpentry workflow.",
    tech: ["Next.js", "Strapi", "MySQL", "JWT", "Linux VPS"],
    year: "2025",
    link: "https://daidokoro-inc.com/",
    image: "/projects/daidokoro.webp",
  },
  {
    slug: "agrobiologicos-quindio",
    title: "Agrobiológicos Quindío",
    description:
      "Led the end-to-end development of a scalable production-ready web platform. Implemented SSR and ISR with Next.js to optimize performance and SEO, significantly reducing page load times. Integrated a headless Strapi CMS deployed on a self-managed Linux VPS, secured with JWT-based authentication, and backed by a MySQL database for reliable content and data management.",
    tech: ["Next.js", "Strapi", "MySQL", "JWT", "Linux VPS"],
    year: "2025",
    link: "https://agrobiologicosquindio.com/",
    image: "/projects/agro.webp",
  },
  {
    slug: "comunidad-xi",
    title: "Comunidad XI",
    description:
      "Designed and developed an interactive platform to showcase athletes through an immersive 3D map experience. Built a responsive and accessible UI with React and Tailwind CSS, integrated Mapbox for real-time 3D navigation, and optimized media delivery to ensure smooth performance across devices.",
    tech: ["React", "Tailwind CSS", "Mapbox", "Three.js"],
    year: "2024",
    link: "https://comunidad-xi.vercel.app/",
    image: "/projects/comunidad.webp",
  },
  {
    slug: "ancient-map",
    title: "Ancient Map",
    description:
      "An interactive global 3D map for exploring historical empires and cultures across key moments in time. Focused on spatial storytelling, data visualization, and intuitive exploration using Mapbox and modern web technologies.",
    tech: ["React", "Mapbox", "WebGL", "TypeScript"],
    year: "2024",
    link: "https://ancient-map.vercel.app/",
    image: "/projects/ancient.webp",
  },
  {
    slug: "chat-geolocalizado",
    title: "Chat Geolocalizado",
    description:
      "(WIP) Developed a real-time geolocated video and audio chat platform focused on proximity-based communication. Implemented low-latency WebRTC calls with screen sharing and real-time media controls. Integrated geolocation and interactive maps to enable nearby user discovery, emphasizing scalability, performance, and seamless real-time interaction.",
    tech: [
      "Next.js",
      "Nest.js",
      "Postgres",
      "WebRTC",
      "Redis",
      "JWT",
      "Linux VPS",
    ],
    year: "2026",
    link: "https://github.com/CMOISDEAD",
    image: "/projects/ming-room.webp",
  },
  {
    slug: "digital-gallery",
    title: "Digital Gallery",
    description:
      "A conceptual and immersive virtual art gallery combining classical paintings with modern digital interaction. Features fluid animations, drag-based navigation, and a minimalist aesthetic, with a strong emphasis on motion design and user experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "use-gesture"],
    year: "2024",
    link: "https://digital-gallery-delta.vercel.app/",
    image: "/projects/digital.webp",
  },
  {
    slug: "monkeytype-clone",
    title: "MonkeyType Clone",
    description:
      "A modern typing test application inspired by MonkeyType, featuring code typing modes, customizable keyboard layouts, and detailed performance metrics. Built with a futuristic UI and a strong focus on responsiveness and precision.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    link: "https://monkey-psi-sen.vercel.app",
    image: "/projects/monkey.webp",
  },
  {
    slug: "dotrs",
    title: "dotrs",
    description:
      "A minimalist dotfiles manager written in Rust, focused on speed, clarity, and full user control. Designed with a no-bloat philosophy, offering a clean and predictable workflow for managing development environments efficiently.",
    tech: ["Rust"],
    year: "2025",
    link: "https://github.com/CMOISDEAD/dotrs",
    image: "/projects/dotrs.webp",
  },
  {
    slug: "balance",
    title: "Balance",
    description:
      "A lightweight and minimalist expense tracking mobile app focused on usability and clarity. Built to help users manage daily expenses efficiently through a clean interface and intuitive interactions.",
    tech: ["Flutter", "Dart"],
    year: "2024",
    link: "https://github.com/CMOISDEAD/balance",
    image: "/projects/balance.webp",
  },
];

export function findProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}
