export const projects = [
  {
    title: "Fullstack",
    disabled: false,
    childs: [
      {
        title: "Librarian",
        image: "assets/projects/librarian.png",
        description:
          "Aplicacion de escritorio multiplataforma para la administración y lectura de libros virtuales, creado a partir de tecnologias web, altamente configurable y extendible.",
        year: "2024",
        repo: "https://github.com/CMOISDEAD/librarian",
        tech: ["React", "Electron", "Prisma", "Redux", "TailwindCSS", "Sass"],
      },
      {
        title: "SwimSchool Manager",
        image: "assets/projects/dashboard.png",
        description:
          "Creación de una aplicación web integral para la gestión de escuelas de natación. La plataforma facilita el registro y seguimiento de estudiantes, profesores y personal administrativo, además de permitir la organización y administración de eventos, competiciones y clases. Un sistema completo para optimizar la gestión y comunicación en escuelas de natación.",
        year: "2024",
        // repo: "https://github.com/CMOISDEAD/doomguy",
        // link: "https://doomguy.vercel.app/",
        tech: ["React.js", "Astro", "SEO", "TailwindCSS"],
      },
      {
        title: "Comunidad Deportiva",
        image: "assets/projects/comunidad.png",
        description:
          "Desarrollo de una página web deportiva que destaca a los deportistas de la región mediante un mapa interactivo. La aplicación permite visualizar información relevante sobre cada atleta y su trayectoria, utilizando tecnologías de geolocalización para enriquecer la experiencia del usuario.",
        year: "2024",
        repo: "https://github.com/CMOISDEAD/comunidad",
        link: "https://comunidad-xi.vercel.app/",
        tech: ["React", "Electron", "Prisma", "Redux", "TailwindCSS", "Sass"],
      },
      {
        title: "Online Library",
        image: "assets/projects/online_library.png",
        description:
          "Aplicacion que intenta crear una comunidad de lectores online, donde los usuarios tienen a su disposicion una plataforma la cual les permite leer libros de manera gratuita, ademas de poder interactuar dentro la aplicación.",
        year: "2023",
        repo: "https://github.com/CMOISDEAD/online-library",
        link: "https://onlinelibrarian.vercel.app/",
        tech: [
          "Next.js",
          "Tailwind.css",
          "MongoDB",
          "Prisma",
          "Express",
          "JWT",
        ],
      },

      {
        title: "Doomguy - plataforma API",
        image: "assets/projects/doomguy.png",
        description:
          "Doomguys es una aplicacion de escritorio/web para hacer peticiones HTTP, similar a Postman, pero con un diseño mas minimalista y moderno, su objetivo es hacer una aplicacion sin tantas caracteristicas innecesarias que logre cumplir las necesidades.",
        year: "2023",
        repo: "https://github.com/CMOISDEAD/doomguy",
        link: "https://doomguy.vercel.app/",
        tech: ["React.js", "Astro", "SEO", "TailwindCSS"],
      },
      {
        title: "Xcution - Algoritmos y codificación",
        image: "assets/projects/xcution.png",
        description:
          "Aplicación online para resolver problemas algorítmicos y de codificación destinados a que los usuarios practiquen la codificación.",
        year: "2022",
        repo: "https://github.com/CMOISDAED/judge-frontend",
        // link: "https://judge-frontend.vercel.app/",
        tech: ["Next.js", "Node.js", "Nest.js", "Docker", "Tailwind"],
      },
      {
        title: "DoomDraw - Pizarra online",
        image: "assets/projects/doomdraw.png",
        description:
          "Aplicación que simula una pizarra online, donde los usuarios pueden dibujar y compartir sus dibujos con otros usuarios.",
        year: "2023",
        repo: "https://github.com/CMOISDEAD/doomdraw",
        link: "https://doom-scheduler.vercel.app/",
        tech: ["React", "Typescript", "TailwindCSS"],
      },
      {
        title: "Svelte Scheduler",
        image: "assets/projects/scheduler.png",
        description:
          "Aplicacion de calendario y tareas enfoncado en el minimalismo y la funcionalidad al usuario, cread con Svelte.",
        year: "2023",
        link: "https://doom-scheduler.vercel.app/",
        tech: ["Svelte", "TailwindCSS", "PWA"],
      },
      {
        title: "Doomsday - Blog Personal",
        image: "assets/projects/doomsday.png",
        description:
          "Blog enfocado a hablar sobre temas de desarrollo y otros temas relacionados con las ciencias de la computación.",
        year: "2023",
        link: "https://github.com/CMOISDEAD/cmoisdead.github.io",
        tech: ["React.js", "Astro", "SEO", "TailwindCSS"],
      },
    ],
  },
  {
    title: "Mobile",
    disabled: true,
    childs: [
      {
        title: "TODO / React Native App",
        image:
          "https://user-images.githubusercontent.com/51010598/251323461-983a61b5-b827-44a3-ba7d-fe10660563e1.png",
        description:
          "Aplicacion de manejo de tiempo y tareas, creada en React Native",
        year: "2023",
        link: "#",
        tech: ["Next.js", "Electron", "Redux", "TailwindCSS"],
      },
    ],
  },
];
