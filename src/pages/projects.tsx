import Dither from "@/components/dither";

export function ProjectPage() {
  return (
    <main className="flex h-full">
      <div className="bg-card w-1/6 border-r"></div>
      <div className="bg-secondary w-2/6 border-r"></div>
      <div className="bg-background grow">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.01}
        />
      </div>
    </main>
  );
}
