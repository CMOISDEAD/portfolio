"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CursorButton } from "../providers/cursor-provider";

type PostType = {
  slug: string;
  post: {
    title: string;
    description: string;
    pubDate: string;
    time: string;
  };
};

export function Post() {
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await fetch("https://blog.camilodavila.xyz/methods.json");
        const result = await data.json();
        setPost(result);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (!post) {
    return null;
  }

  return (
    <CursorButton>
      <Link
        href={`https://blog.camilodavila.xyz/blog/${post.slug}`}
        className="mt-3 text-xs md:text-sm font-medium text-stone-900 dark:text-stone-100 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="w-full bg-stone-400 dark:bg-stone-500 text-stone-700 dark:text-stone-300 shadow-md border border-stone-500 dark:border-stone-400">
            <CardContent className="md:p-4 flex flex-col items-start">
              <div className="hidden md:block w-full border-b border-stone-500 dark:border-stone-400 pb-2 mb-3">
                <h3 className="text-sm font-serif font-semibold uppercase tracking-wide line-clamp-3">
                  {post.post.title}
                </h3>
              </div>
              Read More →
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </CursorButton>
  );
}
