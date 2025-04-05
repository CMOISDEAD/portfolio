import SectionHeading from "@/components/section-heading";

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface Props {
  experiences: Experience[];
}

export default function Experience({ experiences }: Props) {
  return (
    <section
      id="experience"
      className="px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="text-zinc-400 text-sm">{exp.period}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <div className="text-zinc-400 mb-4">{exp.company}</div>
                <p className="text-zinc-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
