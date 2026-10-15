import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** False during prerender and hydration, true afterwards. */
export function useIsClient() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const useIsMobile = () => useMediaQuery("(max-width: 767px)");
