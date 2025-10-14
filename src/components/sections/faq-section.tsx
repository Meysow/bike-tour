"use client";

import Balancer from "react-wrap-balancer";

import { SafeHtmlRenderer } from "@/components/shared/safe-html-renderer";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "faq");

  return (
    <section id="faq-section" aria-label="faq section" className="w-full">
      <div className="container grid max-w-6xl gap-8 md:gap-16">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <HighlightText gradient={true}>{t.title}</HighlightText>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              <HighlightText gradient={false} className="text-foreground">
                {t.subtitle}
              </HighlightText>
            </Balancer>
          </h3>
        </div>

        <div className="grid gap-0 sm:gap-2 md:gap-4">
          {t.questions.map((item: any) => (
            <Accordion key={item.question} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="sm:text-xl sm:leading-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground sm:text-lg sm:leading-6">
                  <SafeHtmlRenderer content={item.answer} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
