import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";
import CircularText from "../ui/circular-text";
import ContactForm from "../contact-form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 border-t border-muted bg-gradient-to-br from-background via-accent to-stone-900/80"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Contact" />
        <div className="grid md:grid-cols-2 gap-16 pb-20">
          <div>
            <p className="text-muted-foreground mb-10 text-lg">
              Interested in working together or have any questions? Fill out the
              form or contact me directly through the following channels:
            </p>
            <SocialLinks
              direction="vertical"
              showLabels={true}
              iconSize={20}
              className="space-y-6"
            />
          </div>
          <CircularText
            text="PORTFOLIO*CAMILO*DAVILA*"
            onHover="slowDown"
            spinDuration={20}
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
