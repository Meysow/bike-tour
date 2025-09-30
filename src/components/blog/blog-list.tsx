import { BlogPost } from "@/types/blog";
import { BlogCard } from "./blog-card";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Aucun article pour le moment
          </h3>
          <p className="text-muted-foreground">
            Les premiers articles arrivent bientôt ! Revenez plus tard pour
            découvrir nos conseils et histoires sur le cyclisme à Paris.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Derniers articles
        </h2>
        <p className="text-muted-foreground">
          Découvrez nos conseils et histoires sur le cyclisme à Paris
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
