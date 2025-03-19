import { Calendar, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Skills } from "./skills";
import { Social } from "./social";
import { Post } from "./posts";
import Link from "next/link";

export default function Siderbar() {
  return (
    <aside className="w-full border-b border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 p-6 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:p-8 xl:w-80">
      <div className="flex flex-col items-center justify-between lg:h-full">
        <div className="flex w-full flex-row items-center gap-4 lg:flex-col lg:items-center lg:gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24 lg:h-32 lg:w-32">
            <Image
              src="https://github.com/CMOISDEAD.png"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <div className="lg:text-center">
            <h1 className="font-serif text-xl font-medium text-stone-800 dark:text-stone-100 sm:text-2xl">
              Camilo Davila
            </h1>
            <h2 className="font-serif text-base text-stone-600 dark:text-stone-400 sm:text-lg">
              Fullstack Developer
            </h2>
          </div>

          <div className="ml-auto flex flex-col gap-2 lg:ml-0 lg:mt-4 lg:w-full lg:pt-2">
            <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
              <MapPin size={16} className="shrink-0" />
              <span className="text-sm">Armenia, Colombia</span>
            </div>
            <Link
              href="mailto:camiloesteban661@gmail.com"
              target="_blank"
              className="flex items-center gap-2 text-stone-700 dark:text-stone-300"
            >
              <Mail size={16} className="shrink-0" />
              <span className="text-sm">camiloesteban661@gmail.com</span>
            </Link>
            <div className="hidden items-center gap-2 text-stone-700 dark:text-stone-300">
              <Calendar size={16} className="shrink-0" />
              <span className="text-sm">Available from June</span>
            </div>
          </div>
        </div>

        <Post />

        <div className="mt-8 hidden w-full space-y-6 sm:block lg:mt-0">
          <Skills />

          <div>
            <h3 className="mb-3 font-serif text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Languages
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="dark:text-stone-300">Spanish</span>
                <span className="text-stone-500 dark:text-stone-400">
                  Native
                </span>
              </div>
              <div className="flex justify-between">
                <span className="dark:text-stone-300">English</span>
                <span className="text-stone-500 dark:text-stone-400">
                  Fluent
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 pt-2">
            <Social />
          </div>
        </div>
      </div>
    </aside>
  );
}
