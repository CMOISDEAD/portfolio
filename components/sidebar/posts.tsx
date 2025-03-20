import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type PostType = {
  slug: string;
  post: {
    title: string;
    description: string;
    pubDate: string;
    time: string;
  };
};

async function getPost(): Promise<PostType> {
  const data = await fetch("https://blog.camilodavila.xyz/methods.json");
  return data.json();
}

export async function Post() {
  const { slug, post } = await getPost();

  return (
    <Card className="w-full bg-stone-400 dark:bg-stone-500 text-stone-700 dark:text-stone-300 shadow-md border border-stone-500 dark:border-stone-400">
      <CardContent className="md:p-4 flex flex-col items-start">
        <div className="hidden md:block w-full border-b border-stone-500 dark:border-stone-400 pb-2 mb-3">
          <h3 className="text-sm font-serif font-semibold uppercase tracking-wide line-clamp-3">
            {post.title}
          </h3>
        </div>
        <p className="text-sm md:text-base font-medium leading-tight"></p>
        <Link
          href={`https://blog.camilodavila.xyz/blog/${slug}`}
          className="mt-3 text-xs md:text-sm font-medium text-stone-900 dark:text-stone-100 hover:underline"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
}
