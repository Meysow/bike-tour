import { type Locale } from "@/config/i18n";
import { faqMetadata } from "@/config/metadata";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const baseUrl = siteConfig.url;
  const currentPath = routes.faq[currentLocale];

  // Generate hreflang URLs for all locales
  const languages: Record<string, string> = {};
  const locales: Locale[] = ["en", "fr", "de", "nl", "es"];

  locales.forEach((loc) => {
    const localizedPath = routes.faq[loc];
    languages[loc] = `${baseUrl}${localizedPath}`;
  });
  languages["x-default"] = `${baseUrl}${routes.faq.en}`;

  return {
    title: faqMetadata.title[currentLocale] || faqMetadata.title.en,
    description:
      faqMetadata.description[currentLocale] || faqMetadata.description.en,
    keywords: faqMetadata.keywords,
    alternates: {
      canonical: `${baseUrl}${currentPath}`,
      languages,
    },
    openGraph: {
      title: faqMetadata.title[currentLocale] || faqMetadata.title.en,
      description:
        faqMetadata.description[currentLocale] || faqMetadata.description.en,
      url: `${baseUrl}${currentPath}`,
      siteName: siteConfig.name,
      locale:
        currentLocale === "fr"
          ? "fr_FR"
          : `${currentLocale}_${currentLocale.toUpperCase()}`,
      type: "website",
      images: [
        {
          url: `${baseUrl}${faqMetadata.ogImage}`,
          width: 1200,
          height: 630,
          alt: "FAQ - Frequently Asked Questions - RentaBike Paris",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: faqMetadata.title[currentLocale] || faqMetadata.title.en,
      description:
        faqMetadata.description[currentLocale] || faqMetadata.description.en,
      images: [`${baseUrl}${faqMetadata.ogImage}`],
      creator: "@rentabikeparis",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
