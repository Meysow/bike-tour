"use client";

import {
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import Balancer from "react-wrap-balancer";

export default function ToursPage(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "tours");

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 lg:mt-28">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <HighlightText>{t.page.heroTitle}</HighlightText>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>{t.page.heroSubtitle}</Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Tour 1 - All around Paris */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="category"
                    className="px-4 py-2 text-sm font-semibold"
                  >
                    {t["1"].title}
                  </Badge>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>{t["1"].subtitle}</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {t["1"].price}
                    </span>
                    <span className="text-muted-foreground">
                      {t.page.perPerson}
                    </span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>{t["1"].description}</Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      {t.page.tourHighlights}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.louvre}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.notreDame}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.latinQuarter}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.champsElysees}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.eiffelTower}
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <span className="text-base">🇫🇷</span>
                      <span className="text-base">🇬🇧</span>
                      <span className="text-base">🇩🇪</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      {t.page.practicalInfo}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">
                            {t.page.startingPoint}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.practicalDetails.startingPoint}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">
                            {t.page.durationDistance}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.practicalDetails.duration1}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📅</span>
                        <div>
                          <div className="font-medium">
                            {t.page.availability}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.practicalDetails.availability}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚴</span>
                        <div>
                          <div className="font-medium">
                            {t.page.bikeOptions}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.yourChoiceBike}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📝</span>
                        <div>
                          <div className="font-medium">{t.page.booking}</div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.reserveAdvance}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t.page.pricing}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.page.childBike}
                      </div>
                      <div className="text-2xl font-bold text-primary">€35</div>
                    </div>
                    <div className="p-4 rounded-lg border border-primary bg-primary/5">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.page.pedalBike}
                      </div>
                      <div className="text-2xl font-bold text-primary">€40</div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.page.electricBike}
                      </div>
                      <div className="text-2xl font-bold text-primary">€50</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {t.page.optionalAccessories}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
                    asChild
                  >
                    <Link
                      href={siteConfig.links.tourBooking}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.page.bookThisTour}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="Paris bike tour - All around Paris"
                  src="/images/hero/louvre.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tour 2 - Canal Saint-Martin */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="category"
                    className="px-4 py-2 text-sm font-semibold"
                  >
                    {t["2"].title}
                  </Badge>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>{t["2"].subtitle}</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {t["2"].price}
                    </span>
                    <span className="text-muted-foreground">
                      {t.page.perPerson}
                    </span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>{t["2"].description}</Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      {t.page.tourHighlights}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.canalSaintMartin}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.ironFootbridges}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.trendyCafes}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.placeRepublique}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {t.page.highlights.hiddenCourtyards}
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <span className="text-base">🇫🇷</span>
                      <span className="text-base">🇬🇧</span>
                      <span className="text-base">🇩🇪</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      {t.page.practicalInfo}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">
                            {t.page.startingPoint}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.practicalDetails.startingPoint}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">
                            {t.page.durationDistance}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.practicalDetails.duration2}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📅</span>
                        <div>
                          <div className="font-medium">
                            {t.page.availability}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.practicalDetails.availability}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚴</span>
                        <div>
                          <div className="font-medium">
                            {t.page.bikeOptions}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.yourChoiceBike}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📝</span>
                        <div>
                          <div className="font-medium">{t.page.booking}</div>
                          <div className="text-sm text-muted-foreground">
                            {t.page.reserveAdvance}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t.page.pricing}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.page.childBike}
                      </div>
                      <div className="text-2xl font-bold text-primary">€35</div>
                    </div>
                    <div className="p-4 rounded-lg border border-primary bg-primary/5">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.page.pedalBike}
                      </div>
                      <div className="text-2xl font-bold text-primary">€40</div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.page.electricBike}
                      </div>
                      <div className="text-2xl font-bold text-primary">€50</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {t.page.optionalAccessories}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
                    asChild
                  >
                    <Link
                      href={siteConfig.links.tourBooking}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.page.bookThisTour}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="Canal Saint-Martin bike tour"
                  src="/images/hero/palais-royal.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Tours Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="category"
                    className="px-4 py-2 text-sm font-semibold"
                  >
                    {t["3"].title}
                  </Badge>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>{t["3"].subtitle}</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {t["3"].price}
                    </span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>{t["3"].description}</Balancer>
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t["3"].additionalContent.visionTitle}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {t["3"].additionalContent.bulletPoints.map(
                      (point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <span className="text-base">🇫🇷</span>
                    <span className="text-base">🇬🇧</span>
                    <span className="text-base">🇩🇪</span>
                  </div>
                  <p className="text-muted-foreground italic">
                    {t["3"].additionalContent.closingNote}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
                    asChild
                  >
                    <Link href="#contact-section">{t.page.contactUs}</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="Private tours and team building events"
                  src="/images/hero/prive.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>{t.page.readyExplore}</Balancer>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>{t.page.allToursInclude}</Balancer>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
                asChild
              >
                <Link
                  href={siteConfig.links.tourBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.page.bookTourNow}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
                asChild
              >
                <Link href="#contact-section">{t.page.contactUs}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Meeting Point Map */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <HighlightText>{t.page.meetingPoint}</HighlightText>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4">
                <Balancer>{t.page.meetingPointDesc}</Balancer>
              </p>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <PaperPlaneIcon className="size-5" />
                  <span className="font-medium">
                    {siteConfig.company.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PersonIcon className="size-5" />
                  <span>{siteConfig.company.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeClosedIcon className="size-5" />
                  <span>{siteConfig.company.email}</span>
                </div>
              </div>
            </div>
            <GoogleMap address={siteConfig.company.location} />
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
