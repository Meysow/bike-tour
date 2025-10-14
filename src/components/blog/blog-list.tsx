"use client";

import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { BlogPost } from "@/types/blog";
import { useState } from "react";
import { BlogCard } from "./blog-card";
import { TagFilter } from "./tag-filter";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "blog");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {t.list.noArticlesTitle}
          </h3>
          <p className="text-muted-foreground">
            {t.list.noArticlesDescription}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t.list.latestArticles}
        </h2>
        <p className="text-muted-foreground">{t.list.subtitle}</p>
      </div>

      {/* Filtre par tags */}
      <TagFilter posts={posts} onFilteredPosts={setFilteredPosts} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
