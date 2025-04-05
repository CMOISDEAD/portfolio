interface Props {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className = "" }: Props) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-16 ${className}`}>
      {title}
    </h2>
  );
}
