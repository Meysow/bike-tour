"use client";

import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-localized-routes";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";

export function TermsPageContent(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations("legal.terms");

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="font-urbanist text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
        <Balancer>{t("title")}</Balancer>
      </h1>
      <p className="text-xl text-white/90 mb-8">
        <Balancer>{t("subtitle")}</Balancer>
      </p>

      <p className="text-lg leading-8 text-muted-foreground mb-8">
        {t("intro")}
      </p>

      <p className="text-lg leading-8 text-muted-foreground mb-12">
        {t("intro2")}
      </p>

      <div className="space-y-12">
        {/* Article 1 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article1.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {t("article1.content1", {
                website: siteConfig.company.website,
                companyName: siteConfig.company.name,
                address: siteConfig.company.address,
              })}
            </p>
            <p>
              <strong>{t("article1.phoneLabel")}</strong>{" "}
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="text-orange-500 hover:text-orange-600 underline font-bold"
              >
                {siteConfig.company.phone}
              </a>{" "}
              <strong>{t("article1.emailLabel")}</strong>{" "}
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="text-orange-500 hover:text-orange-600 underline font-bold"
              >
                {siteConfig.company.email}
              </a>
            </p>
            <p>
              {t("article1.content2", {
                website: siteConfig.company.website,
                hostingCompany: siteConfig.hosting.company,
                hostingAddress: siteConfig.hosting.address,
                hostingPhone: siteConfig.hosting.phone,
              })}
            </p>
          </div>
        </div>

        {/* Article 2 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article2.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {t("article2.content1", { website: siteConfig.company.website })}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{t("article2.service1")}</strong>
              </li>
            </ul>
            <p>{t("article2.content2")}</p>
          </div>
        </div>

        {/* Article 3 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article3.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("article3.content1")}</p>
          </div>
        </div>

        {/* Article 4 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article4.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("article4.content1")}</p>
            <p>{t("article4.content2")}</p>
            <p>{t("article4.content3")}</p>
            <p>{t("article4.content4")}</p>
          </div>
        </div>

        {/* Article 5 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article5.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {t("article5.content1", { website: siteConfig.company.website })}
            </p>
            <p>
              {t("article5.content2", { website: siteConfig.company.website })}
            </p>
            <p>
              {t("article5.content3", { website: siteConfig.company.website })}
            </p>
            <p>{t("article5.content4")}</p>
          </div>
        </div>

        {/* Article 6 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article6.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {t("article6.content1", { website: siteConfig.company.website })}
            </p>
          </div>
        </div>

        {/* Article 7 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article7.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("article7.content1")}</p>
            <p>
              {t("article7.content2", { website: siteConfig.company.website })}
            </p>
            <p>
              {t("article7.content3", { website: siteConfig.company.website })}
            </p>
            <p>{t("article7.content4")}</p>
            <p>{t("article7.content5")}</p>
          </div>
        </div>

        {/* Article 8 */}
        <div>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
            {t("article8.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("article8.content1")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
