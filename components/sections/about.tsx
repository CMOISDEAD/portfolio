"use client";

import { Badge } from "../ui/badge";

interface Props {
  paragraphs: string[];
  skills: {
    frontend: string[];
    backend: string[];
    devops: string[];
  };
}

export default function About({ paragraphs, skills }: Props) {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-400 mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-12">
            <SkillCategory title="Frontend" skills={skills.frontend} />
            <SkillCategory title="Backend" skills={skills.backend} />
            <SkillCategory title="DevOps" skills={skills.devops} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-white">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <Badge key={i}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}
