import { Github, Linkedin, Mail } from "lucide-react";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  // { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/CMOISDEAD",
    username: "github.com/CMOISDEAD",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/camilo-esteban-davila",
    icon: Linkedin,
    username: "linkedin.com/in/camilo-esteban-davila",
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com",
  //   icon: Twitter,
  //   username: "twitter.com/cmoisdead",
  // },
  {
    name: "Email",
    url: "mailto:camiloesteban661@gmail.com",
    icon: Mail,
    username: "camiloesteban661@gmail.com",
  },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"],
  devops: ["Docker", "CI/CD", "AWS", "Vercel", "GitHub Actions"],
};

export const skillBars = [
  { name: "JavaScript/TypeScript", percentage: 90 },
  { name: "React & Next.js", percentage: 85 },
  { name: "Node.js & Express", percentage: 80 },
  { name: "HTML & CSS", percentage: 95 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "PostgreSQL & MongoDB", percentage: 75 },
  { name: "Docker & CI/CD", percentage: 70 },
  { name: "AWS & Cloud Services", percentage: 65 },
];

export const projects = [
  {
    title: "Agrobiológicos del Quindío",
    description:
      "Developed a scalable website that enhanced Agrobiológicos del Quindío’s online presence, improving customer engagement and accessibility to their products. Built with Next.js (ISR), integrated with Strapi CMS, and deployed on a VPS for optimal performance.",
    image: "/projects/agro.webp",
    tags: ["Next.js", "SSR", "Strapi", "MySQL", "TailwindCSS"],
    demoUrl: "https://agrobiologicosquindio.com",
    repoUrl: "https://github.com/CMOISDEAD",
  },
  {
    title: "Comunidad Deportiva",
    description:
      "Interactive web platform for showcasing athletes, using a 3D map as the main interface. The project included everything from design conception to full front-end implementation, integrating multimedia information (photos, biographies, etc.) and optimizing for a smooth user experience.",
    image: "/projects/comunidad.webp",
    tags: ["React", "Mapbox", "Tailwind CSS", "Vite"],
    demoUrl: "https://comunidad-xi.vercel.app",
    repoUrl: "https://github.com/CMOISDEAD",
  },
  {
    title: "Ancient Map",
    description:
      "A interactive map of ancient civilizations, featuring detailed information about historical events, cultures, and landmarks. The project aims to educate users about the rich history of ancient civilizations and their contributions to the world.",
    image: "/projects/ancient.webp",
    tags: ["Next.js", "Mapbox", "TailwindCSS"],
    demoUrl: "https://ancient-map.vercel.app",
    repoUrl: "https://github.com/CMOISDEAD/ancient-map",
  },
  {
    title: "Digital Gallery",
    description:
      "A conceptual project based on a modern and minimalist design, combining classical art with digital interactivity. Explore a collection of iconic paintings in a virtual gallery, featuring fluid animations, drag gestures, and an immersive user experience. Developed with React, Tailwind CSS, Framer Motion, and use-gesture.",
    image: "/projects/digital.webp",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://digital-gallery-delta.vercel.app/",
    repoUrl: "https://github.com/CMOISDEAD/digital-gallery",
  },
];

export const experiences = [
  {
    period: "2025",
    title: "Fullstack Developer",
    company: "Agrobiológicos del Quindío",
    description:
      "Developed a modern and scalable website for Agrobiológicos del Quindío, improving their digital presence and making their products and services more accessible to clients. This platform helped strengthen customer trust by providing clear and updated information about the company, its products, and industry news. The website, built with Next.js using ISR, ensures high performance and fast updates. Integrated with Strapi CMS for seamless content management and deployed on a self-configured VPS for stability and scalability.",
  },
  {
    period: "2024",
    title: "Frontend Developer",
    company: "Private Client",
    description:
      "Built an interactive web platform to showcase athletes through a 3D map interface, offering an engaging and intuitive way to explore athlete profiles. This project enhanced visibility and accessibility for sports professionals, creating a dynamic user experience. The platform was optimized for mobile devices, ensuring a smooth and visually appealing interface.",
  },
  {
    period: "2024",
    title: "Fullstack Developer",
    company: "swimming Academy",
    description:
      "Created a web-based management system that streamlined student administration, scheduling, and competition tracking for a swimming academy. This system optimized internal workflows, reducing manual processes and improving overall efficiency. Developed with React and Express.js, using JWT authentication and MongoDB for data management, ensuring a secure and scalable architecture.",
  },
];

export const testimonials = [
  {
    quote:
      "Juan es un desarrollador excepcional que entrega soluciones de alta calidad consistentemente. Su atención al detalle y conocimiento técnico son impresionantes.",
    author: "María González",
    position: "CTO, Tech Innovations",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Trabajar con Juan fue una experiencia fantástica. Entendió nuestras necesidades rápidamente y entregó un producto que superó nuestras expectativas.",
    author: "Carlos Rodríguez",
    position: "Founder, StartupX",
    image: "/placeholder.svg?height=60&width=60",
  },
];

export const blogPosts = [
  {
    title: "Optimizando el rendimiento en aplicaciones Next.js",
    excerpt:
      "Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones Next.js y ofrecer una experiencia de usuario excepcional.",
    date: "15 de Marzo, 2023",
    image: "/placeholder.svg?height=300&width=600",
    url: "#",
  },
  {
    title: "Introducción a TypeScript para desarrolladores JavaScript",
    excerpt:
      "Una guía completa para comenzar con TypeScript si ya tienes experiencia con JavaScript. Aprende tipos, interfaces y más.",
    date: "28 de Febrero, 2023",
    image: "/placeholder.svg?height=300&width=600",
    url: "#",
  },
];

export const aboutText = [
  "I'm a passionate fullstack developer dedicated to creating elegant and functional web solutions. With over 5 years of experience in web development, I specialize in building modern applications using cutting-edge technologies.",
  "My approach combines strong technical skills with an eye for design and user experience. I firmly believe that the best software not only works well but is also intuitive and enjoyable to use, driving both user engagement and business value.",
  "Beyond coding, I'm constantly expanding my knowledge by exploring new technologies, sharing insights on my blog, and contributing to open-source projects that align with my commitment to innovation and community-driven development.",
];
