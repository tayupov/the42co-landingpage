import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content/journal");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  return matter(fs.readFileSync(filePath, "utf8"));
}

export function getAllPosts(): PostMeta[] {
  const slugs = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));

  return slugs
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = readPostFile(slug);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readPostFile(slug);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    ...(data as Omit<PostMeta, "slug">),
    contentHtml: processed.toString(),
  };
}
