import { Helmet } from "react-helmet";
import { Header } from "@/components/ui/header";
import { AnimatedLayout } from "@/components/layout/animated";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { Carousel } from "@/components/home/carousel";

export const Home = () => {
  return (
    <AnimatedLayout>
      <Helmet>
        <title>Camilo Davila; - Fullstack Developer</title>
        <meta
          name="description"
          content="Fullstack developer passionate to create innovative and usefull web experiences. Specialized in React, Next.js, Node.js, and MongoDB. Always looking for new challenges to learn and grow as a developer."
        />
      </Helmet>

      <Header title="Camilo Davila;" />

      <Navigation />

      <Carousel />
    </AnimatedLayout>
  );
};
