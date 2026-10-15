import { lazy, Suspense } from "react";
import { useIsClient } from "@/hooks/use-client";

const Dither = lazy(() => import("@/components/dither"));

export function BackgroundDither({
  enableMouseInteraction = true,
}: {
  enableMouseInteraction?: boolean;
}) {
  const isClient = useIsClient();
  if (!isClient) return null;

  return (
    <Suspense fallback={null}>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.01}
      />
    </Suspense>
  );
}
