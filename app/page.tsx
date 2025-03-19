import { About } from "@/components/home/about";
import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/home/projects";
import Siderbar from "@/components/sidebar";
import { Skills } from "@/components/sidebar/skills";
import { Social } from "@/components/sidebar/social";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 dark:bg-stone-900 lg:flex-row">
      <Siderbar />

      <div className="flex justify-center space-x-4 border-b border-stone-200 dark:border-stone-700 py-3 sm:hidden">
        <Social />
      </div>

      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mx-auto max-w-2xl space-y-10 sm:space-y-16">
          <Skills className="sm:hidden" />
          <Art />
          <About />
          <Experience />
          <Projects />
          <Education />
          <footer className="pt-6 text-center text-xs text-stone-500 dark:text-stone-400">
            <p>
              © {new Date().getFullYear()} • Designed with wisdom from the
              ancient world
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

function Art() {
  return (
    <div className="relative w-full h-40 md:h-56 lg:h-64 overflow-hidden">
      <div className="bg-gradient-to-t from-stone-50 dark:from-stone-900 via-stone-50/50 dark:via-stone-900/50 to-transparent h-full w-full absolute inset-0 z-10" />

      <Image
        src="/greek.webp"
        alt="Greek city"
        fill
        sizes="100vw"
        className="object-cover object-bottom"
        priority
      />
    </div>
  );
}
