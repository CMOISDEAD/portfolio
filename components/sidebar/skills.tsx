const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Git & Github",
];

export function Skills({ className }: { className?: string }) {
  return (
    <section className={className}>
      <h2 className="mb-4 font-serif text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-stone-200 dark:bg-stone-700 px-3 py-1 text-xs text-stone-700 dark:text-stone-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
