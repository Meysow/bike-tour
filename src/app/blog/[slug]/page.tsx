import { BlogPostComponent } from "@/components/blog/blog-post";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getPostBySlug(params.slug);

    return (
      <div>
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/blog" className="flex items-center gap-2">
              <Icons.arrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </Button>
        </div>

        <BlogPostComponent post={post} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
