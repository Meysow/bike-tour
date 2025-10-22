"use client";

import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import Balancer from "react-wrap-balancer";

export default function AboutPage(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "about");
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

        {/* My Story Section */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>{t.page.myStoryTitle}</Balancer>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-fuchsia-400 rounded-full"></div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  {t.page.storyParagraph1}
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  {t.page.storyParagraph2}
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  {t.page.storyParagraph3}
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  {t.page.storyParagraph4}
                </p>
              </div>

              <div className="relative">
                <Image
                  alt="Léo with his bike"
                  src="/images/about/leo.jpg"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <HighlightText>{t.page.guidesTitle}</HighlightText>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>{t.page.guidesSubtitle}</Balancer>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage
                    src="/images/avatars/rafalkowalski.jpeg"
                    alt="Pierre - Lead Guide"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                    <PersonIcon className="size-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{t.page.pierre.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.page.pierre.role}
                </p>
                <p className="text-muted-foreground">
                  {t.page.pierre.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage
                    src="/images/avatars/jennyblack.jpeg"
                    alt="Marie - Art Specialist"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                    <PersonIcon className="size-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{t.page.marie.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.page.marie.role}
                </p>
                <p className="text-muted-foreground">
                  {t.page.marie.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage
                    src="/images/avatars/kevinhamilton.jpeg"
                    alt="Jean - Bike Technician"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                    <PersonIcon className="size-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{t.page.jean.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.page.jean.role}
                </p>
                <p className="text-muted-foreground">
                  {t.page.jean.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <HighlightText>{t.page.valuesTitle}</HighlightText>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>{t.page.valuesSubtitle}</Balancer>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <CheckIcon className="size-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">
                  {t.page.safetyFirst.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.page.safetyFirst.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-2xl">🌍</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">
                  {t.page.ecoFriendly.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.page.ecoFriendly.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-2xl">❤️</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">
                  {t.page.localLove.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.page.localLove.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-2xl">🏆</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">
                  {t.page.qualityService.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.page.qualityService.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-2xl">🎯</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">
                  {t.page.personalized.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.page.personalized.description}
                </p>
              </div>

              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-2xl">🤝</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">
                  {t.page.community.title}
                </h3>
                <p className="text-muted-foreground">
                  {t.page.community.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <HighlightText>{t.page.partnershipTitle}</HighlightText>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>{t.page.partnershipSubtitle}</Balancer>
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-3xl">🚴‍♂️</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-2xl">
                  {t.page.swapfietsTitle}
                </h3>
                <p className="text-lg text-muted-foreground leading-8">
                  {t.page.swapfietsDescription1}
                </p>
                <p className="text-lg text-muted-foreground leading-8">
                  {t.page.swapfietsDescription2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>{t.page.contactTitle}</Balancer>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>{t.page.contactSubtitle}</Balancer>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Avatar className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 mb-4">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-white">📧</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">{t.page.emailUs}</h3>
                <p className="text-muted-foreground">
                  {siteConfig.company.email}
                </p>
              </div>

              <div className="text-center">
                <Avatar className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 mb-4">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-white">📱</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">{t.page.callUs}</h3>
                <p className="text-muted-foreground">
                  {siteConfig.company.phone}
                </p>
              </div>

              <div className="text-center">
                <Avatar className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 mb-4">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-white">📍</span>
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">{t.page.findUs}</h3>
                <p className="text-muted-foreground">
                  {siteConfig.company.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
              >
                {t.page.bookTour}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
              >
                {t.page.rentBike}
              </Button>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <HighlightText>{t.page.findUsTitle}</HighlightText>
              </h2>
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
