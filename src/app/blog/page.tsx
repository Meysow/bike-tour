import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}

