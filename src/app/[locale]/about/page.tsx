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
      <div className="min-h-screen bg-background mt-20 banner:mt-28">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <Balancer>
                  About{" "}
                  <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                    RentaTour
                  </span>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>
                  We&apos;re passionate about helping you discover Paris in the
                  most authentic way possible. Our mission is to create
                  unforgettable cycling experiences that connect you with the
                  heart and soul of the City of Light.
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>Our Story</Balancer>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-fuchsia-400 rounded-full"></div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Founded by passionate Parisians who believe that the best
                    way to experience our beautiful city is on two wheels. We
                    started RentaTour with a simple vision: to make Paris
                    accessible to everyone through guided bike tours and quality
                    bike rentals.
                  </Balancer>
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Our team of local guides knows every hidden alley, every
                    secret courtyard, and every story that makes Paris truly
                    magical. We&apos;re not just showing you the sights –
                    we&apos;re sharing our love for this incredible city.
                  </Balancer>
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">
                      Happy Customers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Bikes Available
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">4.9★</div>
                    <div className="text-sm text-muted-foreground">
                      Average Rating
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="RentaTour team and bikes"
                  src="/images/hero/louvre.jpg"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
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
                  The principles that guide everything we do at RentaTour.
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

        {/* Our Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  Meet our{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Team
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
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍🚴</span>
                </div>
                <h3 className="font-semibold text-lg">Pierre</h3>
                <p className="text-sm text-muted-foreground">
                  Lead Guide & Founder
                </p>
                <p className="text-muted-foreground">
                  Born and raised in Paris, Pierre knows every corner of the
                  city. His passion for cycling and local history makes every
                  tour unforgettable.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👩‍🚴</span>
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
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary/20 to-fuchsia-400/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍🔧</span>
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

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>Ready to explore Paris with us?</Balancer>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>
                Whether you&apos;re interested in a guided tour or bike rental,
                we&apos;re here to help you create the perfect Parisian
                adventure.
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
