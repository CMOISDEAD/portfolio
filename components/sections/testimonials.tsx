import SectionHeading from "@/components/section-heading";
import TestimonialCard from "@/components/testimonial-card";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
  return (
    <section
      id="testimonials"
      className="px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Testimonios" />
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
