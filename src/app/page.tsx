import BrandStory from "@/components/BrandStory";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <BrandStory />
      <Journal posts={posts} />
    </>
  );
}
