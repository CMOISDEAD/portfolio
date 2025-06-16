"use client";

import { TextReveal } from "../magicui/text-reveal";

interface Props {
  paragraphs: string[];
  skills: {
    frontend: string[];
    backend: string[];
    devops: string[];
  };
}

export default function About({ paragraphs }: Props) {
  return (
    <section id="about" className="py-20">
      <TextReveal className="">{paragraphs.join(" ")}</TextReveal>
    </section>
  );
}
