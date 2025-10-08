import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { Icons } from "@/components/shared/icons";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/utils/metadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "tours");

export default function ToursPage(): JSX.Element {
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
                  Discover our{" "}
                  <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                    Guided Tours
                  </span>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>
                  Join us on unforgettable bike tours through the heart of
                  Paris. Explore iconic landmarks, discover hidden gems, and
                  experience the city like a true Parisian with our expert local
                  guides.
                </Balancer>
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
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Full Tour Experience
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>All around Paris by Bike</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">€45</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Starting in the heart of Paris 💫 we will take you to our
                    most beautiful spots around the city 🚴🏻‍♂️ The tour is a
                    perfect mix between typical Parisian streets and emblematic
                    monuments of the city.
                  </Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Tour Highlights</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Louvre Museum & Tuileries Garden
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Notre-Dame Cathedral
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Latin Quarter & Saint-Germain
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Champs-Élysées & Arc de Triomphe
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Eiffel Tower & Seine River
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">Starting Point</div>
                          <div className="text-sm text-muted-foreground">
                            {siteConfig.company.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">Duration</div>
                          <div className="text-sm text-muted-foreground">
                            3-hour ride around Paris
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">👤</span>
                        <div>
                          <div className="font-medium">Group Size</div>
                          <div className="text-sm text-muted-foreground">
                            Max 12 participants
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚴</span>
                        <div>
                          <div className="font-medium">Equipment</div>
                          <div className="text-sm text-muted-foreground">
                            Bike & helmet included
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Book This Tour
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-8 text-lg font-bold tracking-wide"
                  >
                    Learn More
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

        {/* Tour 2 - Evening Lights */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <Image
                  alt="Paris evening lights tour"
                  src="/images/hero/palais-royal.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="space-y-6 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Evening Lights Tour
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>
                      Experience the Magic of Paris Under the Lights
                    </Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">€45</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Join us for a nighttime adventure as Paris lights up. See
                    the Eiffel Tower, Champs-Elysées, and the Seine in all their
                    illuminated glory.
                  </Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      Evening Highlights
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Eiffel Tower Sparkle Show
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Champs-Élysées at Night
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Seine River Reflections
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Notre-Dame Illuminated
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Parisian Café Culture
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">Starting Point</div>
                          <div className="text-sm text-muted-foreground">
                            15 avenue Montaigne, 75008 Paris
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">Duration</div>
                          <div className="text-sm text-muted-foreground">
                            2-hour evening ride
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌙</span>
                        <div>
                          <div className="font-medium">Best Time</div>
                          <div className="text-sm text-muted-foreground">
                            Sunset to 10 PM
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">☕</span>
                        <div>
                          <div className="font-medium">Break</div>
                          <div className="text-sm text-muted-foreground">
                            Hot drinks under the stars
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Book This Tour
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-8 text-lg font-bold tracking-wide"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tour 3 - Hidden Gems */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Hidden Gems of Paris
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>
                      Discover Parisian Secrets Off the Beaten Path
                    </Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">€45</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Venture beyond the tourist trails to discover lesser-known
                    Parisian neighborhoods, hidden alleys, and secret courtyards
                    with local charm.
                  </Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Secret Spots</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Belleville Neighborhood
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Butte-aux-Cailles Village
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Secret Passages & Courtyards
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Local Artists Studios
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Hidden Street Art
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">Starting Point</div>
                          <div className="text-sm text-muted-foreground">
                            10 rue Oberkampf, 75011 Paris
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">Duration</div>
                          <div className="text-sm text-muted-foreground">
                            3.5-hour exploration
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚶</span>
                        <div>
                          <div className="font-medium">Pace</div>
                          <div className="text-sm text-muted-foreground">
                            Leisurely with stops
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">☕</span>
                        <div>
                          <div className="font-medium">Break</div>
                          <div className="text-sm text-muted-foreground">
                            Local café refreshments
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Book This Tour
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-8 text-lg font-bold tracking-wide"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="Paris hidden gems tour"
                  src="/images/hero/burren.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tour 4 - Art and Architecture */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <Image
                  alt="Paris art and architecture tour"
                  src="/images/hero/leophil.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="space-y-6 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Art and Architecture
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>Explore the Artistic Soul of Paris</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">€45</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Perfect for art lovers, this tour covers famous art spots,
                    from the Louvre to local galleries, and architectural
                    highlights around Paris.
                  </Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Art & Culture</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Louvre Museum Exterior
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Orsay Museum & Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Montmartre Artists Quarter
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Haussmann Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Local Art Galleries
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">Starting Point</div>
                          <div className="text-sm text-muted-foreground">
                            40 rue de Richelieu, 75001 Paris
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">Duration</div>
                          <div className="text-sm text-muted-foreground">
                            4-hour in-depth tour
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🎨</span>
                        <div>
                          <div className="font-medium">Focus</div>
                          <div className="text-sm text-muted-foreground">
                            Art history & architecture
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📸</span>
                        <div>
                          <div className="font-medium">Break</div>
                          <div className="text-sm text-muted-foreground">
                            Photos at Tuileries Garden
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Book This Tour
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 px-8 text-lg font-bold tracking-wide"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>Ready to explore Paris by bike?</Balancer>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>
                All our tours include professional guides, quality bikes, and
                unforgettable memories. Book your adventure today!
              </Balancer>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
              >
                Book a Tour Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Meeting Point Map */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  Meeting{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Point
                  </span>
                </Balancer>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4">
                <Balancer>
                  All our tours start from our shop. Come 15 minutes early for
                  bike fitting and safety briefing!
                </Balancer>
              </p>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icons.paperPlane className="size-5" />
                  <span className="font-medium">
                    {siteConfig.company.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.user className="size-5" />
                  <span>{siteConfig.company.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.email className="size-5" />
                  <span>{siteConfig.company.email}</span>
                </div>
              </div>
            </div>
            <GoogleMap address={siteConfig.company.location} />
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
