"use client";

import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-localized-routes";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";

export function PrivacyPageContent(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations("legal.privacy");

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
        <Balancer>{t("title")}</Balancer>
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-white/95 sm:text-xl sm:leading-8 drop-shadow-md">
        <Balancer>
          {t("subtitle", { effectiveDate: siteConfig.legal.effectiveDate })}
        </Balancer>
      </p>

      <p className="text-lg leading-8 text-muted-foreground mb-8">
        {t("intro", {
          companyName: siteConfig.company.name,
          website: siteConfig.url,
        })}
      </p>

      {/* Article 1 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article1.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <h3 className="text-xl font-semibold text-foreground">
            {t("article1.section1.title")}
          </h3>
          <p>{t("article1.section1.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("article1.section1.item1")}</li>
            <li>{t("article1.section1.item2")}</li>
            <li>{t("article1.section1.item3")}</li>
            <li>{t("article1.section1.item4")}</li>
            <li>{t("article1.section1.item5")}</li>
          </ul>
          <p>{t("article1.section1.content2")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("article1.section1.item6")}</li>
            <li>{t("article1.section1.item7")}</li>
            <li>{t("article1.section1.item8")}</li>
            <li>{t("article1.section1.item9")}</li>
            <li>{t("article1.section1.item10")}</li>
            <li>{t("article1.section1.item11")}</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6">
            {t("article1.section2.title")}
          </h3>
          <p>{t("article1.section2.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("article1.section2.item1")}</li>
            <li>{t("article1.section2.item2")}</li>
            <li>{t("article1.section2.item3")}</li>
            <li>{t("article1.section2.item4")}</li>
          </ul>
        </div>
      </div>

      {/* Article 2 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article2.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article2.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{t("article2.item1.title")}:</strong>{" "}
              {t("article2.item1.content")}
            </li>
            <li>
              <strong>{t("article2.item2.title")}:</strong>{" "}
              {t("article2.item2.content")}
            </li>
            <li>
              <strong>{t("article2.item3.title")}:</strong>{" "}
              {t("article2.item3.content")}
            </li>
            <li>
              <strong>{t("article2.item4.title")}:</strong>{" "}
              {t("article2.item4.content")}
            </li>
            <li>
              <strong>{t("article2.item5.title")}:</strong>{" "}
              {t("article2.item5.content")}
            </li>
            <li>
              <strong>{t("article2.item6.title")}:</strong>{" "}
              {t("article2.item6.content")}
            </li>
          </ul>
        </div>
      </div>

      {/* Article 3 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article3.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article3.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{t("article3.item1.title")}:</strong>{" "}
              {t("article3.item1.content")}
            </li>
            <li>
              <strong>{t("article3.item2.title")}:</strong>{" "}
              {t("article3.item2.content")}
            </li>
            <li>
              <strong>{t("article3.item3.title")}:</strong>{" "}
              {t("article3.item3.content")}
            </li>
            <li>
              <strong>{t("article3.item4.title")}:</strong>{" "}
              {t("article3.item4.content")}
            </li>
          </ul>
        </div>
      </div>

      {/* Article 4 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article4.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article4.content")}</p>
          <h3 className="text-xl font-semibold text-foreground">
            {t("article4.typesTitle")}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{t("article4.type1.title")}:</strong>{" "}
              {t("article4.type1.content")}
            </li>
            <li>
              <strong>{t("article4.type2.title")}:</strong>{" "}
              {t("article4.type2.content")}
            </li>
            <li>
              <strong>{t("article4.type3.title")}:</strong>{" "}
              {t("article4.type3.content")}
            </li>
            <li>
              <strong>{t("article4.type4.title")}:</strong>{" "}
              {t("article4.type4.content")}
            </li>
          </ul>
          <p>{t("article4.content2")}</p>
        </div>
      </div>

      {/* Article 5 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article5.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article5.content")}</p>
          <p>{t("article5.content2")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("article5.item1")}</li>
            <li>{t("article5.item2")}</li>
            <li>{t("article5.item3")}</li>
            <li>{t("article5.item4")}</li>
          </ul>
          <p>{t("article5.content3")}</p>
        </div>
      </div>

      {/* Article 6 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article6.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article6.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{t("article6.item1.title")}:</strong>{" "}
              {t("article6.item1.content")}
            </li>
            <li>
              <strong>{t("article6.item2.title")}:</strong>{" "}
              {t("article6.item2.content")}
            </li>
            <li>
              <strong>{t("article6.item3.title")}:</strong>{" "}
              {t("article6.item3.content")}
            </li>
            <li>
              <strong>{t("article6.item4.title")}:</strong>{" "}
              {t("article6.item4.content")}
            </li>
            <li>
              <strong>{t("article6.item5.title")}:</strong>{" "}
              {t("article6.item5.content")}
            </li>
            <li>
              <strong>{t("article6.item6.title")}:</strong>{" "}
              {t("article6.item6.content")}
            </li>
            <li>
              <strong>{t("article6.item7.title")}:</strong>{" "}
              {t("article6.item7.content")}
            </li>
          </ul>
          <p>{t("article6.contact", { email: siteConfig.company.email })}</p>
          <p>{t("article6.content2")}</p>
        </div>
      </div>

      {/* Article 7 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article7.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article7.content")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("article7.item1")}</li>
            <li>{t("article7.item2")}</li>
            <li>{t("article7.item3")}</li>
            <li>{t("article7.item4")}</li>
          </ul>
          <p>{t("article7.content2")}</p>
        </div>
      </div>

      {/* Article 8 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article8.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article8.content")}</p>
        </div>
      </div>

      {/* Article 9 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article9.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article9.content")}</p>
          <p>{t("article9.content2")}</p>
        </div>
      </div>

      {/* Article 10 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("article10.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("article10.content")}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mb-12 bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          {t("contact.title")}
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>{t("contact.content")}</p>
          <div className="space-y-2">
            <p>
              <strong>{t("contact.email")}:</strong> {siteConfig.company.email}
            </p>
            <p>
              <strong>{t("contact.phone")}:</strong> +33{" "}
              {siteConfig.company.phone}
            </p>
            <p>
              <strong>{t("contact.mail")}:</strong>
            </p>
            <p className="pl-4">
              {siteConfig.company.name}
              <br />
              {siteConfig.company.address}
            </p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          {t("lastUpdate", { effectiveDate: siteConfig.legal.effectiveDate })}
        </p>
      </div>
    </div>
  );
}
