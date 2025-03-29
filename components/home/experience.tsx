"use client";
import { motion } from "motion/react";

const experience = [
  {
    title: "Full Stack Developer",
    company: "Agrobiológicos del Quindío",
    period: "2025",
    description:
      "Developed a modern and scalable website for Agrobiológicos del Quindío, improving their digital presence and making their products and services more accessible to clients. This platform helped strengthen customer trust by providing clear and updated information about the company, its products, and industry news. The website, built with Next.js using ISR, ensures high performance and fast updates. Integrated with Strapi CMS for seamless content management and deployed on a self-configured VPS for stability and scalability.",
  },
  {
    title: "Frontend Developer",
    company: "Private Client",
    period: "2024",
    description:
      "Built an interactive web platform to showcase athletes through a 3D map interface, offering an engaging and intuitive way to explore athlete profiles. This project enhanced visibility and accessibility for sports professionals, creating a dynamic user experience. The platform was optimized for mobile devices, ensuring a smooth and visually appealing interface.",
  },
  {
    title: "Full Stack Developer",
    company: "Swimming Academy",
    period: "2024",
    description:
      "Created a web-based management system that streamlined student administration, scheduling, and competition tracking for a swimming academy. This system optimized internal workflows, reducing manual processes and improving overall efficiency. Developed with React and Express.js, using JWT authentication and MongoDB for data management, ensuring a secure and scalable architecture.",
  },
];

export function Experience() {
  return (
    <section>
      <h2 className="mb-4 font-serif text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 sm:mb-6">
        Experience
      </h2>

      <div className="space-y-8 sm:space-y-10">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="border-l border-stone-200 dark:border-stone-700 pl-4 sm:pl-6"
          >
            <h3 className="font-serif text-lg font-medium text-stone-800 dark:text-stone-100 sm:text-xl">
              {job.title}
            </h3>
            <div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
              <span className="text-stone-600 dark:text-stone-400">
                {job.company}
              </span>
              <span className="text-sm text-stone-500 dark:text-stone-500">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {job.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
