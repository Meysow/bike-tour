"use client";

import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

// Helper function to render text with clickable links
const renderTextWithLinks = (
  text: string,
  siteConfig: typeof import("@/config/site").siteConfig
) => {
  const parts = text.split(
    /(https:\/\/rentabikeparis\.fr\/|18 Ter Rue Delizy, 93500 Pantin|143 rue emile julien 34070 Montpellier|0892977093)/g
  );

  return parts.map((part, index) => {
    if (part === "https://rentabikeparis.fr/") {
      return (
        <a
          key={index}
          href={siteConfig.company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 underline font-bold"
        >
          {part}
        </a>
      );
    } else if (part === "18 Ter Rue Delizy, 93500 Pantin") {
      return (
        <a
          key={index}
          href={`https://maps.google.com/?q=${encodeURIComponent(
            siteConfig.company.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 underline font-bold"
        >
          {part}
        </a>
      );
    } else if (part === "143 rue emile julien 34070 Montpellier") {
      return (
        <a
          key={index}
          href={`https://maps.google.com/?q=${encodeURIComponent(
            siteConfig.hosting.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 underline font-bold"
        >
          {part}
        </a>
      );
    } else if (part === "0892977093") {
      return (
        <a
          key={index}
          href={`tel:${siteConfig.hosting.phone}`}
          className="text-orange-500 hover:text-orange-600 underline font-bold"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export function TermsPageContent(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "legal").terms;

  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-lg leading-8 text-muted-foreground mb-8">{t.intro}</p>

      <p className="text-lg leading-8 text-muted-foreground mb-12">
        {t.intro2}
      </p>

      <div className="space-y-12">
        {/* Article 1 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article1.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {renderTextWithLinks(
                t.article1.content1
                  .replace("{website}", siteConfig.company.website)
                  .replace("{companyName}", siteConfig.company.name)
                  .replace("{address}", siteConfig.company.address),
                siteConfig
              )}
            </p>
            <p>
              <strong>{t.article1.phoneLabel}</strong>{" "}
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="text-orange-500 hover:text-orange-600 underline font-bold"
              >
                {siteConfig.company.phone}
              </a>{" "}
              <strong>{t.article1.emailLabel}</strong>{" "}
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="text-orange-500 hover:text-orange-600 underline font-bold"
              >
                {siteConfig.company.email}
              </a>
            </p>
            <p>
              {renderTextWithLinks(
                t.article1.content2
                  .replace("{website}", siteConfig.company.website)
                  .replace("{hostingCompany}", siteConfig.hosting.company)
                  .replace("{hostingAddress}", siteConfig.hosting.address)
                  .replace("{hostingPhone}", siteConfig.hosting.phone),
                siteConfig
              )}
            </p>
          </div>
        </div>

        {/* Article 2 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article2.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {renderTextWithLinks(
                t.article2.content1.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{t.article2.service1}</strong>
              </li>
            </ul>
            <p>{t.article2.content2}</p>
          </div>
        </div>

        {/* Article 3 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article3.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t.article3.content1}</p>
          </div>
        </div>

        {/* Article 4 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article4.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t.article4.content1}</p>
            <p>{t.article4.content2}</p>
            <p>{t.article4.content3}</p>
            <p>{t.article4.content4}</p>
          </div>
        </div>

        {/* Article 5 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article5.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {renderTextWithLinks(
                t.article5.content1.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
            <p>
              {renderTextWithLinks(
                t.article5.content2.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
            <p>
              {renderTextWithLinks(
                t.article5.content3.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
            <p>{t.article5.content4}</p>
          </div>
        </div>

        {/* Article 6 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article6.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {renderTextWithLinks(
                t.article6.content1.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
          </div>
        </div>

        {/* Article 7 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article7.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t.article7.content1}</p>
            <p>
              {renderTextWithLinks(
                t.article7.content2.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
            <p>
              {renderTextWithLinks(
                t.article7.content3.replace(
                  "{website}",
                  siteConfig.company.website
                ),
                siteConfig
              )}
            </p>
            <p>{t.article7.content4}</p>
            <p>{t.article7.content5}</p>
          </div>
        </div>

        {/* Article 8 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t.article8.title}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t.article8.content1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
