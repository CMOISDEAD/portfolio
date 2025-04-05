import SectionHeading from "@/components/section-heading";
import SkillBar from "@/components/skill-bar";

interface Skill {
  name: string;
  percentage: number;
}

interface Props {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  return (
    <section
      id="skills"
      className="px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Skills" />
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
