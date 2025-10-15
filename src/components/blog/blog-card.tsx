"use client";

import { Icons } from "@/components/shared/icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { locale } = useLocalizedRoutes();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <Link href={`/${locale}/blog/${post.slug}`} className="block">
        {post.image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Icons.calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
            <span>•</span>
            <Icons.clock className="h-4 w-4" />
            <span>{post.readingTime} min de lecture</span>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Icons.user className="h-4 w-4" />
            <span>Par {post.author}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
