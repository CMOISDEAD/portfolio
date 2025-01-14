import { AnimatedLayout } from "@/components/layout/animated";
import { Helmet } from "react-helmet";

export const About = () => {
  return (
    <AnimatedLayout>
      <Helmet>
        <title>About - Camilo Davila;</title>
        <meta
          name="description"
          content="Fullstack developer passionate to create innovative and usefull web"
        />
      </Helmet>

      <p>About</p>
    </AnimatedLayout>
  );
};
