import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getAllPosts } from "@/lib/posts";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(date),
  );
}

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <h1 className="font-sans text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        Journal
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
        Notes on formulation, chemistry, and the research behind each scent.
      </p>

      <div className="mt-14 space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <Link href={`/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                ) : (
                  <ImagePlaceholder label="[placeholder-image.jpg]" className="h-full w-full" />
                )}
              </div>
              <span className="mt-6 block text-xs tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                {formatDate(post.date)}
              </span>
              <h2 className="mt-2 font-sans text-2xl font-medium tracking-tight text-zinc-900 transition-opacity group-hover:opacity-70 dark:text-zinc-50">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
