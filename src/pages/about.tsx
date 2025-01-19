import { AnimatedLayout } from "@/components/layout/animated";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { useRef } from "react";
import { Helmet } from "react-helmet";

export const About = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <AnimatedLayout ref={container}>
      <Helmet>
        <title>About - Camilo Davila;</title>
        <meta
          name="description"
          content="Fullstack developer passionate to create innovative and usefull web"
        />
      </Helmet>

      <Navigation container={container} />

      <p>About</p>
    </AnimatedLayout>
  );
};
