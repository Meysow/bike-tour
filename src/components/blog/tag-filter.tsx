"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { BlogPost } from "@/types";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface TagFilterProps {
  posts: BlogPost[];
  onFilteredPosts: (filteredPosts: BlogPost[]) => void;
}

export function TagFilter({ posts, onFilteredPosts }: TagFilterProps) {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "blog");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extraire tous les tags uniques des posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap((post) => post.tags);
    return Array.from(new Set(tags)).sort();
  }, [posts]);

  // Filtrer les posts selon les tags sélectionnés
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts;
    }
    return posts.filter((post) =>
      selectedTags.every((tag) => post.tags.includes(tag))
    );
  }, [posts, selectedTags]);

  // Mettre à jour les posts filtrés quand les tags changent
  useEffect(() => {
    onFilteredPosts(filteredPosts);
  }, [filteredPosts, onFilteredPosts]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          {t.list.filterByTags}
        </span>
        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllTags}
            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3 mr-1" />
            {t.list.clearAll}
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Badge
              key={tag}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:scale-105 ${
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
              {isSelected && <X className="h-3 w-3 ml-1" />}
            </Badge>
          );
        })}
      </div>

      {selectedTags.length > 0 && (
        <div className="text-sm text-muted-foreground">
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1
            ? t.list.articlesFound
            : t.list.articlesFoundPlural}
          {selectedTags.length > 1 && (
            <span className="ml-1">{t.list.containingAllSelectedTags}</span>
          )}
        </div>
      )}
    </div>
  );
}
