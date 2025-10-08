import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "fr", "de", "nl", "es"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return {
    locale: locale as string,
    messages: (await import(`./${locale}.json`)).default,
  };
});
