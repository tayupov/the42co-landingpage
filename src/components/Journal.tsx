"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { PostMeta } from "@/lib/posts";

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(date),
  );
}

export default function Journal({ posts }: { posts: PostMeta[] }) {
  const latest = posts.slice(0, 2);

  return (
    <section className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          {...REVEAL}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="font-sans text-4xl font-medium tracking-tight sm:text-5xl">Journal</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
              Notes on formulation, chemistry, and the research behind each scent.
            </p>
          </div>
          <Link
            href="/journal"
            className="inline-block shrink-0 text-sm tracking-wide underline underline-offset-4"
          >
            View all posts
          </Link>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {latest.map((post, index) => (
            <motion.div
              key={post.slug}
              {...REVEAL}
              transition={{ ...REVEAL.transition, delay: index * 0.12 }}
            >
              <Link href={`/journal/${post.slug}`} className="group block">
                <span className="text-xs tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                  {formatDate(post.date)}
                </span>
                <h3 className="mt-1 font-sans text-xl font-medium tracking-tight transition-opacity group-hover:opacity-70 sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {post.excerpt}
                </p>
                <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden">
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
