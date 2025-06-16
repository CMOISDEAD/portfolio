import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface Props {
  onClickAction: (id: string) => void;
}

export default function Hero({ onClickAction }: Props) {
  return (
    <header id="home" className="min-h-screen h-full">
      <section className="flex flex-col justify-center gap-16">
        <div className="container mx-auto">
          <h1 className="w-full text-3xl md:text-8xl lg:text-[8rem] font-bold uppercase my-10">
            Fullstack Developer
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
            <p className="text-muted-foreground md:w-1/3">
              As a fullstack developer with a frontend focus, I specialize in
              building high-performance, accessible user interfaces using
              technologies like Next.js, React, and TypeScript. I’m passionate
              about crafting digital experiences that are both intuitive and
              scalable, driven by clean code and a deep understanding of user
              needs.
            </p>
            <p className="text-muted-foreground md:w-1/3">
              My work includes interactive platforms with 3D maps, CMS
              integration, and optimized rendering strategies like SSR and ISR.
              I bring real value by solving technical challenges, improving
              performance, and collaborating with teams to deliver solutions
              that make a lasting impact.
            </p>
            <Button
              onClick={() => onClickAction("contact")}
              variant="secondary"
              className="md:self-end md:w-1/3"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="hidden md:block mr-20">
          <motion.div
            initial={{
              opacity: 0,
              width: "0%",
            }}
            animate={{
              opacity: 1,
              width: "100%",
              transition: {
                duration: 1.7,
              },
            }}
            className="h-[26rem] rounded-r-full overflow-hidden bg-[url('https://images.pexels.com/photos/356658/pexels-photo-356658.jpeg')] bg-cover bg-top bg-fixed"
          />
        </div>
      </section>
    </header>
  );
}
