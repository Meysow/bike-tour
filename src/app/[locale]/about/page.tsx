import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { Icons } from "@/components/shared/icons";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/utils/metadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "about");

export default function AboutPage(): JSX.Element {
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
                <Balancer>
                  Welcome to{" "}
                  <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                    RentaBikeParis
                  </span>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>
                  Discover the freedom of exploring Paris like a Parisian! 🚴‍♂️
                  Join me, Léo, as I share my passion for cycling and the hidden
                  gems of my beautiful city with travelers from all over the
                  world.
                </Balancer>
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
                    <Balancer>My Story 🇫🇷</Balancer>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-fuchsia-400 rounded-full"></div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  My name is Léo and I was born and raised in Paris where I
                  still love to bike around! From a young age, I loved cruising
                  around, meeting new people and discovering new places.
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  After finishing my studies in Bremen located in Germany, I
                  wanted to live the &quot;Berlin dream&quot;, where I spent
                  some wonderful years! This dynamic city gave me the chance to
                  perfect my English and German, two languages that I&apos;m
                  happy to speak when I get the chance.
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  Back in my beautiful Paris, I joined the team at Swapfiets, an
                  innovative company specialized in bike rental with a
                  maintenance service included. Thanks to this experience, I saw
                  a growing demand for short-term rentals, particularly from
                  tourists.
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  That&apos;s when I decided to set up{" "}
                  <span className="font-semibold text-primary">
                    RentaBikeParis
                  </span>
                  , my own bike rental and guided tour company, with the idea of
                  sharing the beauty of my city in my own way. Thanks to
                  RentaBikeParis, I have the opportunity to share my passion for
                  cycling, enriching encounters and discovering Paris with
                  travelers from all over the world! ✨
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
                <Balancer>
                  Meet our{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Guides
                  </span>
                </Balancer>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>
                  Passionate locals who love sharing their city with visitors
                  from around the world.
                </Balancer>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/avatars/rafalkowalski.jpeg"
                    alt="Pierre - Lead Guide"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Pierre</h3>
                <p className="text-sm text-muted-foreground">
                  Lead Guide & Co-founder
                </p>
                <p className="text-muted-foreground">
                  Born and raised in Paris, Pierre knows every corner of the
                  city. His passion for cycling and local history makes every
                  tour unforgettable.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/avatars/jennyblack.jpeg"
                    alt="Marie - Art Specialist"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Marie</h3>
                <p className="text-sm text-muted-foreground">
                  Art & Culture Specialist
                </p>
                <p className="text-muted-foreground">
                  An art history graduate, Marie specializes in our artistic
                  tours. She&apos;ll show you Paris through the eyes of the
                  great masters.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/avatars/kevinhamilton.jpeg"
                    alt="Jean - Bike Technician"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">Jean</h3>
                <p className="text-sm text-muted-foreground">Bike Technician</p>
                <p className="text-muted-foreground">
                  Our bike whisperer! Jean ensures every bike is in perfect
                  condition and can fix anything on the spot. Safety is his
                  middle name.
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
                <Balancer>
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Values
                  </span>
                </Balancer>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>
                  The principles that guide everything we do at RentaBikeParis.
                </Balancer>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <Icons.check className="size-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Safety First</h3>
                <p className="text-muted-foreground">
                  Your safety is our top priority. All our bikes are regularly
                  maintained and we provide helmets and safety briefings with
                  every rental.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold text-lg">Eco-Friendly</h3>
                <p className="text-muted-foreground">
                  We believe in sustainable tourism. Biking is the greenest way
                  to explore Paris while reducing your carbon footprint.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-semibold text-lg">Local Love</h3>
                <p className="text-muted-foreground">
                  As locals, we&apos;re passionate about sharing the real Paris
                  with you. We support local businesses and hidden gems off the
                  beaten path.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-lg">Quality Service</h3>
                <p className="text-muted-foreground">
                  We maintain high standards in everything we do, from bike
                  maintenance to customer service. Your satisfaction is our
                  guarantee.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg">Personalized</h3>
                <p className="text-muted-foreground">
                  Every tour and rental is tailored to your needs. We adapt our
                  routes and recommendations to match your interests and fitness
                  level.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-lg">Community</h3>
                <p className="text-muted-foreground">
                  We&apos;re building a community of cycling enthusiasts who
                  share our love for Paris and sustainable transportation.
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
                <Balancer>
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Partnership
                  </span>
                </Balancer>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                <Balancer>
                  Quality and reliability through trusted collaboration 🤝
                </Balancer>
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚴‍♂️</span>
                </div>
                <h3 className="font-semibold text-2xl">
                  Swapfiets Partnership
                </h3>
                <p className="text-lg text-muted-foreground leading-8">
                  I&apos;m grateful to have Swapfiets as a partner so that
                  everyone can enjoy their bikes, even for a short time! Their
                  support has been important in the development of
                  RentaBikeParis, and I&apos;m proud to work with such a dynamic
                  and committed company.
                </p>
                <p className="text-lg text-muted-foreground leading-8">
                  Thanks to this partnership, I can offer you high-quality,
                  stylish bikes with the distinctive blue tires and the
                  reliability of professional maintenance. Safety, comfort, and
                  quality are always our top priorities!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>Ready to hit the road together?</Balancer>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>
                Whether you&apos;re a tourist eager to discover the city or a
                Parisian looking for an urban adventure, I&apos;d be more than
                happy to bring you on your next cycling excursion in Paris city!
                We look forward to hit the road together! 💫
              </Balancer>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white">📧</span>
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  {siteConfig.company.email}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white">📱</span>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  {siteConfig.company.phone}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-fuchsia-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white">📍</span>
                </div>
                <h3 className="font-semibold mb-2">Find Us</h3>
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
                Book a Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
              >
                Rent a Bike
              </Button>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  Find{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Us
                  </span>
                </Balancer>
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
