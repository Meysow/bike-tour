import { BlogPost } from "@/types/blog";
import { BlogCard } from "./blog-card";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-muted-foreground">
          Aucun article pour le moment
        </h3>
        <p className="text-muted-foreground mt-2">
          Les premiers articles arrivent bientôt !
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

