import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Blog",
  description:
    "Découvrez nos derniers articles sur le vélo à Paris, nos tours et conseils.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Blog {siteConfig.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos conseils, actualités et histoires autour du vélo à
                Paris
              </p>
            </header>
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
