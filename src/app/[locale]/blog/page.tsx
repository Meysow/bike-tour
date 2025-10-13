import { BlogList } from "@/components/blog/blog-list";
import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { getAllPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/utils/metadata";
import Balancer from "react-wrap-balancer";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "blog");

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 lg:mt-28">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <Balancer>
                  Our{" "}
                  <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                    Blog
                  </span>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>
                  Discover tips, stories, and insights about cycling in Paris.
                  From hidden gems to safety tips, our blog has everything you
                  need to make the most of your bike adventure in the City of
                  Light.
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <BlogList posts={posts} />
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
