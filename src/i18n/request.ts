import { isValidLocale, type Locale } from "@/config/i18n";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !isValidLocale(locale)) {
    notFound();
  }

  return {
    locale: locale as string,
    messages: (await import(`./${locale as Locale}.json`)).default,
  };
});
