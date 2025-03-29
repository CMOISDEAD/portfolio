import { About } from "@/components/home/about";
import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { Header } from "@/components/home/header";
import { Projects } from "@/components/home/projects";
import Siderbar from "@/components/sidebar";
import { Skills } from "@/components/sidebar/skills";
import { Social } from "@/components/sidebar/social";

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
          <Header />
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
