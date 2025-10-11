import { type Locale } from "@/config/i18n";
import { rentMetadata } from "@/config/metadata";
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
  const currentPath = routes.rent[currentLocale];

  // Générer les URLs alternatives pour toutes les langues
  const languages: Record<string, string> = {};
  Object.entries(routes.rent).forEach(([lang, path]) => {
    if (lang !== "filePath") {
      languages[lang] = `${baseUrl}${path}`;
    }
  });
  languages["x-default"] = `${baseUrl}${routes.rent.en}`;

  return {
    title: rentMetadata.title[currentLocale] || rentMetadata.title.en,
    description:
      rentMetadata.description[currentLocale] || rentMetadata.description.en,
    keywords: rentMetadata.keywords,
    alternates: {
      canonical: `${baseUrl}${currentPath}`,
      languages,
    },
    openGraph: {
      title: rentMetadata.title[currentLocale] || rentMetadata.title.en,
      description:
        rentMetadata.description[currentLocale] || rentMetadata.description.en,
      url: `${baseUrl}${currentPath}`,
      siteName: siteConfig.name,
      locale:
        currentLocale === "fr"
          ? "fr_FR"
          : `${currentLocale}_${currentLocale.toUpperCase()}`,
      type: "website",
      images: [
        {
          url: `${baseUrl}${rentMetadata.ogImage}`,
          width: 1200,
          height: 630,
          alt: "Bike Rental Paris - Electric and City Bikes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: rentMetadata.title[currentLocale] || rentMetadata.title.en,
      description:
        rentMetadata.description[currentLocale] || rentMetadata.description.en,
      images: [`${baseUrl}${rentMetadata.ogImage}`],
      creator: "@rentabikeparis",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
