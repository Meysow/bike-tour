import { CalendarIcon, ClockIcon, PersonIcon } from "@radix-ui/react-icons";

import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types";
import Image from "next/image";

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPostComponent({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <span>{post.readingTime} min de lecture</span>
          </div>
          <div className="flex items-center gap-2">
            <PersonIcon className="h-4 w-4" />
            <span>Par {post.author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
