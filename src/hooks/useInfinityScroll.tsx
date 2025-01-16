import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = () => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const isResetting = useRef(false);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      if (isResetting.current) return;

      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const maxScroll = container.scrollWidth - container.offsetWidth;

      const singleSetWidth = container.scrollWidth / 3;

      if (container.scrollLeft <= 0) {
        isResetting.current = true;
        container.scrollLeft = singleSetWidth;
        setTimeout(() => {
          isResetting.current = false;
        }, 10);
      } else if (container.scrollLeft >= maxScroll) {
        isResetting.current = true;
        container.scrollLeft = singleSetWidth;
        setTimeout(() => {
          isResetting.current = false;
        }, 10);
      }

      // Encontramos el elemento activo más cercano al centro
      let closestId: number | null = null;
      let closestDistance = Infinity;

      container.querySelectorAll<HTMLElement>(".project-card").forEach((el) => {
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(containerCenter - elCenter);
        const projectId = parseInt(el.dataset.id || "0");
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = projectId;
        }
      });

      setActiveId(closestId);
    };

    const handleVertical = (e: WheelEvent) => {
      e.preventDefault();
      const scrollSpeed = window.innerWidth < 768 ? 1.2 : 2;
      container.scrollLeft += e.deltaY * scrollSpeed;
    };

    container.scrollLeft = container.scrollWidth / 1.85;

    container.addEventListener("scroll", handleScroll);
    document.addEventListener("wheel", handleVertical, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleVertical);
    };
  }, []);

  return { scrollContainer, activeId };
};
