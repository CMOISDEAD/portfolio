import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Post() {
  return (
    <Card className="w-full bg-stone-400 dark:bg-stone-500 text-stone-700 dark:text-stone-300 shadow-md border border-stone-500 dark:border-stone-400">
      <CardContent className="md:p-4 flex flex-col items-start">
        <div className="hidden md:block w-full border-b border-stone-500 dark:border-stone-400 pb-2 mb-3">
          <h3 className="text-sm font-serif font-semibold uppercase tracking-wide">
            Latest Blog Post
          </h3>
        </div>
        <p className="text-sm md:text-base font-medium leading-tight">
          How to configure ESLint and Prettier in a Next.js project
        </p>
        <Link
          href="https://blog.camilodavila.xyz"
          className="mt-3 text-xs md:text-sm font-medium text-stone-900 dark:text-stone-100 hover:underline"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
}
