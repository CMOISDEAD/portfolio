import { useRef } from "react";
import { Helmet } from "react-helmet";
import { AnimatedLayout } from "@/components/layout/animated";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { Hero } from "@/components/about/hero";

export const About = () => {
  const container = useRef(null);

  return (
    <AnimatedLayout ref={container}>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Fullstack developer passionate to create innovative and useful web"
        />
      </Helmet>
      <Navigation container={container} />
      <Hero container={container} />
    </AnimatedLayout>
  );
};
