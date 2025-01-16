import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const maxScroll = container.scrollWidth - container.offsetWidth;

      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2;
      } else if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = container.scrollWidth / 5;
      }

      let closestId: number | null = null;
      let closestDistance = Infinity;

      container
        .querySelectorAll<HTMLElement>(".project-card")
        .forEach((el, index) => {
          const elCenter = el.offsetLeft + el.offsetWidth / 2;
          const distance = Math.abs(containerCenter - elCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = index;
          }
        });

      setActiveId(closestId);
    };

    const handleVertical = (e: WheelEvent) => {
      container.scrollLeft += e.deltaY;
    };

    container.scrollLeft =
      container.scrollWidth / 2 - container.offsetWidth / 2;

    container.addEventListener("scroll", handleScroll);
    document.addEventListener("wheel", handleVertical, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleVertical);
    };
  }, []);
  return { scrollContainer, activeId };
};
