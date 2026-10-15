import { lazy, Suspense } from "react";
import { useIsClient } from "@/hooks/use-client";

const Dither = lazy(() => import("@/components/dither"));

let webglSupported: boolean | undefined;
function supportsWebGL() {
  if (webglSupported === undefined) {
    try {
      const canvas = document.createElement("canvas");
      webglSupported = !!(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
    } catch {
      webglSupported = false;
    }
  }
  return webglSupported;
}

export function BackgroundDither({
  enableMouseInteraction = true,
}: {
  enableMouseInteraction?: boolean;
}) {
  const isClient = useIsClient();
  if (!isClient || !supportsWebGL()) return null;

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
