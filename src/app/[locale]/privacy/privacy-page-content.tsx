"use client";

import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

export function PrivacyPageContent(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "legal").privacy;

  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-lg leading-8 text-muted-foreground mb-8">
        {t.introduction
          .replace("{companyName}", siteConfig.company.name)
          .replace("{website}", siteConfig.url)}{" "}
        {t.introduction2} {t.introduction3}
      </p>

      {/* Article 1 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article1.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-xl font-semibold text-foreground">
            {t.article1.subtitle1}
          </h3>
          <p>{t.article1.content1}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article1.list1.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t.article1.content2}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article1.list2.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6">
            {t.article1.subtitle2}
          </h3>
          <p>{t.article1.content3}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article1.list3.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Article 2 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article2.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article2.content1}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article2.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Article 3 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article3.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article3.content1}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article3.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Article 4 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article4.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article4.content1}</p>
          <h3 className="text-xl font-semibold text-foreground">
            {t.article4.subtitle}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {t.article4.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t.article4.content2}</p>
        </div>
      </div>

      {/* Article 5 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article5.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article5.content1}</p>
          <p>{t.article5.content2}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article5.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t.article5.content3}</p>
        </div>
      </div>

      {/* Article 6 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article6.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article6.content1}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article6.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            {t.article6.content2.replace("{email}", siteConfig.company.email)}
          </p>
          <p>{t.article6.content3}</p>
        </div>
      </div>

      {/* Article 7 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article7.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article7.content1}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.article7.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t.article7.content2}</p>
        </div>
      </div>

      {/* Article 8 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article8.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article8.content1}</p>
        </div>
      </div>

      {/* Article 9 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article9.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article9.content1}</p>
          <p>{t.article9.content2}</p>
        </div>
      </div>

      {/* Article 10 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.article10.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.article10.content1}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mb-12 bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t.contact.title}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t.contact.content1}</p>
          <div className="space-y-2">
            <p>
              <strong>{t.contact.email}</strong> {siteConfig.company.email}
            </p>
            <p>
              <strong>{t.contact.phone}</strong> {siteConfig.company.phone}
            </p>
            <p>
              <strong>{t.contact.mail}</strong> {siteConfig.company.name},{" "}
              {siteConfig.company.address}
            </p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          {t.lastUpdated} {siteConfig.legal.effectiveDate}
        </p>
      </div>
    </div>
  );
}
