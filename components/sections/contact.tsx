import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/social-links";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  username?: string;
}

interface Props {
  socialLinks: SocialLink[];
}

export default function Contact({ socialLinks }: Props) {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Contact" />
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-zinc-400 mb-10 text-lg">
              Interested in working together or have any questions? Fill out the
              form or contact me directly through the following channels:
            </p>
            <SocialLinks
              links={socialLinks}
              direction="vertical"
              showLabels={true}
              iconSize={20}
              className="space-y-6"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
