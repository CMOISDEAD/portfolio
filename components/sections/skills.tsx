import SectionHeading from "@/components/section-heading";
import SkillBar from "@/components/skill-bar";
import { skillBars as skills } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 p-3 border-t border-muted">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Skills"
          description="My technical skills and expertise"
        />
        <div className="space-y-10">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
