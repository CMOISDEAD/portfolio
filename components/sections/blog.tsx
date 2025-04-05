import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import BlogCard from "@/components/blog-card";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

interface Props {
  posts: BlogPost[];
}

export default function Blog({ posts }: Props) {
  return (
    <section
      id="blog"
      className="px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Artículos Recientes" />
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              url={post.url}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="group inline-flex items-center text-zinc-400 hover:text-white text-lg"
          >
            <span className="mr-2 group-hover:mr-4 transition-all">
              Ver todos los artículos
            </span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
