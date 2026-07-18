import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(date),
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <Link href="/journal" className="text-sm tracking-wide underline underline-offset-4">
        ← Journal
      </Link>

      <span className="mt-8 block text-xs tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {formatDate(post.date)}
      </span>
      <h1 className="mt-2 font-sans text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        {post.title}
      </h1>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden">
        {post.image ? (
          <Image src={post.image} alt="" fill className="object-cover" />
        ) : (
          <ImagePlaceholder label="[placeholder-image.jpg]" className="h-full w-full" />
        )}
      </div>

      <div
        className="mt-10 space-y-5 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
