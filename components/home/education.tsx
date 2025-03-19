const education = [
  {
    title: "Computer Science Engineering",
    company: "Universidad del Quindío",
    description:
      "Studied under the great teachers of logic and mathematics. Thesis on &ldquo;Algorithms and Data Structures in Natural Philosophy.&rdquo;",
    period: "2020-2026",
  },
  {
    title: "Data Analysis",
    company: "DS4A",
    description:
      "Participated in the Data Science for All program, where I learned to analyze and visualize data, and to create machine learning models.",
    period: "2023",
  },
  {
    title: "Software Development Technician",
    company: "SENA",
    description:
      "Studied software development, learning to create web applications and mobile apps.",
    period: "2018-2019",
  },
];

export function Education() {
  return (
    <section>
      <h2 className="mb-4 font-serif text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 sm:mb-6">
        Education
      </h2>

      <div className="space-y-8 sm:space-y-10">
        {education.map((item, i) => (
          <div
            key={i}
            className="border-l border-stone-200 dark:border-stone-700 pl-4 sm:pl-6"
          >
            <h3 className="font-serif text-lg font-medium text-stone-800 dark:text-stone-100 sm:text-xl">
              {item.title}
            </h3>
            <div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
              <span className="text-stone-600 dark:text-stone-400">
                {item.company}
              </span>
              <span className="text-sm text-stone-500 dark:text-stone-500">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
