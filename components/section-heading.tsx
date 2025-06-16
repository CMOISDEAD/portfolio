import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  className = "",
}: Props) {
  return (
    <header className="mb-16 space-y-4">
      <h2 className={cn("text-3xl md:text-4xl font-bold uppercase", className)}>
        {title}
      </h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </header>
  );
}
