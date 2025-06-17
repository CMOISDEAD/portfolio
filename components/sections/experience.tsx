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
    <section id="experience" className="py-20 p-3 border-t border-muted">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          description="My professional journey so far"
        />
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="text-muted-foreground text-sm">
                  {exp.period}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 capitalize">
                  {exp.title}
                </h3>
                <div className="text-muted-foreground mb-4 capitalize">
                  {exp.company}
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
