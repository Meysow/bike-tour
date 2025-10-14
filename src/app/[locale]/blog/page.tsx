import { BlogList } from "@/components/blog/blog-list";
import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { Locale } from "@/config/i18n";
import { getAllPosts } from "@/lib/blog";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import Balancer from "react-wrap-balancer";

interface BlogPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = getSectionTranslations(locale, "blog");
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 lg:mt-28">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <Balancer>
                  <HighlightText>{t.page.heroTitle}</HighlightText>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>{t.page.heroSubtitle}</Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-8 md:py-12">
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
