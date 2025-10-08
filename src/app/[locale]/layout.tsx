import {
  generatePageMetadata,
  validateLocaleParams,
} from "@/lib/utils/metadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "home");

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Valider la locale
  await validateLocaleParams(params);

  return <>{children}</>;
}
